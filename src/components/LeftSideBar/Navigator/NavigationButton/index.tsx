import React from 'react';
import { IconBaseProps, IconType } from 'react-icons/lib';
import { Container } from './styles';

interface Props {
  onClick: () => void;
  title: string;
  icons: { active: IconType; inactive: IconType };
  isActive: boolean;
}

export function NavigationButton(props: Props) {
  const iconProps: IconBaseProps = { size: 24, className: 'icon' };

  return (
    <Container onClick={props.onClick} isActive={props.isActive}>
      {props.isActive
        ? props.icons.active(iconProps)
        : props.icons.inactive(iconProps)}
      {props.title}
    </Container>
  );
}
