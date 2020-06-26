import React, { useContext, useEffect, useState } from "react";
import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { FaRandom, FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { PlayerContext } from "../../../providers/player-context";
import { PLAY_TRACK } from "../../../reducers/player-reducer";
import { Container } from "./styles";

export function TrackControls() {
  const [player, dispatch] = useContext(PlayerContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioTrack = player.currentPlayingAudio;

  useEffect(() => {
    if (audioTrack) {
      audioTrack.ontimeupdate = () => setCurrentTime(audioTrack.currentTime);
      audioTrack.onloadedmetadata = () => setDuration(audioTrack.duration);

      audioTrack.play();

      return (prev) => (prev ? prev.pause() : null);
    }
  }, [audioTrack]);

  const handlePlayPauseClick = () => {
    const isPlaying = !audioTrack.paused;

    return isPlaying ? audioTrack.pause() : audioTrack.play();
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

  const changeProgress = (e) => {
    const newProgress = e.target.value;
    audioTrack.currentTime = newProgress;
  };

  const restartFromTheBeginning = () => {
    audioTrack.currentTime = 0;
  };

  const getTimeInMinutes = (timeInSeconds) => {
    const seconds = Math.round(timeInSeconds) % 60;
    const minutes = Math.floor(timeInSeconds / 60);

    return `${minutes}:${"".concat(seconds).padStart(2, 0)}`.split(".")[0];
  };

  const PlayPauseButtonIcon = audioTrack?.paused
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
