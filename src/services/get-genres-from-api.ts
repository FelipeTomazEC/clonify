import { parseDataToGenreAndMood } from './data-mappers/parse-to-genre-and-mood';
import { fetchFromApi } from './spotify-web-api-service';

export async function getGenresFromAPI() {
  const endpoint = '/browse/categories?limit=50';
  const data = await fetchFromApi(endpoint);
  const genres = data.categories.items.map(parseDataToGenreAndMood);

  return genres;
}
