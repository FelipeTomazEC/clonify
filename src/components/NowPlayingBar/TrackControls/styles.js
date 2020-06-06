import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  line-height: 1rem;

  button {
    margin: 0 16px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
  }

  .play-button {
    :hover {
      transform: scale(1.2);
    }
  }

  .progress-bar {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;

    input {
      margin: 0 16px;
    }

    .time {
      min-width: 1.5rem;
    }
  }
`;
