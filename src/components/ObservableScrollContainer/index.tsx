import React, { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children?: ReactNode;
  dispatch: (scrolledPercentage: number) => void;
}

export function ObservableScrollContainer(props: Props) {
  const onScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const scrollHeight = e.currentTarget.scrollHeight;
    const current = e.currentTarget.scrollTop;
    const containerHeight = e.currentTarget.clientHeight;
    const maxScrollHeight = scrollHeight - containerHeight;
    const scrolledPercentage = Math.floor((current / maxScrollHeight) * 100);

    props.dispatch(scrolledPercentage);
  };

  return <Container onScroll={onScrollHandler}>{props.children}</Container>;
}
