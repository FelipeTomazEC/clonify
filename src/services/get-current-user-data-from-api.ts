import { parseDataToUser } from './data-mappers/parse-to-user';
import { fetchFromApi } from './spotify-web-api-service';

export async function getCurrentUserInfoFromAPI() {
  const data = await fetchFromApi('/me');
  const user = parseDataToUser(data);

  return user;
}
