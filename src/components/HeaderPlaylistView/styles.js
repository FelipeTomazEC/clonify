import styled from "styled-components";

export const Container = styled.div`
  position: ${(props) => (props.compact ? "sticky" : "block")};
  top: 0;
  max-height: 0px;

  .wrapper {
    display: grid;
    width: 100%;
    color: #fff;
    grid-template-columns: 2fr 5fr 1fr;
    column-gap: 24px;
    padding: 12px 32px;
    background-color: transparent;
    grid-template-areas:
      "cover info info"
      "cover buttons followers";
    align-items: flex-end;

    .cover {
      grid-area: cover;
      width: 220px;
      height: 220px;
    }

    .info-container {
      grid-area: info;
      line-height: 2.5rem;

      .label {
        letter-spacing: 1.5px;
      }

      .name {
        font-size: 3rem;
      }

      .description,
      span {
        font-size: 0.9rem;
      }

      .created-by {
        ::after {
          content: "";
          margin: 0 0.5rem;
          display: inline-block;
          height: 1px;
          width: 1px;
          background-color: #fff;
          border: #fff solid 2px;
          border-radius: 100%;
        }
      }
    }

    .buttons {
      display: flex;
      align-items: center;

      button {
        line-height: 50%;
        margin: auto 5px;
        height: 32px;
        width: 32px;
        color: #fff;
        border-radius: 20px;
        outline: none;
        border: 2px solid #fff;
        background-color: transparent;

        :hover {
          transform: scale(1.1);
          outline: none;
        }
      }

      .play-pause {
        text-transform: uppercase;
        background-color: #1db954;
        letter-spacing: 1px;
        width: 108px;
        border: none;
      }
    }

    .followers-info {
      grid-area: followers;

      span {
        display: block;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 0.9rem;
        font-weight: 200;
        text-align: end;
      }
    }
  }

  .wrapper[compact="true"] {
    grid-template-columns: 40px auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "cover info buttons";
    max-height: 80px;
    gap: 16px;
    align-items: center;
    animation: background 0.7s forwards;
    border-bottom: rgba(178, 175, 174, 0.2) solid 1px;

    @keyframes background {
      from {
        background-color: transparent;
      }
      to {
        background-color: #0c0c0c;
      }
    }

    .cover {
      width: 40px;
      height: 40px;
    }

    .info-container {
      .name {
        font-size: 2rem;
        text-align: start;
      }

      .label,
      .description,
      span {
        display: none;
      }
    }

    .buttons {
      margin-left: auto;
    }

    .followers-info {
      display: none;
    }
  }
`;
