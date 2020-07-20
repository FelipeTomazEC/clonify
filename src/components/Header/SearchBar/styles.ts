import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 24px;
  border-radius: 15px;
  margin-left: 15px;
  .icon {
    color: #151414;
    margin: 5px;
  }

  input {
    padding: 5px;
    width: 150px;
    height: 100%;
    border: none;
    font-size: 0.95rem;
    font-weight: 400;
    color: #000;
    background-color: #ffffff;
    border-radius: 0px 15px 15px 0px;

    :focus {
      outline: none;
    }

    ::placeholder {
      padding-left: 2px;
      color: #000;
    }
  }
`;
