import React from "react";
import { useInView } from "react-intersection-observer";
import { Container, StickySentinel } from "./styles";

export function StickyPageHeader({ title, children }) {
  const [ref, isSentinelInView] = useInView({ threshold: 0 });

  return (
    <React.Fragment>
      <StickySentinel ref={ref} />
      <Container>
        <div className="wrapper" stuck={isSentinelInView ? "false" : "true"}>
          <h1 className="title">{title}</h1>
          {children}
        </div>
      </Container>
    </React.Fragment>
  );
}
