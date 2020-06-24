import React from "react";
import Lottie from "react-lottie";
import animation from "../../assets/lf30_editor_ve3Bf2.json";
import { Container } from "./styles";

export function ContentLoadingAnimation() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return (
    <Container>
      <div className="animation-wrapper">
        <Lottie options={options} height={400} width={400} />
      </div>
    </Container>
  );
}
