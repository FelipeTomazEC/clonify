import styled from "styled-components";

export const Container = styled.div`
  font-size: 0.9rem;
  color: #b2afae;
  line-height: 1rem;
  overflow: hidden;

  a:link {
    text-decoration: none;
  }

  > * {
    display: block;
  }

  .description,
  .name {
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .name {
    margin-top: 0.5rem;
    cursor: pointer;
    color: #fff;
    text-transform: capitalize;
    -webkit-line-clamp: 2; /* number of lines to show */
    margin-bottom: 0.3rem;

    :hover {
      text-decoration: underline;
      text-underline-position: below;
    }
  }

  .followers-number {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 100;
    margin-top: 0.3rem;
  }
`;
