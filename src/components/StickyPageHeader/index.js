import React from "react";
import { useInView } from "react-intersection-observer";
import { Container, StickySentinel } from "./styles";

export function StickyPageHeader({ title }) {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <>
      <StickySentinel ref={ref} paddingTop={100} />
      <Container isSticked={!inView}>
        <h1>{title}</h1>
      </Container>
    </>
  );
}
