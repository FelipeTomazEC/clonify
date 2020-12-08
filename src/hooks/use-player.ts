import {Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import {Track} from "../entities/track";
import {PlayerContext} from "../providers/player-context";
import {PlayerActionType} from "../reducers/player-reducer";
import {PlayerStatus} from "../constants/player-status.enum";

type UsePlayerHook = (tracks: Track[]) => {
  tracks: Track[];
  setTracks: Dispatch<SetStateAction<Track[]>>
  playTrack: (track: Track) => void;
  activeTrackId: string;
  status: PlayerStatus;
}

export const usePlayer: UsePlayerHook = (initialTracks: Track[] = []) => {
  const [tracks, setTracks] = useState<Track[]>(initialTracks);
  const [activeTrackId, setActiveTrackId] = useState<string>('');
  const [status, setStatus] = useState<PlayerStatus>(PlayerStatus.STOPPED);
  const [player, dispatch] = useContext(PlayerContext);

  const playTrack = (track: Track) => {
    if (status === PlayerStatus.STOPPED || track.id !== activeTrackId) {
      const trackIndex = tracks.indexOf(track);
      dispatch({
        type: PlayerActionType.CHANGE_QUEUE,
        payload: {queue: tracks},
      });

      dispatch({
        type: PlayerActionType.PLAY_TRACK,
        payload: {trackIndex},
      });
      setStatus(PlayerStatus.PLAYING);
    }

    if (status === PlayerStatus.PAUSED && track.id === activeTrackId) {
      player.currentPlayingAudio?.play();
      setStatus(PlayerStatus.PLAYING);
    }

    if (status === PlayerStatus.PLAYING && track.id === activeTrackId) {
      player.currentPlayingAudio?.pause();
      setStatus(PlayerStatus.PAUSED);
    }
  }

  //TODO -- Use 'tracks' instead of 'player.queue' after apply usePlayer hook in the other components
  useEffect(() => {
    if (player.currentPlayingIndex < 0) {
      return;
    }

    const index = player.currentPlayingIndex;
    const track = player.queue[index];
    setActiveTrackId(track?.id);
  }, [player.currentPlayingIndex, player.queue]);

  return {tracks, setTracks, playTrack, activeTrackId, status}
}