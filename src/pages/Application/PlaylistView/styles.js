import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  overflow-y: auto;
  background: #403f3b;
  background: -moz-linear-gradient(top, #403f3b 0%, #181817 10%, #181817 100%);
  background: -webkit-linear-gradient(
    top,
    #403f3b 0%,
    #181817 10%,
    #181817 100%
  );
  background: linear-gradient(to bottom, #403f3b 0%, #181817 10%, #181817 100%);

  .content {
    height: 1800px;
  }

  /*
    Guard to control how the header is presented when stuck.
  */
  .sticky-guard {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 150px;
    width: 100%;
  }
`;
