import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 220px calc(100vw - (220px + 280px)) 280px;
  grid-template-rows: 48px calc(100vh - 120px) 72px;
  grid-template-areas:
    'left header right'
    'left content right'
    'npb npb npb';

  .header {
    grid-area: header;
  }

  .left {
    grid-area: left;
  }

  .right {
    grid-area: right;
  }

  .content {
    grid-area: content;
  }

  .now-playing-bar {
    grid-area: npb;
  }

  *::-webkit-scrollbar,
  *::-webkit-scrollbar-button {
    background-color: #181817;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #464545;
  }
`;

export const LoadingContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0c0c0b;
`;
