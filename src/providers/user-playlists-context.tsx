import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Playlist } from '../entities/playlist';
import { getUserPlaylistsFromAPI } from '../services/get-user-playlists-from-api';

export const UserPlaylistsContext = createContext<Playlist[]>([]);

interface Props {
  userId: string;
  children: ReactNode[];
}

export function UserPlaylistsProvider(props: Props) {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    getUserPlaylistsFromAPI(props.userId)
      .then((playlists) => setPlaylists(playlists))
      .catch((err) => console.error(err));
  }, [props.userId]);

  return (
    <UserPlaylistsContext.Provider value={playlists}>
      {props.children}
    </UserPlaylistsContext.Provider>
  );
}
