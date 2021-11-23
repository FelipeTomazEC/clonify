import React, { useEffect, useState } from 'react';
import { BsSkipEndFill, BsSkipStartFill } from 'react-icons/bs';
import { FaRandom, FaRegPauseCircle, FaRegPlayCircle } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import { PlayerStatus } from '../../../constants/player-status.enum';
import { usePlayer } from '../../../providers/player-context';
import { InputEvent } from '../../../types/input-event.type';
import { Container } from './styles';

export function TrackControls() {
  const { queue, currentTrack, playTrack, currentTrackDuration, addProgressListener } = usePlayer();
  const { playerStatus, goTo } = usePlayer();
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    addProgressListener((progress) => setCurrentTime(progress));
  }, [addProgressListener]);

  const handlePlayPauseClick = () => {
    if(queue.length === 0 || !currentTrack) {
      return;  
    }

    playTrack(currentTrack ?? queue[0]);
  };

  const handlePrevClick = () => {
    const currentIndex = queue.findIndex(t => t.id === currentTrack?.id);
    const prevIndex = Math.max(currentIndex - 1, 0);
    playTrack(queue[prevIndex]);
  };

  const handleNextClick = () => {
    const currentIndex = queue.findIndex(t => t.id === currentTrack?.id);
    const nextIndex = Math.min(currentIndex + 1, queue.length - 1);
    playTrack(queue[nextIndex]);
  };

  const changeProgress = (e: InputEvent) => {
    const newProgress = e.target.valueAsNumber;
    goTo(newProgress);
  };

  const restartFromTheBeginning = () => {
    goTo(0);
  };

  const getTimeInMinutes = (timeInSeconds: number) => {
    const seconds = Math.round(timeInSeconds) % 60;
    const minutes = Math.floor(timeInSeconds / 60);

    return `${minutes}:${seconds.toString().padStart(2, '0')}`.split('.')[0];
  };

  const PlayPauseButtonIcon =
    playerStatus === PlayerStatus.PLAYING ? FaRegPauseCircle : FaRegPlayCircle;

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
          max={currentTrackDuration}
          onChange={changeProgress}
        />
        <span className="time">{getTimeInMinutes(currentTrackDuration)}</span>
      </div>
    </Container>
  );
}
