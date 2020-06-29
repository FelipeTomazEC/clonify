import React from "react";
import Lottie from "react-lottie";
import animation from "../../../../assets/coding-animation.json";
import { Container } from "./styles";

export function NotImplementedYet() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return (
    <Container>
      <div className="animation">
        <Lottie options={options} />
      </div>
      <strong className="message">
        Woops! This page is not available yet.
      </strong>
    </Container>
  );
}
