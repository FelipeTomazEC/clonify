import React, { useContext, useEffect, useState } from 'react';
import { BsSkipEndFill, BsSkipStartFill } from 'react-icons/bs';
import { FaRandom, FaRegPauseCircle, FaRegPlayCircle } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import { Player } from '../../../entities/player';
import { PlayerContext } from '../../../providers/player-context';
import { PLAY_TRACK } from '../../../reducers/player-reducer';
import { InputEvent } from '../../../types/input-event.type';
import { Container } from './styles';

export function TrackControls() {
  const [player, dispatch]: [
    Player,
    (action: { type: string; trackIndex: number }) => void
  ] = useContext(PlayerContext);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioTrack = player.currentPlayingAudio;
    if (audioTrack) {
      audioTrack.ontimeupdate = () => setCurrentTime(audioTrack.currentTime);
      audioTrack.onloadedmetadata = () => setDuration(audioTrack.duration);

      audioTrack.play();
    }

    return () => {
      audioTrack?.pause();
      return;
    };
  }, [player.currentPlayingAudio]);

  const handlePlayPauseClick = () => {
    const audioTrack = player.currentPlayingAudio;
    const isPlaying = !audioTrack?.paused;

    return isPlaying ? audioTrack?.pause() : audioTrack?.play();
  };

  const handlePrevClick = () => {
    const { currentPlayingIndex } = player;
    const prevIndex = Math.max(currentPlayingIndex - 1, 0);

    dispatch({ type: PLAY_TRACK, trackIndex: prevIndex });
  };

  const handleNextClick = () => {
    const { currentPlayingIndex, queue } = player;
    const nextIndex = Math.min(currentPlayingIndex + 1, queue.length - 1);

    dispatch({ type: PLAY_TRACK, trackIndex: nextIndex });
  };

  const changeProgress = (e: InputEvent) => {
    const audioTrack = player.currentPlayingAudio as HTMLAudioElement;
    const newProgress = e.target.valueAsNumber;
    audioTrack.currentTime = newProgress;
  };

  const restartFromTheBeginning = () => {
    const audioTrack = player.currentPlayingAudio as HTMLAudioElement;
    audioTrack.currentTime = 0;
  };

  const getTimeInMinutes = (timeInSeconds: number) => {
    const seconds = Math.round(timeInSeconds) % 60;
    const minutes = Math.floor(timeInSeconds / 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`.split('.')[0];
  };

  const PlayPauseButtonIcon =
    player.currentPlayingAudio?.paused || !player.currentPlayingAudio
      ? FaRegPlayCircle
      : FaRegPauseCircle;

  return (
    <Container>
      <div className="buttons">
        <button>
          <FaRandom size={14} />
        </button>
        <button
          onClick={restartFromTheBeginning}
          onDoubleClick={handlePrevClick}
        >
          <BsSkipStartFill size={20} />
        </button>
        <button className="play-button" onClick={handlePlayPauseClick}>
          <PlayPauseButtonIcon size={32} />
        </button>
        <button onClick={handleNextClick}>
          <BsSkipEndFill size={20} />
        </button>
        <button>
          <FiRepeat size={14} />
        </button>
      </div>
      <div className="progress-bar">
        <span className="time">{getTimeInMinutes(currentTime)}</span>
        <input
          type="range"
          className="progress-bar"
          id="progress-bar"
          value={currentTime}
          max={duration}
          onChange={changeProgress}
        />
        <span className="time">{getTimeInMinutes(duration)}</span>
      </div>
    </Container>
  );
}
