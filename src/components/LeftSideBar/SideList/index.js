import React from "react";
import { Container } from "./styles";

export function SideList({ title, items }) {
  return (
    <Container>
      <h4>{title}</h4>
      {items.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </Container>
  );
}
