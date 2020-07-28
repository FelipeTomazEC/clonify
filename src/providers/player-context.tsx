import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { Track } from '../entities/track';
import { PlayerAction, playerReducer } from '../reducers/player-reducer';
import { Action } from '../types/action.type';

interface Props {
  children: ReactNode;
}

export interface PlayerContextState {
  queue: Track[];
  currentPlayingIndex: number;
  currentPlayingAudio?: HTMLAudioElement;
}

type ContextValue = [PlayerContextState, Dispatch<Action<PlayerAction>>];

export const PlayerContext = createContext<ContextValue>([
  { queue: [], currentPlayingIndex: -1 },
  () => {},
]);

export function PlayerProvider({ children }: Props) {
  const [player, dispatch] = useReducer(playerReducer, {
    queue: [],
    currentPlayingIndex: -1,
  });

  return (
    <PlayerContext.Provider value={[player, dispatch]}>
      {children}
    </PlayerContext.Provider>
  );
}
