import { GenreAndMood } from '../../entities/genre-and-mood';

interface Icon {
  url: string;
}

export interface GenreAndMoodData {
  icons: Icon[];
  id: string;
  name: string;
}

export const parseDataToGenreAndMood = (data: GenreAndMoodData) => {
  const { name, id } = data;
  const cover = data.icons[0].url;

  return new GenreAndMood({ cover, name, id });
};
