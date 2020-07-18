import styled from 'styled-components';

interface Props {
  cover: string;
}

export const Container = styled.div<Props>`
  min-width: 180px;
  min-height: 180px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.cover});
  background-size: cover;
  position: relative;
  cursor: pointer;

  :hover {
    .name {
      text-decoration: underline;
      text-underline-position: under;
    }
  }

  .name {
    position: absolute;
    display: block;
    width: 100%;
    font-size: 1rem;
    color: #fff;
    top: 65%;
    text-align: center;
  }
`;
