import React, { Fragment, useContext, useEffect, useState } from 'react';
import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { Track } from '../../entities/track';
import { PlayerContext } from '../../providers/player-context';
import { PlayerActionType } from '../../reducers/player-reducer';
import {
  ButtonsBar,
  CompactContainer,
  ExpandedContainer,
  StickyGuard,
} from './styles';

type URL = string;
type PlayButtonText = 'play' | 'pause';

interface Props {
  label: string;
  name: string;
  cover: URL;
  isLiked: boolean;
  children: React.ReactElement;
  trackQueue: Track[];
}

export function ContentViewHeader(props: Props) {
  const [ref, isSentinelInView] = useInView({ threshold: 0 });
  const Container = !isSentinelInView ? CompactContainer : ExpandedContainer;
  const LikeIcon = props.isLiked ? BsHeartFill : BsHeart;
  const [playButtonText, setPlayButtonText] = useState<PlayButtonText>('play');
  const [player, dispatch] = useContext(PlayerContext);

  useEffect(() => {
    if (player.queue !== props.trackQueue) {
      return setPlayButtonText('play');
    }

    const audioTrack = player.currentPlayingAudio;
    if (audioTrack) {
      audioTrack.onplay = () => setPlayButtonText('pause');
      audioTrack.onpause = () => setPlayButtonText('play');
    }
  }, [player, props.trackQueue]);

  const handlePlayClick = () => {
    if (player.queue !== props.trackQueue) {
      dispatch({
        type: PlayerActionType.CHANGE_QUEUE,
        payload: { queue: props.trackQueue },
      });

      dispatch({
        type: PlayerActionType.PLAY_TRACK,
        payload: { trackIndex: 0 },
      });

      return;
    }

    const audioTrack = player.currentPlayingAudio;
    if (!audioTrack) return;

    const isPlaying = !audioTrack.paused;

    if (isPlaying) {
      audioTrack.pause();
    } else {
      audioTrack.play();
    }
  };

  return (
    <Fragment>
      <StickyGuard ref={ref} />
      <Container>
        <div className="wrapper">
          <img src={props.cover} alt="cover" className="cover" />

          <div className="details-wrapper">
            <small className="label">{props.label}</small>
            <h2 className="name">{props.name}</h2>

            <div className="complement-details">{props.children}</div>

            <ButtonsBar className="buttons-bar">
              <button className="play-button" onClick={handlePlayClick}>
                {playButtonText}
              </button>
              <button className="like-button">
                <LikeIcon size={15} />
              </button>
              <button className="more-button">
                <BsThreeDots size={15} />
              </button>
            </ButtonsBar>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
