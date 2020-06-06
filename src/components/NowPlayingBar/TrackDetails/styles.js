import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "cover title like"
    "cover artist-name artist-name";
  grid-column-gap: 10px;
  padding: 8px 12px;
  align-items: center;
  justify-content: flex-start;
  height: 100%;

  .cover {
    grid-area: cover;
    width: 48px;
    height: 48px;
  }

  .title,
  .artist-name {
    cursor: pointer;

    :hover {
      text-decoration: underline;
      text-underline-position: under;
    }
  }

  .title {
    grid-area: title;
    font-size: 0.93rem;
    font-weight: 600;
  }

  .artist-name {
    font-size: 0.8rem;
    grid-area: artist-name;
  }

  .like {
    grid-area: like;
  }
`;
