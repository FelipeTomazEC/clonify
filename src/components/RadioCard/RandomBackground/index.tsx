import React from 'react';
import { Container } from './styles';

const palettes = [
  ['#db688f', '#aa506e', '#ca5e82'],
  ['#ad8677', '#907166', '#a27e72'],
  ['#8bd8c8', '#74b4a8', '#7ec2b5'],
  ['#e6b45d', '#c1954a', '#d6a852'],
];

export function Background({ cx = 112.5, cy = 135 }) {
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  const [background, innerCircle, outerCircle] = palette;

  return (
    <Container backgroundColor={background}>
      <svg>
        <circle
          cx={cx}
          cy={cy}
          r="120"
          fill={innerCircle}
          strokeWidth="50"
          stroke={outerCircle}
        />
      </svg>
    </Container>
  );
}
