import { Album } from '../entities/album';
import { AlbumData, parseDataToAlbum } from './data-mappers/parse-to-album';
import { fetchFromApi } from './spotify-web-api-service';

export async function getMultipleAlbumsFromAPI(
  albumsIds: string[]
): Promise<Album[]> {
  const endpoint = `/albums?ids=${albumsIds.join(',')}`;
  const data = await fetchFromApi<{ albums: AlbumData[] }>(endpoint);
  const albums = data.albums.map(parseDataToAlbum);

  return albums;
}

export async function getAlbumFromAPI(albumId: string): Promise<Album> {
  const endpoint = `/albums/${albumId}`;
  const data = await fetchFromApi<AlbumData>(endpoint);
  const album = parseDataToAlbum(data);

  return album;
}
