import React from "react";
import { Button } from "./styles";

export function NavigationButton({ text, isActive, handleClick }) {
  return (
    <Button active={isActive} onClick={handleClick}>
      {text}
    </Button>
  );
}
