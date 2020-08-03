import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  background: #403f3b;
  background: -moz-linear-gradient(top, #403f3b 0%, #181817 10%, #181817 100%);
  background: -webkit-linear-gradient(
    top,
    #403f3b 0%,
    #181817 10%,
    #181817 100%
  );
  background: linear-gradient(to bottom, #403f3b 0%, #181817 10%, #181817 100%);
`;

export const AlbumList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-gap: 1rem;
  justify-content: space-between;
  list-style: none;
  padding: 32px;
`;
