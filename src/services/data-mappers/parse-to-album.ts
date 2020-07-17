import { Album } from '../../entities/album';
import { ArtistData, parseDataToArtist } from './parse-to-artist';
import { parseDataToTrack, TrackData } from './parse-to-track';

interface Image {
  url: string;
}

export interface AlbumData {
  artists: ArtistData[];
  id: string;
  name: string;
  images: Image[];
  tracks: { items: TrackData[] };
  release_date: string;
}

export const parseDataToAlbum = (data: AlbumData) => {
  const { name, id, release_date } = data;
  const cover = data.images[0].url;
  const tracks = data.tracks.items.map(parseDataToTrack(id, cover, name));
  const artists = data.artists.map(parseDataToArtist);
  const releaseDate = new Date(release_date);

  return new Album({ artists, cover, id, name, tracks, releaseDate });
};
