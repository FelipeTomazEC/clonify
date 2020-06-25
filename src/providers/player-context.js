import React, { createContext, useReducer } from "react";
import { playerReducer } from "../reducers/player-reducer";

export const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [player, dispatch] = useReducer(playerReducer, {
    queue: [],
    currentPlayingIndex: null,
    currentPlayingAudio: null,
  });

  return (
    <PlayerContext.Provider value={[player, dispatch]}>
      {children}
    </PlayerContext.Provider>
  );
}
