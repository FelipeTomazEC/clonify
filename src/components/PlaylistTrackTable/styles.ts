import styled from 'styled-components';

export const Table = styled.table`
  color: #fff;
  width: 100%;
  border-collapse: collapse;
  cursor: default;
  font-size: 0.9rem;
`;

export const Header = styled.thead`
  th {
    border-bottom: #282828 solid 1px;
    text-align: left;
    text-transform: uppercase;
    font-weight: 200;
    color: #b2afae;
    letter-spacing: 2px;
    font-size: 0.9rem;
  }
`;

export const TableRow = styled.tr<{active: boolean, selected: boolean}>`
  background-color: ${({selected}) => selected ? '#282828' : 'transparent'};
  
  :hover {
    background-color: #2828287F;

    .play-button, .more-button {
      display: inline-block;
    }
  }

  td {
    border-bottom: #282828 solid 1px;
    text-align: left;
    vertical-align: center;
    max-width: 0;
    height: 40px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .text{
    padding-right:15px;
    color: ${({active}) => active ? '#1db954' : 'inherit' };
  }

  .play-button, .more-button{
    display: ${({active}) => active ? 'block' : 'none' };
  }
`;

export const ColGroup = styled.colgroup`
  .thin {
    width: 7%;
  }

  .medium {
    width: 23%;
  }

  .large {
    width: 33%;
  }
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  outline: none;
  border: none;
  line-height: 50%;
  color: #fff;
  background-color: transparent;

  :hover{
    transform: scale(1.1);
  }
`;

export const PlayButton = styled(Button)`
  border: 1px solid #fff;
  margin-left: 15px;
`;

export const ArtistName = styled.span`
  :hover{
    text-decoration: underline;
    cursor: pointer;
  }
`;
