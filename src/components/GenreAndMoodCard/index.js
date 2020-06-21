import React from "react";
import { Container } from "./styles";

export function GenreAndMoodCard({ cover, name, onClick }) {
  return (
    <Container cover={cover} onClick={onClick}>
      <span className="name">{name}</span>
    </Container>
  );
}
