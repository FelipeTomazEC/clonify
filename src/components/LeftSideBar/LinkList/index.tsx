import React, { ReactElement } from 'react';
import { Container } from './styles';

interface Props {
  title: string;
  children: ReactElement[];
}

export function LinkList(props: Props) {
  return (
    <Container>
      <h4>{props.title}</h4>
      <ul>{props.children}</ul>
    </Container>
  );
}
