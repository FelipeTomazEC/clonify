import React from "react";
import { Container } from "./styles";

export function NavigationButton({
  onClick,
  title,
  EnableIcon,
  DisableIcon,
  isActive,
}) {
  const Icon = isActive ? EnableIcon : DisableIcon;

  return (
    <Container onClick={onClick} isActive={isActive}>
      <Icon size="24" className="icon" />
      {title}
    </Container>
  );
}
