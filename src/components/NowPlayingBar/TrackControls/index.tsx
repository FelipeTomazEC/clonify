import React, { useEffect, useState } from 'react';
import { BsSkipEndFill, BsSkipStartFill } from 'react-icons/bs';
import { FaRandom, FaRegPauseCircle, FaRegPlayCircle } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import { PlayerStatus } from '../../../constants/player-status.enum';
import { usePlayer } from '../../../providers/player-context';
import { Container } from './styles';
import { InputRange } from '../../InputRange';

export function TrackControls() {
  const { queue, currentTrack, playTrack } = usePlayer();
  const { currentTrackDuration, addProgressListener } = usePlayer();
  const { toggleShuffle, isShuffleActive } = usePlayer();
  const { playerStatus, goTo } = usePlayer();
  const { isRepeatEnable, toggleRepeat } = usePlayer();
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
    if(currentIndex + 1 >= queue.length && isRepeatEnable) {
      return playTrack(queue[0]);
    }
    
    const nextIndex = Math.min(currentIndex + 1, queue.length - 1);
    playTrack(queue[nextIndex]);
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
          <FaRandom 
            size={14} 
            onClick={toggleShuffle} 
            color={isShuffleActive ? "#1ed760" : "inherit"}/>
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
          <FiRepeat 
            size={14} 
            onClick={toggleRepeat}
            color={isRepeatEnable ? "#1ed760" : "inherit"}
          />
        </button>
      </div>
      <div className="progress-bar">
        <span className="time">{getTimeInMinutes(currentTime)}</span>
        <InputRange 
          maxValue={currentTrackDuration} 
          value={currentTime} 
          onChange={(value) => goTo(value)}
        />
        <span className="time">{getTimeInMinutes(currentTrackDuration)}</span>
      </div>
    </Container>
  );
}
