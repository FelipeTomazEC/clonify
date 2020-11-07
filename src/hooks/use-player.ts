import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Track } from "../entities/track";
import { PlayerContext } from "../providers/player-context";
import { PlayerActionType } from "../reducers/player-reducer";

type UsePlayerHook = (tracks: Track[]) => {
  tracks: Track[];
  setTracks: Dispatch<SetStateAction<Track[]>>
  playTrack: (track: Track) => void;
}

export const usePlayer: UsePlayerHook  = (initialTracks: Track[] = []) => {
  const [tracks, setTracks] = useState<Track[]>(initialTracks)
  const [, dispatch] = useContext(PlayerContext);
  
  const playTrack = (track: Track) => {
    const trackIndex = tracks.indexOf(track);

    dispatch({
      type: PlayerActionType.CHANGE_QUEUE,
      payload: { queue: tracks },
    });

    dispatch({
      type: PlayerActionType.PLAY_TRACK,
      payload: { trackIndex },
    });
  }
  
  return {tracks, setTracks, playTrack}
}