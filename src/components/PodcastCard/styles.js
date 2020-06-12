import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.9rem;
  color: #b2afae;
  line-height: 1rem;
  overflow: hidden;

  .description,
  .name {
    display: block;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .name {
    -webkit-line-clamp: 2;
    margin-top: 0.5rem;
    cursor: pointer;
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 0.3rem;

    :hover {
      text-decoration: underline;
      text-underline-position: below;
    }
  }
`;
