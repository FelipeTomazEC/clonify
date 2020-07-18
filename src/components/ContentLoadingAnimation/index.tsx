import React from 'react';
import Lottie from 'react-lottie';
import animation from '../../assets/lf30_editor_ve3Bf2.json';
import { Container } from './styles';

interface Props {
  className: string;
}
export function ContentLoadingAnimation(props: Props) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return (
    <Container className={props.className}>
      <div className="animation-wrapper">
        <Lottie options={options} height={400} width={400} />
      </div>
    </Container>
  );
}
