import React, { useContext } from "react";
import { PlayerContext } from "../../providers/player-context";
import { AppControls } from "./AppControls";
import { Container } from "./styles";
import { TrackControls } from "./TrackControls";
import { TrackDetails } from "./TrackDetails";

export function NowPlayingBar({ toggleFullScreen }) {
  const [player] = useContext(PlayerContext);
  const { queue, currentPlayingIndex, currentPlayingAudio } = player;

  const currentTrack = queue[currentPlayingIndex];

  console.log("Rendering...");

  return (
    <Container>
      {currentTrack ? (
        <TrackDetails
          isLiked={false}
          artist={currentTrack.artists[0].name}
          cover={currentTrack.albumCover}
          title={currentTrack.title}
        />
      ) : (
        <div></div>
      )}
      <TrackControls />
      <AppControls
        audio={currentPlayingAudio}
        toggleFullScreen={toggleFullScreen}
      />
    </Container>
  );
}
