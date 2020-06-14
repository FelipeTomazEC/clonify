import React, { createContext, useEffect, useState } from "react";
import { getUserPlaylists } from "../services/spotify-web-api-service";

export const UserPlaylistsContext = createContext();

export function UserPlaylistsProvider({ userId, children }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getUserPlaylists(userId)
      .then((playlists) => setPlaylists(playlists))
      .catch((err) => console.error(err));
  }, [userId]);

  return (
    <UserPlaylistsContext.Provider value={playlists}>
      {children}
    </UserPlaylistsContext.Provider>
  );
}
