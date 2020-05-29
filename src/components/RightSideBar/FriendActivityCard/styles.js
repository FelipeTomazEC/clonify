import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;

  :hover {
    .avatar-wrapper {
      .icon {
        opacity: 1;
      }
    }
  }

  .avatar,
  .icon {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  .icon {
    color: #fff;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: #fff solid 1px;
    background-color: rgba(25, 20, 20, 0.8);
    opacity: 0;

    :hover {
      transform: scale(1.1);
    }
  }

  .avatar-wrapper {
    height: 40px;
    width: 40px;
    position: relative;
    margin-right: 15px;
  }

  .info {
    display: flex;
    flex-direction: column;
    line-height: 1.15rem;
    text-transform: capitalize;

    strong {
      color: #fff;
      font-size: 0.9rem;
    }

    span {
      font-size: 0.8rem;
    }

    strong:hover,
    span:hover {
      text-decoration: underline;
      cursor: pointer;
      color: #fff;
    }

    .song-album {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;

      .album-icon {
        height: 100%;
      }

      span {
        margin-left: 5px;
      }
    }
  }
`;
