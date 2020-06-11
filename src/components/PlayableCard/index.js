import React from "react";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { Container } from "./styles";

export function PlayableCard({ coverUrl, isLiked }) {
  const LikeIcon = isLiked ? BsHeartFill : BsHeart;

  return (
    <Container cover={coverUrl}>
      <div className="icons-container">
        <LikeIcon size={20} />
        <div className="play">
          <FaPlay size={20} />
        </div>
        <BsThreeDots size={20} />
      </div>
    </Container>
  );
}
