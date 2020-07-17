import { User } from '../entities/user';
import { parseDataToUser, UserData } from './data-mappers/parse-to-user';
import { fetchFromApi } from './spotify-web-api-service';

export async function getCurrentUserInfoFromAPI(): Promise<User> {
  const data = await fetchFromApi<UserData>('/me');
  const user = parseDataToUser(data);

  return user;
}
