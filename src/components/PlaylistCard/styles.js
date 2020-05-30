import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  color: #b2afae;
  line-height: 1rem;

  .followers-number {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 100;
    margin-top: 0.3rem;
  }

  .name {
    margin-top: 0.5rem;
    cursor: pointer;
    width: fit-content;
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 0.3rem;

    :hover {
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

export const Cover = styled.div`
  background: url(${(props) => props.coverUrl});

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
