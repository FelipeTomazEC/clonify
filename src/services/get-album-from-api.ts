import { parseDataToAlbum } from './data-mappers/parse-to-album';
import { fetchFromApi } from './spotify-web-api-service';

export async function getMultipleAlbumsFromAPI(albumsIds: string[]) {
  const endpoint = `/albums?ids=${albumsIds.join(',')}`;
  const data = await fetchFromApi(endpoint);
  const albums = data.albums.map(parseDataToAlbum);

  return albums;
}

export async function getAlbumFromAPI(albumId: string) {
  const endpoint = `/albums/${albumId}`;
  const data = await fetchFromApi(endpoint);
  const album = parseDataToAlbum(data);

  return album;
}
