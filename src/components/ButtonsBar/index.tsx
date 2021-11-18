import React from 'react';
import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs';
import { Container, PlayButton, CircledButton} from './styles'

interface Props {
  isLiked: boolean;
  label: "Play" | "Pause";
  onClick: () => void;
}

export function ButtonsBar(props: Props) {
  const LikeIcon = props.isLiked ? BsHeartFill : BsHeart;

  return (
      <Container>
        <PlayButton onClick={props.onClick}>
          {props.label}
        </PlayButton>
        <CircledButton> 
          <LikeIcon size={15}/>
        </CircledButton>
        <CircledButton> 
          <BsThreeDots size={15}/>
        </CircledButton>
      </Container>
  );
}