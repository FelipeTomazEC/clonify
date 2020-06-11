import React from "react";
import { PlayableCard } from "../PlayableCard";
import { Container } from "./styles";
export function PlaylistCard({ playlist }) {
  const { name, description, followersNumber, isLiked } = playlist;

  return (
    <Container>
      <PlayableCard coverUrl={playlist.covers[0]} isLiked={isLiked} />
      <strong className="name">{name}</strong>
      <span className="description">{description}</span>
      <span className="followers-number">
        {followersNumber ? `${followersNumber} Followers` : ""}
      </span>
    </Container>
  );
}
