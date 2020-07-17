import { parseDataToPlaylist } from './data-mappers/parse-to-playlist';
import { fetchFromApi } from './spotify-web-api-service';

export async function getPlaylistFromAPI(playlistId: string) {
  const endpoint = `/playlists/${playlistId}`;
  const data = await fetchFromApi(endpoint);

  return parseDataToPlaylist(data);
}
