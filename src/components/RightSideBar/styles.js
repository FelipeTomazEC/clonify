import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #0c0c0b;
  height: 100vh;
  color: #b2afae;

  header {
    padding-left: 15px;
    display: flex;
    align-items: center;
    height: 52px;
    border-bottom: rgba(178, 175, 174, 0.2) solid 1px;

    h1 {
      color: #fff;
      font-size: 1.15rem;
      font-weight: 800;
    }
  }

  ul {
    height: 100%;
    overflow-y: auto;
    list-style: none;
  }
`;
