import styled from "styled-components";

export const Container = styled.div`
  background: #403f3b;
  background: -moz-linear-gradient(top, #403f3b 0%, #181817 25%, #181817 100%);
  background: -webkit-linear-gradient(
    top,
    #403f3b 0%,
    #181817 25%,
    #181817 100%
  );
  background: linear-gradient(to bottom, #403f3b 0%, #181817 25%, #181817 100%);
  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;
  min-height: 100%;

  main {
    background-color: #181817;
    padding-left: 30px;
  }
`;
