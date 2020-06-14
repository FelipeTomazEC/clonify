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

  .avatar-wrapper {
    height: 40px;
    width: 40px;
    position: relative;
    margin-right: 15px;

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
  }

  .info {
    line-height: 1.15rem;
    text-transform: capitalize;
    max-width: calc(100% - 55px);

    strong,
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
      font-size: 0.8rem;

      :hover {
        text-decoration: underline;
        cursor: pointer;
        color: #fff;
      }
    }

    strong {
      color: #fff;
      font-size: 0.9rem;
    }

    .song-album {
      display: flex;
      align-items: center;

      .album-icon {
        min-height: 20px;
        min-width: 20px;
        margin-right: 5px;
      }
    }
  }
`;
