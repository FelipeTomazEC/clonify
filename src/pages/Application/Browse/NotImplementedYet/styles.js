import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.5rem;

  .animation {
    height: fit-content;
    width: 20%;
  }

  .message {
    font-size: 1.5rem;
    color: #fff;
  }
`;
