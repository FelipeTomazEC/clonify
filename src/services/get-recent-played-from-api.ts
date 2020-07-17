import { Album } from '../entities/album';
import { Playlist } from '../entities/playlist';
import { getAlbumFromAPI } from './get-album-from-api';
import { getPlaylistFromAPI } from './get-playlist-from-api';
import { fetchFromApi } from './spotify-web-api-service';

type ContextType = 'album' | 'playlist';
type RecentPromisesCollection = Promise<Playlist | Album>[];
type URL = string;

interface Context {
  type: ContextType;
  href: URL;
}

function isValidContext(context?: Context): boolean {
  if (!context) return false;
  return context?.type === 'album' || context?.type === 'playlist';
}

export async function getRecentPlayedFromAPI() {
  const endpoint = '/me/player/recently-played?limit=50';
  const data: { items: { context?: Context }[] } = await fetchFromApi(endpoint);

  const contexts = data.items
    .filter((i) => isValidContext(i.context))
    .map((i) => i.context as Context)
    .reduce((map, ctx) => {
      const id = ctx.href.split('/').pop() as string;
      return map.set(id, ctx.type);
    }, new Map<string, ContextType>());

  const promises = [...contexts.entries()].reduce(
    (acc: RecentPromisesCollection, entry) => {
      const [id, type] = entry;
      const promise =
        type === 'album' ? getAlbumFromAPI(id) : getPlaylistFromAPI(id);
      return acc.concat([promise]);
    },
    []
  );

  const recentPlayed = await Promise.all(promises);

  return recentPlayed;
}
