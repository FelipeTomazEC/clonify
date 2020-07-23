import styled from 'styled-components';

export const ExpandedContainer = styled.header`
  top: 0;
  max-height: 0px;
  z-index: 1;

  .wrapper {
    display: flex;
    padding: 16px 32px;

    .cover {
      width: 232px;
      height: 232px;
      margin-right: 24px;
    }

    .details-wrapper {
      display: flex;
      flex-direction: column;
      color: #fff;
      padding-top: 40px;

      .label {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 200;
      }

      .name {
        font-size: 3rem;
        line-height: 3rem;
      }

      .complement-details {
        justify-self: center;
        margin: auto 0;
      }

      .buttons-bar {
        justify-self: flex-end;
      }
    }
  }
`;

export const ButtonsBar = styled.div`
  display: flex;
  align-items: center;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 32px;
    height: 32px;
    outline: none;
    border: none;
    margin-right: 12px;
    color: #fff;
    border: 2px solid #fff;
    background-color: transparent;

    :hover {
      transform: scale(1.1);
      outline: none;
    }
  }

  .play-button {
    text-transform: uppercase;
    border-radius: 20px;
    background-color: #1db954;
    letter-spacing: 1px;
    width: 108px;
    border: none;
  }
`;

export const CompactContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;

  .wrapper {
    display: flex;
    align-items: center;
    height: 80px;
    animation: change-background 1s forwards;
    padding: 16px 16px;

    .cover {
      width: 50px;
      height: 50px;
      margin-right: 24px;
    }

    .details-wrapper {
      color: #fff;
      width: calc(100% - 74px);
      display: flex;
      align-items: center;
      justify-content: space-between;

      .name {
        font-size: 2rem;
        line-height: 2rem;
        text-decoration: none;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .complement-details,
      .label {
        display: none;
      }
    }

    @keyframes change-background {
      from {
        background-color: transparent;
      }
      to {
        background-color: #0c0c0b;
      }
    }
  }
`;

export const StickyGuard = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  height: 150px;
  width: 100%;
`;
