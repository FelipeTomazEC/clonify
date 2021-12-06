import React, { useContext, useEffect, useState, createContext, useCallback } from 'react';
import { PlayerStatus } from '../constants/player-status.enum';
import { Track } from '../entities/track';
import { shuffle } from '../utils/shuffle';

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
  toggleShuffle: () => void;
  isShuffleActive: boolean;
  toggleRepeat: () => void;
  isRepeatEnable: boolean;
}

export const PlayerContext = createContext<PlayerContextData>({} as PlayerContextData);

export const PlayerProvider: React.FC = ({children}) => { 
  const [queue, setQueue] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track>();
  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>(PlayerStatus.STOPPED);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement>();
  const [currentTrackDuration, setCurrentTrackDuration] = useState<number>(0);
  const [isShuffleActive, setIsShuffleActive] = useState<boolean>(false);
  const [shuffledQueue, setShuffledQueue] = useState<Track[]>([]);
  const [isRepeatEnable, setIsRepeatEnable] = useState<boolean>(false);

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

  const replaceQueue = useCallback((tracks: Track[]) => {
    setQueue(tracks);
    if(isShuffleActive) {
      setShuffledQueue(shuffle(tracks));
    }
  }, [isShuffleActive]);

  const playTrack = useCallback((track: Track) => {
    if(!currentTrack || currentTrack.id !== track.id) {
      audioElement?.pause();
      audioElement?.remove();
      return setCurrentTrack(track);
    }

    if (audioElement?.paused) {
      audioElement.play();
    } else {
      audioElement?.pause();
    }
  }, [audioElement, currentTrack]);

  const toggleShuffle = () => {
    const isNecessaryToShuffle = !isShuffleActive;
    if(isNecessaryToShuffle) {
      const shuffled = shuffle(queue.filter(t => t.id !== currentTrack?.id));
      if(currentTrack) {
        shuffled.unshift(currentTrack);
      }

      setShuffledQueue(shuffled);
    }

    setIsShuffleActive(!isShuffleActive);
  }

  const toggleRepeat = () => setIsRepeatEnable(!isRepeatEnable);

  useEffect(() => {
    if(currentTrack) {
      const audio = new Audio(currentTrack.sourceUrl);
      setAudioElement(audio);
      setPlayerStatus(PlayerStatus.PLAYING);
      audio.play();
    }
  }, [currentTrack]);

  useEffect(() => {
    if(audioElement) {     
      audioElement.onpause = () => setPlayerStatus(PlayerStatus.PAUSED);
      audioElement.onplay = () => setPlayerStatus(PlayerStatus.PLAYING);
      audioElement.onloadedmetadata  = () => setCurrentTrackDuration(audioElement.duration);
      audioElement.onended = () => {
          const trackQueue = isShuffleActive ? shuffledQueue : queue;
          const nextTrackIndex = trackQueue.findIndex(t => t.id === currentTrack?.id)
          const nextTrack = trackQueue[nextTrackIndex + 1];
          if(!nextTrack && isRepeatEnable) {
            return playTrack(trackQueue[0])
          }

          if (nextTrack) {
            playTrack(nextTrack);
          }
      };
    }
  }, [audioElement, currentTrack, isRepeatEnable, isShuffleActive, playTrack, queue, shuffledQueue]);

  return (
    <PlayerContext.Provider value={{
      changeVolume,
      queue: isShuffleActive ? shuffledQueue : queue,
      replaceQueue, 
      playTrack,
      currentTrack, 
      playerStatus, 
      goTo,
      addProgressListener,
      currentTrackDuration,
      toggleShuffle,
      isShuffleActive,
      toggleRepeat,
      isRepeatEnable
    }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext);