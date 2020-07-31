import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, StickySentinel, StuckContainer } from './styles';

interface Props {
  children: ReactNode;
  title: string;
}

export function StickyPageHeader(props: Props) {
  const [ref, isSentinelInView] = useInView({ threshold: 0 });
  const ContentContainer = isSentinelInView ? Container : StuckContainer;

  return (
    <React.Fragment>
      <StickySentinel ref={ref} />
      <ContentContainer>
        <div className="wrapper">
          <h1 className="title">{props.title}</h1>
          {props.children}
        </div>
      </ContentContainer>
    </React.Fragment>
  );
}
