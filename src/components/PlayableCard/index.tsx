import React from 'react';
import { BsHeart, BsHeartFill, BsThreeDots } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { Container } from './styles';

interface Props {
  coverUrl: string;
  handlePlayClick: () => void;
  isLiked: boolean;
}

export function PlayableCard(props: Props) {
  const LikeIcon = props.isLiked ? BsHeartFill : BsHeart;

  return (
    <Container cover={props.coverUrl}>
      <div className="icons-container">
        <LikeIcon size={20} />
        <div className="play" onClick={props.handlePlayClick}>
          <FaPlay size={20} />
        </div>
        <BsThreeDots size={20} />
      </div>
    </Container>
  );
}
