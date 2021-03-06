import styled from "styled-components";

export const Container = styled.header`
  background-color: #0c0c0b;
  display: flex;
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
