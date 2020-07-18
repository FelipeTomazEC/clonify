import React from 'react';
import { Button } from './styles';

interface Props {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export function NavigationButton(props: Props) {
  return (
    <Button active={props.isActive} onClick={props.onClick}>
      {props.text}
    </Button>
  );
}
