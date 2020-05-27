import React from "react";
import { Container } from "./style";

export function Profile(props) {
  return (
    <Container className={props.className ?? "profile"}>
      <img className="avatar" src={props.avatarUrl} alt="avatar" />
      <span className="name">{props.name}</span>
    </Container>
  );
}
