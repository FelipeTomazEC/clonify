import {
  parseDataToPodcast,
  PodcastData,
} from './data-mappers/parse-to-podcast';
import { fetchFromApi } from './spotify-web-api-service';

interface UserShowsData {
  items: { show: PodcastData }[];
}

export async function getUserFollowedPodcasts() {
  const endpoint = '/me/shows';
  const podcastsData = await fetchFromApi(
    endpoint
  ).then((data: UserShowsData) => data.items.map((el) => el.show));

  return podcastsData.map(parseDataToPodcast);
}
