import { Track } from '../entities/track';
import { AlbumData } from './data-mappers/parse-to-album';
import { parseDataToTrack, TrackData } from './data-mappers/parse-to-track';
import { fetchFromApi } from './spotify-web-api-service';

interface APIResponse {
  items: {
    added_at: string;
    track: TrackData & { album: AlbumData };
  }[];
}

export async function getUserTracksLibrary(offset: number = 0): Promise<Track[]> {
  const endpoint = `/me/tracks/?limit=50&offset=${offset}`;
  const response = await fetchFromApi<APIResponse>(endpoint);

  const tracks = response.items.map((item) => {
    const { album } = item.track;
    const parser = parseDataToTrack(album.id, album.images[0].url, album.name);
    return parser(item.track);
  });

  return tracks;
}
