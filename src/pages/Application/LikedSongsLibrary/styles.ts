import styled from 'styled-components';

export const Wrapper = styled.div`
  background: -moz-linear-gradient(top, #403f3b 0%, #181817 10%, #181817 100%);
  background: -webkit-linear-gradient(
    top,
    #403f3b 0%,
    #181817 10%,
    #181817 100%
  );
  background: linear-gradient(to bottom, #403f3b 0%, #181817 10%, #181817 100%);
  min-height: 100%;
`;

export const PlayButton = styled.button<{ stuck: boolean }>`
  position: ${(props) => (props.stuck ? 'absolute' : 'relative')};
  right: 0;
  top: 0;
  transform: translateY(50%);
  height: 32px;
  outline: none;
  border: none;
  margin-right: 12px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 20px;
  background-color: #1db954;
  letter-spacing: 1px;
  width: 108px;

  :hover {
    outline: none;
    transform: translateY(50%) scale(1.1);
  }
`;

export const TableTracks = styled.table`
  width: 100%;
  height: 100px;
  background-color: red;
`;
