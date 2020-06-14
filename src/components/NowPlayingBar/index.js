import React, { useContext, useState } from "react";
import { TrackQueueContext } from "../../providers/TrackQueueContext";
import { AppControls } from "./AppControls";
import { Container } from "./styles";
import { TrackControls } from "./TrackControls";
import { TrackDetails } from "./TrackDetails";

const PLAY_NEXT_TRACK = 1;
const PLAY_PREVIOUS_TRACK = 2;

export function NowPlayingBar() {
  const [queue] = useContext(TrackQueueContext);
  const [currentTrack, setCurrentTrack] = useState(queue[0]);

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

  console.log("Rendering...");

  return (
    <Container>
      <TrackDetails
        isLiked={currentTrack.isLiked}
        artist={currentTrack.artist}
        cover={currentTrack.cover}
        title={currentTrack.title}
      />
      <TrackControls
        sourceUrl={currentTrack.sourceUrl}
        handleNextClick={() => changeTrack(PLAY_NEXT_TRACK)}
        handlePrevClick={() => changeTrack(PLAY_PREVIOUS_TRACK)}
      />
      <AppControls />
    </Container>
  );
}
