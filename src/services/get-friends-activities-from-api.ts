import faker from 'faker';
import { FriendActivity } from '../entities/friend-activity';
import { Playlist } from '../entities/playlist';
import { User } from '../entities/user';
import { getFakeAvatarImage } from './get-fake-avatar-image';
import { getPlaylistFromAPI } from './get-playlist-from-api';
import { fetchFromApi } from './spotify-web-api-service';

interface TopPlaylistsData {
  items: { id: string }[];
}

interface TopPlaylistsEndpointResponse {
  playlists: TopPlaylistsData;
}

function createFakeFriend(): User {
  const name = faker.name.findName();
  const id = faker.random.uuid();
  const avatarUrl = getFakeAvatarImage();

  return new User({ name, avatarUrl, id });
}

async function getTopPlaylist(): Promise<Playlist> {
  const endpoint = '/browse/categories/toplists/playlists';
  const data = await fetchFromApi<TopPlaylistsEndpointResponse>(endpoint).then(
    (response) => response.playlists
  );
  const ids = data.items.map((playlist) => playlist.id);
  const randomId = ids[Math.floor(Math.random() * ids.length)];

  return await getPlaylistFromAPI(randomId);
}

export async function getFriendsActivitiesFromAPI(): Promise<FriendActivity[]> {
  const playlist = await getTopPlaylist();
  const activities = playlist.tracks.map(
    (track) =>
      new FriendActivity({ friend: createFakeFriend(), currentSong: track })
  );

  return activities;
}
