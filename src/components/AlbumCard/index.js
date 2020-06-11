import React from "react";
import { PlayableCard } from "../PlayableCard";
import { Container } from "./styles";

export function AlbumCard({ album }) {
  const { name, artistsNames, covers, isLiked } = album;

  return (
    <Container>
      <PlayableCard coverUrl={covers[0]} isLiked={isLiked} />
      <strong className="name">{name}</strong>
      <span className="artist">{artistsNames.join(", ")}</span>
    </Container>
  );
}
