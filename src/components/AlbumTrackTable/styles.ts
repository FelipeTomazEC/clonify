import styled from "styled-components";

export const LabelsRow = styled.tr`
  th {
    text-transform: uppercase;
    font-weight: 200;
    color: #b2afae;
    letter-spacing: 1px;
    border-bottom: #282828 solid 1px;
    text-align: left;
    vertical-align: center;
    max-width: 0px;
    height: 40px;
    padding: 0px 15px;
  }
`;

export const TableCell = styled.td`
  border-bottom: #282828 solid 1px;
  text-align: left;
  vertical-align: center;
  max-width: 0px;
  height: 40px;
  padding: 0px 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TrackTitle = styled(TableCell)`
  width: 45%;
`;

export const ArtistName = styled(TableCell)`
  width: 30%;
`;

export const ButtonCell = styled(TableCell)`
  padding-left: 12px;
  width: 5%;
  height: 100%;
  text-align: center;
`;

export const Table = styled.table`
  font-size: 0.9rem;
  width: 100%;
  border-collapse: collapse;
  color: #fff;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  width: 35px;
  height: 35px;
  line-height: 50%;

  :hover {
    transform: scale(1.1);      
  }
`;

export const HiddenButton = styled(Button)`
  display: none;
`;

export const PlayButton = styled(HiddenButton)`
  background-color: #181817;
  border-radius: 50%;
  border: #fff 1px solid;
  width: 28px;
  height: 28px;
`;

export const TrackRow = styled.tr<{isActive: boolean}>`
  background-color: ${(props) => props.isActive ? '#282828' : 'transparent'};
  color: ${(props) => props.isActive ? '#1db954' : 'inherit'};

  ${PlayButton} {
    display: ${(props) => props.isActive ? 'block' : 'none'};
  }

  span {
    display: ${(props) => props.isActive ? 'none' : 'block'};
  }

  :hover {
    background-color: #282828;

    ${HiddenButton} {
      display: block;
    }

    span {
      display: none;
    }
  }
`;