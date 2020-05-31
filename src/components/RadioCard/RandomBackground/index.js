import React from "react";
import { Container } from "./styles";

const palettes = [
  ["#db688f", "#aa506e", "#ca5e82"],
  ["#ad8677", "#907166", "#a27e72"],
  ["#8bd8c8", "#74b4a8", "#7ec2b5"],
  ["#e6b45d", "#c1954a", "#d6a852"],
];

export function Background({ cx = 112.5, cy = 135 }) {
  const palette = palettes[Math.floor(Math.random() * palettes.length)];
  const backgroundColor = palette[0];

  return (
    <Container backgroundColor={backgroundColor}>
      <svg>
        <circle
          cx={cx}
          cy={cy}
          r="120"
          fill={palette[1]}
          strokeWidth="50"
          stroke={palette[2]}
        />
      </svg>
    </Container>
  );
}
