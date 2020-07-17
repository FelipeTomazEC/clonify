import { Podcast } from '../../entities/podcast';

interface Image {
  url: string;
}

export interface PodcastData {
  description: string;
  id: string;
  images: Image[];
  name: string;
  publisher: string;
}

export const parseDataToPodcast = (data: PodcastData) => {
  const covers = data.images.map((i) => i.url);

  return new Podcast({
    covers,
    description: data.description,
    id: data.id,
    name: data.name,
    publisher: data.publisher,
  });
};
