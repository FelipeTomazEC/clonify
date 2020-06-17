import React, { createContext, useEffect, useState } from "react";
import { getUserPlaylistsFromAPI } from "../services/get-user-playlists-from-api";

export const UserPlaylistsContext = createContext();

export function UserPlaylistsProvider({ userId, children }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getUserPlaylistsFromAPI(userId)
      .then((playlists) => setPlaylists(playlists))
      .catch((err) => console.error(err));
  }, [userId]);

  return (
    <UserPlaylistsContext.Provider value={playlists}>
      {children}
    </UserPlaylistsContext.Provider>
  );
}
