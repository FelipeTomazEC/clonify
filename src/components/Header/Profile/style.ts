import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    .name {
      border-bottom: #fff solid 1px;
    }
  }

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 5px;
  }

  .name {
    height: 1.35rem;
    color: white;
    font-size: 0.958rem;
    font-weight: 500;
  }
`;
