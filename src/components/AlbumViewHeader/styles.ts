import styled from 'styled-components';

export const DetailsContainer = styled.div`
  color: #939090;
  font-size: 0.95rem;

  strong {
    color: #fff;
    font-weight: 400;
  }

  .artists-names {
    display: block;
  }

  .release-year {
    display: inline-flex;
    align-items: center;

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
