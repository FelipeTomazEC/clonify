import { Album } from '../entities/album';
import { Artist } from '../entities/artist';
import { fetchFromApi } from '../services/spotify-web-api-service';
import { parseDataToTrack } from './data-mappers/parse-to-track';

const parseDataToArtist = (data) => {
  const name = data.name;
  const id = data.id;

  return new Artist({ id, name });
};

const parseDataToAlbum = (data) => {
  const { name, id, release_date } = data;
  const cover = data.images[0].url;
  const tracks = data.tracks.items.map(parseDataToTrack(id, cover, name));
  const artists = data.artists.map(parseDataToArtist);
  const releaseDate = new Date(release_date);

  return new Album({ artists, cover, id, name, tracks, releaseDate });
};

export async function getMultipleAlbumsFromAPI(albumsIds) {
  const endpoint = `/albums?ids=${albumsIds.join(',')}`;
  const data = await fetchFromApi(endpoint);
  const albums = data.albums.map(parseDataToAlbum);

  return albums;
}

export async function getAlbumFromAPI(albumId) {
  const endpoint = `/albums/${albumId}`;
  const data = await fetchFromApi(endpoint);

  return parseDataToAlbum(data);
}
