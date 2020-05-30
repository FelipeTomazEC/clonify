import React from "react";
import { useInView } from "react-intersection-observer";
import { Container, StickySentinel } from "./styles";

export function StickyPageHeader({ title, paddingTop = 100 }) {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <>
      <StickySentinel ref={ref} paddingTop={paddingTop} />
      <Container isSticked={!inView}>
        <h1>{title}</h1>
      </Container>
    </>
  );
}
