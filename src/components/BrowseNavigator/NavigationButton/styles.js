import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  letter-spacing: 2px;
  font-size: 0.82rem;
  font-weight: 800;
  cursor: pointer;
  color: ${(props) => (props.active ? "#fff" : "#b2afae")};
  position: relative;
  text-transform: uppercase;

  :hover {
    color: #fff;
  }

  ::after {
    position: absolute;
    content: "";
    height: 2px;
    left: 50%;
    margin-top: 1.3rem;
    transform: translateX(-50%);
    border-bottom: ${(props) => (props.active ? "3px #1db954 solid" : "none")};
    animation: ${(props) =>
      props.active ? "active-mark .3s forwards" : "none"};

    @keyframes active-mark {
      from {
        width: 0px;
      }
      to {
        width: 28px;
      }
    }
  }
`;
