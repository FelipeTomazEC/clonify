import { Playlist } from '../entities/playlist';
import {
  parseDataToPlaylist,
  PlaylistData,
} from './data-mappers/parse-to-playlist';
import { fetchFromApi } from './spotify-web-api-service';

export async function getPlaylistFromAPI(id: string): Promise<Playlist> {
  const endpoint = `/playlists/${id}`;
  const data = await fetchFromApi<PlaylistData>(endpoint);

  return parseDataToPlaylist(data);
}
