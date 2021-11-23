import React, { useContext, useEffect, useState, createContext, useCallback } from 'react';
import { PlayerStatus } from '../constants/player-status.enum';
import { Track } from '../entities/track';

interface PlayerContextData {
  queue: Track[];
  replaceQueue: (tracks: Track[]) => void;
  currentTrack?: Track;
  playTrack: (track: Track) => void;
  goTo: (time: number) => void;
  playerStatus: PlayerStatus;
  addProgressListener: (cb: (progress: number) => void) => void;
  changeVolume: (volume: number) => void;
  currentTrackDuration: number;
}

export const PlayerContext = createContext<PlayerContextData>({} as PlayerContextData);

export const PlayerProvider: React.FC = ({children}) => {
  const [queue, setQueue] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track>();
  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>(PlayerStatus.STOPPED);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement>();
  const [currentTrackDuration, setCurrentTrackDuration] = useState<number>(0);

  useEffect(() => {
    if(audioElement) {      
      audioElement.onpause = () => setPlayerStatus(PlayerStatus.PAUSED);
      audioElement.onplay = () => setPlayerStatus(PlayerStatus.PLAYING);
      audioElement.onloadedmetadata  = () => setCurrentTrackDuration(audioElement.duration);
      audioElement.play();
    }

    return () => {
      audioElement?.pause();
      audioElement?.remove();
    }
  }, [audioElement]);

  const goTo = useCallback((time: number) => {
    if(audioElement) {
      audioElement.currentTime = time; 
    }
  }, [audioElement]);

  const addProgressListener = useCallback((cb: (progress: number) => void) => {
    if(audioElement) {
      audioElement.ontimeupdate = () => cb(audioElement.currentTime);
    }
  }, [audioElement]);

  const changeVolume = useCallback((volume: number) => {
    if(audioElement) {
      audioElement.volume = volume;
    }
  }, [audioElement]);

  const replaceQueue = useCallback((tracks: Track[]) => setQueue(tracks), []);

  const playTrack = (track: Track) => {
    if(!currentTrack || currentTrack.id !== track.id) {
      const audio = new Audio(track.sourceUrl);
      setCurrentTrack(track);
      setAudioElement(audio);
    }

    if(playerStatus === PlayerStatus.PLAYING) {
      audioElement?.pause();
    } else {
      audioElement?.play();
    }
  }



  return (
    <PlayerContext.Provider value={{
      changeVolume,
      queue, 
      replaceQueue, 
      playTrack, 
      currentTrack, 
      playerStatus, 
      goTo,
      addProgressListener,
      currentTrackDuration
    }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);