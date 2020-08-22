import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { CardList, Container, NavButton, Title } from './styles';

interface Props<T> {
  title: string;
  elements: T[];
  cardRender: (element: T) => JSX.Element;
}

enum FlipDirection {
  LEFT,
  RIGHT,
}

export function CardCarousel<T>(props: Props<T>) {
  const cardList = useRef<HTMLUListElement>(null);
  const [hasCardsRight, setHasCardsRight] = useState(true);
  const [hasCardsLeft, setHasCardsLeft] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!cardList || !cardList.current) return;
    const width = cardList.current.clientWidth;
    const maxScrollPosition = cardList.current.scrollWidth - width || 1;

    setHasCardsLeft(scrollPosition > 0);
    setHasCardsRight(scrollPosition < maxScrollPosition);
  }, [scrollPosition, cardList]);

  const flipCardsTo = (direction: FlipDirection) => {
    if (!cardList.current) return;
    if (direction === FlipDirection.LEFT && !hasCardsLeft) return;
    if (direction === FlipDirection.RIGHT && !hasCardsRight) return;

    const containerWidth = cardList.current.clientWidth;
    const newScrollLeftPosition =
      direction === FlipDirection.LEFT
        ? scrollPosition - containerWidth
        : scrollPosition + containerWidth;

    cardList.current.scrollTo({ left: newScrollLeftPosition });

    setScrollPosition(newScrollLeftPosition);
  };

  return (
    <Container>
      <Title>{props.title}</Title>

      <nav className="nav-buttons">
        <NavButton
          active={hasCardsLeft}
          onClick={() => flipCardsTo(FlipDirection.LEFT)}
        >
          <FaAngleLeft size={25} />
        </NavButton>
        <NavButton
          active={hasCardsRight}
          onClick={() => flipCardsTo(FlipDirection.RIGHT)}
        >
          <FaAngleRight size={25} />
        </NavButton>
      </nav>

      <CardList ref={cardList}>
        {props.elements.map((element, index) => (
          <li key={index}>{props.cardRender(element)}</li>
        ))}
      </CardList>
    </Container>
  );
}
