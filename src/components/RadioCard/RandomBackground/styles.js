import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  min-height: 225px;
  min-width: 225px;

  svg {
    min-width: 225px;
    min-height: 225px;
  }
`;
