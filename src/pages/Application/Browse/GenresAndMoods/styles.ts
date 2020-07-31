import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;

  .title {
    color: #fff;
    font-size: 1.1rem;
  }

  .genres-list {
    list-style: none;
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    align-content: flex-start;

    li {
      padding: 8px 8px;
    }
  }

  @media only screen and (max-width: 1280px) {
    .genres-list {
      li {
        width: 230px;
        height: 230px;
      }
    }
  }
`;
