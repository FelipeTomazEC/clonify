import styled from "styled-components";

export const Container = styled.ul`
  padding: 20px;
  list-style: none;

  h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #b2afae;
    font-weight: 200;
    font-size: 0.9rem;
  }

  li {
    color: #b2afae;
    font-weight: 700;
    font-size: 0.9rem;
    margin: 5px auto;

    :hover {
      color: #fff;
    }
  }
`;
