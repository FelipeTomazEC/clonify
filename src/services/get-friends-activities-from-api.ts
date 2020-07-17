import faker from 'faker';
import { FriendActivity } from '../entities/friend-activity';
import { Playlist } from '../entities/playlist';
import { User } from '../entities/user';
import { getPlaylistFromAPI } from './get-playlist-from-api';
import { fetchFromApi } from './spotify-web-api-service';

interface TopPlaylistsData {
  items: { id: string }[];
}

function createFakeFriend(): User {
  const name = faker.name.findName();
  const avatarUrl = faker.internet.avatar();
  const id = faker.random.uuid();

  return new User({ name, avatarUrl, id });
}

async function getTopPlaylist(): Promise<Playlist> {
  const endpoint = '/browse/categories/toplists/playlists';
  const data: TopPlaylistsData = await fetchFromApi(endpoint).then(
    (response) => response.playlists
  );
  const ids = data.items.map((playlist) => playlist.id);
  const randomId = ids[Math.floor(Math.random() * ids.length)];

  return await getPlaylistFromAPI(randomId);
}

export async function getFriendsActivitiesFromAPI() {
  const playlist = await getTopPlaylist();
  const activities = playlist.tracks.map(
    (track) =>
      new FriendActivity({ friend: createFakeFriend(), currentSong: track })
  );

  return activities;
}
