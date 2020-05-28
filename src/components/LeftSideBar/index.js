import React from "react";
import { Navigator } from "./Navigator";
import { Container } from "./styles";

export function LeftSideBar({ className }) {
  return (
    <Container className={className}>
      <Navigator />
    </Container>
  );
}
