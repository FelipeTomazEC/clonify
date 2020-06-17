import { User } from "../entities/user";
import { fetchFromApi } from "./spotify-web-api-service";

export async function getCurrentUserInfoFromAPI() {
  const userData = await fetchFromApi("/me");
  const name = userData.display_name;
  const avatarUrl = userData.images[0].url;
  const id = userData.id;

  return new User({ name, avatarUrl, id });
}
