import React from 'react';
import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs';
import { PlayerStatus } from '../../constants/player-status.enum';
import { usePlayer } from '../../providers/player-context';
import { Container, PlayButton, CircledButton } from './styles'

interface Props {
  isLiked: boolean;
  onClick: () => void;
  isTrackListInQueue: boolean;
}

export function ButtonsBar(props: Props) {
  const LikeIcon = props.isLiked ? BsHeartFill : BsHeart;
  const { playerStatus } = usePlayer();
  const label = !props.isTrackListInQueue || playerStatus !== PlayerStatus.PLAYING
    ? 'Play'
    : 'Pause';

  return (
      <Container>
        <PlayButton onClick={props.onClick}>{label}</PlayButton>
        <CircledButton> 
          <LikeIcon size={15}/>
        </CircledButton>
        <CircledButton> 
          <BsThreeDots size={15}/>
        </CircledButton>
      </Container>
  );
}