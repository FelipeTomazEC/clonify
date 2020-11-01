import styled from 'styled-components';

export const StickySentinel = styled.div`
  display: block;
  min-height: 100px;
`;

export const Container = styled.div`
  color: white;
  top: 0;
  position: sticky;
  font-weight: 800;
  z-index: 10000;
  min-height: 100px;

  > * {
    padding: 0 30px;
  }

  .wrapper {
    display: block;

    > .title {
      line-height: 3.5rem;
      height: 3.5rem;
      font-size: 3.3rem;
    }
  }
`;

export const StuckContainer = styled(Container)`
  .wrapper {
    animation: background 300ms forwards;

    > .title {
      font-size: 1.8rem;
    }

    @keyframes background {
      from {
        background-color: transparent;
      }
      to {
        background-color: #0c0c0c;
        border-bottom: rgba(178, 175, 174, 0.2) solid 1px;
      }
    }
  }
`;
