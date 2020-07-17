import { getPlaylistFromAPI } from './get-playlist-from-api';
import { fetchFromApi } from './spotify-web-api-service';

interface UserPlaylistsData {
  items: { id: string }[];
}

export async function getUserPlaylistsFromAPI(userId: string) {
  const endpoint = `/users/${userId}/playlists?offset=0&limit=50`;
  const data: UserPlaylistsData = await fetchFromApi(endpoint);

  const ids = data.items.map((i) => i.id);

  const playlists = await Promise.all(ids.map((id) => getPlaylistFromAPI(id)));

  return playlists;
}
