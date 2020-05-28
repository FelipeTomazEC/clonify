import styled from "styled-components";

export const Container = styled.header`
  background-color: #000;
  display: flex;
  width: calc(100vw - 220px);
  height: 48px;
  padding: 10px 0;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    text-align: center;
    line-height: 50%;
    margin-left: 5px;

    :active {
      .icon {
        color: #b2afae;
      }
    }

    :focus {
      outline: none;
    }

    :last-child {
      margin: auto 20px;
    }

    .icon {
      color: #eee;
    }
  }

  .profile {
    margin-left: auto;
  }
`;
