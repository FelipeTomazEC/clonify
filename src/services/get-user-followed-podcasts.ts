import { Podcast } from '../entities/podcast';
import {
  parseDataToPodcast,
  PodcastData,
} from './data-mappers/parse-to-podcast';
import { fetchFromApi } from './spotify-web-api-service';

interface UserShowsResponse {
  items: { show: PodcastData }[];
}

export async function getUserFollowedPodcasts(): Promise<Podcast[]> {
  const endpoint = '/me/shows';
  const podcastsData = await fetchFromApi<UserShowsResponse>(
    endpoint
  ).then((data) => data.items.map((el) => el.show));

  return podcastsData.map(parseDataToPodcast);
}
