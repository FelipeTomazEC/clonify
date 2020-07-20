import React from 'react';
import { Container } from './style';

interface Props {
  avatarUrl: string;
  className?: string;
  name: string;
}

export function Profile(props: Props) {
  return (
    <Container className={props.className ?? 'profile'}>
      <img className="avatar" src={props.avatarUrl} alt="avatar" />
      <span className="name">{props.name}</span>
    </Container>
  );
}
