import React from 'react';
import { usePlayer } from '../../providers/player-context';
import { AppControls } from './AppControls';
import { Container } from './styles';
import { TrackControls } from './TrackControls';
import { TrackDetails } from './TrackDetails';

interface Props {
  toggleFullScreen: () => void;
}

export function NowPlayingBar(props: Props) {
  const { currentTrack } = usePlayer();

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
        <div />
      )}
      <TrackControls />
      <AppControls
        toggleFullScreen={props.toggleFullScreen}
      />
    </Container>
  );
}
