import React from "react";
import { PlayableCard } from "../PlayableCard";
import { Container } from "./styles";

export function PodcastCard({ podcast }) {
  const { covers, description, name } = podcast;

  return (
    <Container>
      <PlayableCard coverUrl={covers[0]} isLiked={true} />
      <strong className="name">{name}</strong>
      <p className="description">{description}</p>
    </Container>
  );
}
