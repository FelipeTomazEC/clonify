import { AlbumData, parseDataToAlbum } from './data-mappers/parse-to-album';
import { fetchFromApi } from './spotify-web-api-service';

interface APIResponse {
  items: { added_at: string; album: AlbumData }[];
}

export async function getUserAlbumsLibrary(offset: number = 0) {
  const endpoint = `/me/albums/?limit=50&offset=${offset}`;
  const response = await fetchFromApi<APIResponse>(endpoint);

  const albums = response.items.map((item) => parseDataToAlbum(item.album));

  return albums;
}
