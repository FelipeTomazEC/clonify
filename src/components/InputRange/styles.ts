import styled from 'styled-components';

interface Props {
  value: number;
  max: number
}

export const Input = styled.input<Props>`
  background: ${(props) => {
    const progress = (props.value / props.max) * 100;
    return `linear-gradient(to right, #1ed760 0%, #1ed760 ${progress}%, #b2afae ${progress}%, #b2afae 100%)`
  }};
  border: 0px;
  border-radius: 8px;
  height: 4px;
  width: 100%;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  cursor: pointer;

  ::-webkit-slider-thumb {
      -webkit-appearance: none;
      cursor: ew-resize;
      background: #1ed760;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      cursor: pointer;
    }
`;
