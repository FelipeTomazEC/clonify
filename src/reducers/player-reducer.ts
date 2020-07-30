import { Track } from '../entities/track';
import { PlayerContextState as PlayerState } from '../providers/player-context';
import { Action } from '../types/action.type';

export enum PlayerActionType {
  CHANGE_QUEUE = 'CHANGE_QUEUE',
  PLAY_TRACK = 'PLAY_TRACK',
}

export type PlayerAction = {
  [PlayerActionType.CHANGE_QUEUE]: { queue: Track[] };
  [PlayerActionType.PLAY_TRACK]: { trackIndex: number };
};

const changeQueue = (state: PlayerState, newQueue: Track[]): PlayerState => {
  return {
    ...state,
    queue: newQueue,
  };
};

const playTrack = (state: PlayerState, trackIndex: number): PlayerState => {
  const previous = state.currentPlayingAudio;
  if (previous) previous.pause();

  const track = state.queue[trackIndex];
  const audio = new Audio(track.sourceUrl);

  return {
    ...state,
    currentPlayingIndex: trackIndex,
    currentPlayingAudio: audio,
  };
};

export const playerReducer = (
  state: PlayerState,
  action: Action<PlayerAction>
): PlayerState => {
  switch (action.type) {
    case PlayerActionType.CHANGE_QUEUE:
      return changeQueue(state, action.payload.queue);
    case PlayerActionType.PLAY_TRACK:
      return playTrack(state, action.payload.trackIndex);
    default:
      return state;
  }
};
