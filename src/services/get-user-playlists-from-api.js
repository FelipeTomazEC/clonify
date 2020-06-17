import { getPlaylistFromAPI } from "./get-playlist-from-api";
import { fetchFromApi } from "./spotify-web-api-service";

export async function getUserPlaylistsFromAPI(userId) {
  const endpoint = `/users/${userId}/playlists?offset=0&limit=50`;
  const data = await fetchFromApi(endpoint);
  const playlistsIds = data.items.map((i) => i.id);

  const playlists = await Promise.all(playlistsIds.map(getPlaylistFromAPI));

  return playlists;
}
