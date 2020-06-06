import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #282828;
  color: #fff;
  padding-right: 16px;

  button {
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;
    line-height: 50%;

    :active {
      color: #b2afae;
    }
  }

  input[type="range"] {
    appearance: none;
    height: 4px;
    border-radius: 2px;
    background-color: #b2afae;
    color: #fff;
    outline: none;

    ::-webkit-slider-thumb {
      appearance: none;
      fill: red;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #1ed760;
      cursor: pointer;
    }
  }
`;
