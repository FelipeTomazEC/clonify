import { GenreAndMood } from '../entities/genre-and-mood';
import {
  GenreAndMoodData,
  parseDataToGenreAndMood,
} from './data-mappers/parse-to-genre-and-mood';
import { fetchFromApi } from './spotify-web-api-service';

interface CategoriesResponse {
  categories: {
    items: GenreAndMoodData[];
  };
}

export async function getGenresFromAPI(): Promise<GenreAndMood[]> {
  const endpoint = '/browse/categories?limit=50';
  const data = await fetchFromApi<CategoriesResponse>(endpoint);
  const genres = data.categories.items.map(parseDataToGenreAndMood);

  return genres;
}
