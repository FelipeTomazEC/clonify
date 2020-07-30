import styled from 'styled-components';

interface Props {
  cover: string;
}

export const Container = styled.div<Props>`
  background: url(${(props) => props.cover});
  background-size: 180px 180px;

  .icons-container {
    height: 180px;
    width: 180px;
    opacity: 0;
    padding: 0 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: space-between;

    :hover {
      opacity: 1;
    }

    .play {
      vertical-align: center;
      line-height: 50%;
      padding: 15px;
      border: 1px solid #eee;
      border-radius: 25px;

      :hover {
        border: 1.5px solid #fff;
        transform: scale(1.1);
      }
    }
  }
`;
