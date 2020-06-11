import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  color: #b2afae;
  line-height: 1rem;

  .name {
    display: block;
    margin-top: 0.5rem;
    cursor: pointer;
    width: fit-content;
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 0.3rem;

    :hover {
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;
