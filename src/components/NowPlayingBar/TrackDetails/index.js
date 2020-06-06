import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Container } from "./styles";

export function TrackDetails({ cover, title, artist, isLiked }) {
  const LikeIcon = isLiked ? BsHeartFill : BsHeart;

  return (
    <Container>
      <img src={cover} alt="cover" className="cover" />
      <strong className="title">{title}</strong>
      <span className="artist-name">{artist}</span>
      <LikeIcon className="like" />
    </Container>
  );
}
