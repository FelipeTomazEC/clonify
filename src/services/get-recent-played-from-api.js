import { getMultipleAlbumsFromAPI } from "../services/get-album-from-api";
import { getPlaylistFromAPI } from "../services/get-playlist-from-api";
import { fetchFromApi } from "../services/spotify-web-api-service";

export async function getRecentPlayedFromAPI() {
  const endpoint = "/me/player/recently-played?limit=50";
  const data = await fetchFromApi(endpoint);

  const contexts = data.items.flatMap((i) => {
    const { context } = i;
    if (!context) return [];
    if (context.type !== "album" && context.type !== "playlist") return [];

    const id = context.href.split("/").pop();
    const type = context.type;
    return [[id, type]];
  });

  const withoutDuplicates = [...new Map(contexts).entries()];

  const recentPlayed = await Promise.all(
    withoutDuplicates.map(([id, type]) =>
      type === "album" ? getMultipleAlbumsFromAPI([id]) : getPlaylistFromAPI(id)
    )
  );

  return recentPlayed;
}
