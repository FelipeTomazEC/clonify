import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  .nav-buttons {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 15px;
  border-bottom: rgba(255, 255, 240, 0.2) solid 1px;
`;

export const CardList = styled.ul`
  height: fit-content;
  max-width: 100%;
  display: flex;
  list-style: none;
  align-items: flex-start;
  overflow-x: auto;

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-button {
    height: 0px;
  }

  li {
    margin: 0 11px;
    max-width: 180px;
    :first-child {
      margin-left: 0px;
    }
  }
`;

export const NavButton = styled.button<{ active: boolean }>`
  color: ${(props) => (props.active ? 'rgba(255,255,255,0.5)' : '#464545')};
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  :hover {
    color: ${(props) => (props.active ? '#fff' : '#464545')};
  }
`;
