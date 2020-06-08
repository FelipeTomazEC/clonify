import React, { useEffect, useState } from "react";
import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { FaRandom, FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { Container } from "./styles";

export function TrackControls({ sourceUrl, handlePrevClick, handleNextClick }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [track, setTrack] = useState(new Audio(sourceUrl));

  useEffect(() => {
    setTrack((prev) => {
      prev.pause();

      return new Audio(sourceUrl);
    });
  }, [sourceUrl]);

  useEffect(() => {
    track.ontimeupdate = () => setCurrentTime(track.currentTime);
    track.onloadedmetadata = () => setDuration(track.duration);
  }, [track]);

  const PlayPauseButtonIcon = track.paused ? FaRegPlayCircle : FaRegPauseCircle;

  const getTimeInMinutes = (timeInSeconds) => {
    const seconds = Math.round(timeInSeconds) % 60;
    const minutes = Math.floor(timeInSeconds / 60);

    return `${minutes}:${"".concat(seconds).padStart(2, 0)}`.split(".")[0];
  };

  function playOrPause() {
    if (track.paused) {
      track.play();
    } else track.pause();
  }

  function changeProgress(e) {
    const newProgress = e.target.value;
    track.currentTime = newProgress;
  }

  function restartFromTheBeginning() {
    track.currentTime = 0;
  }

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
        <button className="play-button" onClick={playOrPause}>
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