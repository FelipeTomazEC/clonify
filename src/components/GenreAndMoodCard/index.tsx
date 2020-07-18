import React from 'react';
import { Container } from './styles';

interface Props {
  cover: string;
  name: string;
  onClick: () => void;
}

export function GenreAndMoodCard(props: Props) {
  return (
    <Container cover={props.cover} onClick={props.onClick}>
      <span className="name">{props.name}</span>
    </Container>
  );
}
