export const CHANGE_QUEUE = "CHANGE_QUEUE";
export const PLAY_TRACK = "PLAY_TRACK";

const changeQueue = (state, newQueue) => {
  return {
    ...state,
    queue: newQueue,
  };
};

const playTrack = (state, trackIndex) => {
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

export function playerReducer(state, action) {
  switch (action.type) {
    case CHANGE_QUEUE:
      return changeQueue(state, action.queue);
    case PLAY_TRACK:
      return playTrack(state, action.trackIndex);
    default:
      return state;
  }
}
