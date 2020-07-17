import axios from 'axios';
import { getToken } from './authentication';

export const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';

export async function fetchFromApi<T>(endpoint: string): Promise<T> {
  return axios
    .create({
      baseURL: SPOTIFY_BASE_URL,
      headers: {
        Authorization: 'Bearer ' + getToken(),
      },
    })
    .get(endpoint)
    .then((response) => response.data);
}
