import React from "react";
import { Container } from "./styles";

export function LinkList({ title, children }) {
  return (
    <Container>
      <h4>{title}</h4>
      <ul>{children}</ul>
    </Container>
  );
}
