import React from "react";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { Container, Cover } from "./styles";

export function PlaylistCard({ info }) {
  const {
    coverUrl,
    name,
    description,
    followersNumber,
    isLiked = false,
  } = info;
  const LikeIcon = isLiked ? BsHeartFill : BsHeart;

  return (
    <Container>
      <Cover coverUrl={coverUrl}>
        <div className="icons-container">
          <LikeIcon size={20} />
          <div className="play">
            <FaPlay size={20} />
          </div>
          <BsThreeDots size={20} />
        </div>
      </Cover>
      <strong className="name">{name}</strong>
      <span className="description">{description}</span>
      <span className="followers-number">{`${followersNumber} Followers`}</span>
    </Container>
  );
}
