import { getMultipleAlbumsFromAPI } from "../services/get-album-from-api";
import { getPlaylistFromAPI } from "../services/get-playlist-from-api";
import { fetchFromApi } from "../services/spotify-web-api-service";

export async function getRecentPlayedFromAPI() {
  const endpoint = "/me/player/recently-played?limit=50";
  const data = await fetchFromApi(endpoint);
  const contexts = data.items.flatMap((i) =>
    i.context && (i.context.type === "album" || i.context.type === "playlist")
      ? [i.context]
      : []
  );

  const getIdFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };

  const playlistsIds = new Set(
    contexts
      .filter((ctx) => ctx.type === "playlist")
      .map((ctx) => getIdFromUrl(ctx.href))
  );

  const albumsIds = contexts
    .filter((ctx) => ctx.type === "album")
    .map((ctx) => getIdFromUrl(ctx.href));

  const playlists = await Promise.all(
    [...playlistsIds].map(getPlaylistFromAPI)
  );

  const albums = await getMultipleAlbumsFromAPI([...new Set(albumsIds)]);

  console.log("Albums", albums);
  console.log("Playlists", playlists);

  return [...playlists, ...albums];
}
