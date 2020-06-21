import { GenreAndMood } from "../entities/genre-and-mood";
import { fetchFromApi } from "./spotify-web-api-service";

function mapDataToGenreAndMood(data) {
  const { name, id } = data;
  const cover = data.icons[0].url;

  return new GenreAndMood({ cover, name, id });
}

export async function getGenresFromAPI() {
  const endpoint = "/browse/categories?limit=50";
  const data = await fetchFromApi(endpoint);
  const genres = data.categories.items.map(mapDataToGenreAndMood);

  return genres;
}
