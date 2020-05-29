import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isActive ? "#fff" : "#b2afae")};
  font-size: 0.9rem;
  font-weight: bold;
  background-color: #0c0c0b;
  border: none;
  cursor: pointer;
  /*Little green dash on active button*/
  position: relative;
  ::before {
    content: " ";
    position: absolute;
    height: 25px;
    margin-right: 20px;
    border-left: ${(props) => (props.isActive ? "#1db954 solid 4px" : "none")};
  }

  :active,
  :focus {
    outline: none;
  }

  :hover {
    color: #fff;
  }

  .icon {
    margin: auto 20px;
  }
`;
