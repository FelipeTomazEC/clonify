import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { Container } from './styles';

interface Props {
  artist: string;
  cover: string;
  title: string;
  isLiked: boolean;
}

export function TrackDetails(props: Props) {
  const LikeIcon = props.isLiked ? BsHeartFill : BsHeart;

  return (
    <Container>
      <img src={props.cover} alt="cover" className="cover" />
      <strong className="title">{props.title}</strong>
      <span className="artist-name">{props.artist}</span>
      <LikeIcon className="like" />
    </Container>
  );
}
