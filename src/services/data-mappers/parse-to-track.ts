import { Track } from '../../entities/track';
import { ArtistData, parseDataToArtist } from './parse-to-artist';

export interface TrackData {
  artists: ArtistData[];
  duration_ms: number;
  id: string;
  preview_url: string;
  name: string;
}

export const parseDataToTrack = (
  albumId: string,
  albumCover: string,
  albumName: string
) => (data: TrackData) => {
  const title = data.name;
  const sourceUrl = data.preview_url;
  const id = data.id;
  const artists = data.artists.map(parseDataToArtist);
  const duration = data.duration_ms;

  return new Track({
    id,
    title,
    sourceUrl,
    artists,
    albumCover,
    albumId,
    albumName,
    duration,
  });
};
