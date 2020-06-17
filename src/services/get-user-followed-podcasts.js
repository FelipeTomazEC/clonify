import { Podcast } from "../entities/podcast";
import { fetchFromApi } from "./spotify-web-api-service";

export async function getUserFollowedPodcasts() {
  const endpoint = "/me/shows";
  const podcastsData = await fetchFromApi(endpoint).then((data) =>
    data.items.map((el) => el.show)
  );

  return podcastsData.map(
    (data) =>
      new Podcast({
        covers: data.images.map((el) => el.url),
        description: data.description,
        id: data.id,
        name: data.name,
        publisher: data.publisher,
      })
  );
}
