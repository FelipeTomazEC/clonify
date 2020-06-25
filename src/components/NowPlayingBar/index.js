import React, { useContext, useEffect, useState } from "react";
import { CurrentPlayingContext } from "../../providers/current-playing-context";
import { TrackQueueContext } from "../../providers/track-queue-context";
import { AppControls } from "./AppControls";
import { Container } from "./styles";
import { TrackControls } from "./TrackControls";
import { TrackDetails } from "./TrackDetails";

const PLAY_NEXT_TRACK = 1;
const PLAY_PREVIOUS_TRACK = 2;

export function NowPlayingBar({ toggleFullScreen }) {
  const [queue] = useContext(TrackQueueContext);
  const [currentTrack, setCurrentTrack] = useContext(CurrentPlayingContext);
  const [currentAudioTrack, setCurrentAudioTrack] = useState(
    new Audio(queue[0].sourceUrl)
  );

  useEffect(() => {
    setCurrentTrack(queue[0]);
  }, [queue, setCurrentTrack]);

  useEffect(() => {
    const newAudio = new Audio(currentTrack.sourceUrl);

    setCurrentAudioTrack((prev) => {
      const isPlaying = !prev.paused;
      prev.pause();
      if (isPlaying) newAudio.play();
      return newAudio;
    });
  }, [currentTrack]);

  function changeTrack(action) {
    let newTrackIndex;

    switch (action) {
      case PLAY_PREVIOUS_TRACK:
        newTrackIndex = queue.indexOf(currentTrack) - 1;
        break;
      case PLAY_NEXT_TRACK:
        newTrackIndex = queue.indexOf(currentTrack) + 1;
        break;
      default:
        newTrackIndex = 0;
    }

    const track = queue[newTrackIndex] ? queue[newTrackIndex] : currentTrack;

    setCurrentTrack(track);
  }

  function handlePlayPauseClick() {
    if (!currentAudioTrack.paused) {
      currentAudioTrack.pause();
    } else {
      currentAudioTrack.play();
    }
  }

  console.log("Rendering...");

  return (
    <Container>
      <TrackDetails
        isLiked={false}
        artist={currentTrack.artists[0].name}
        cover={currentTrack.albumCover}
        title={currentTrack.title}
      />
      <TrackControls
        audioTrack={currentAudioTrack}
        handleNextClick={() => changeTrack(PLAY_NEXT_TRACK)}
        handlePrevClick={() => changeTrack(PLAY_PREVIOUS_TRACK)}
        handlePlayPauseClick={handlePlayPauseClick}
      />
      <AppControls
        audio={currentAudioTrack}
        toggleFullScreen={toggleFullScreen}
      />
    </Container>
  );
}
