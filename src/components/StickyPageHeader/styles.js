import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 3em;
  background-color: ${(props) => (props.isSticked ? "transparent" : "#0c0c0b")};
  padding-left: 30px;
  position: sticky;
  top: 0;

  h1 {
    color: #fff;
    font-size: ${(props) => (props.isSticked ? 3 : 1.8)}em;
    font-weight: 800;
  }
`;

export const StickySentinel = styled.div`
  background: #403f3b;
  background: -moz-linear-gradient(top, #403f3b 0%, #181817 51%, #181817 100%);
  background: -webkit-linear-gradient(
    top,
    #403f3b 0%,
    #181817 51%,
    #181817 100%
  );
  background: linear-gradient(to bottom, #403f3b 0%, #181817 51%, #181817 100%);
  width: 100%;
  height: ${(props) => props.paddingTop}px;
`;
