import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;

  h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #b2afae;
    font-weight: 200;
    font-size: 0.9rem;
  }

  ul {
    list-style: none;

    li {
      font-weight: 700;
      font-size: 0.9rem;
      margin: 5px auto;
      color: #b2afae;

      :hover {
        color: #fff;
      }

      a {
        text-decoration: none;
        color: inherit;
        :visited,
        :active {
          text-decoration: none;
        }

        :hover {
          color: #fff;
        }
      }
    }
  }
`;
