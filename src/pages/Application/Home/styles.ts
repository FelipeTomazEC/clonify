import styled from 'styled-components';

export const Container = styled.div`
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

  main {
    background-color: #181817;
    padding: 15px 15px 0px 30px;

    section {
      margin-top: 24px;
    }
  }
`;
