import styled from 'styled-components';

export const DetailsContainer = styled.div`
  color: #939090;
  font-size: 0.95rem;

  .description {
    display: block;
  }

  .creator-name {
    display: inline-flex;
    align-items: center;

    strong {
      color: #fff;
    }

    ::after {
      content: '';
      margin: 0 0.3rem;
      display: inline-block;
      height: 1px;
      width: 1px;
      background-color: #939090;
      border: #939090 solid 2px;
      border-radius: 100%;
    }
  }
`;

export const FollowersInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    text-align: top;
    line-height: 0.9rem;
    letter-spacing: 2px;
    font-size: 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #939090;
  }
`;
