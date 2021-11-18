import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  grid-area: buttons;
  width: fit-content;
  margin-right: 16px;
`;

export const PlayButton = styled.button`
  width: 150px;
  height: 35px;
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  background-color: #1DB954;
  letter-spacing: 2px;
  font-weight: 600;

  :hover {
    transform: scale(1.1);
  }
`;

export const CircledButton = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
  border: 1px #fff solid;

  :hover {
    transform: scale(1.1);
    border: 2px #fff solid;
  }
`;