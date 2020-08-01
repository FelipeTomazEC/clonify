import styled from "styled-components";

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
      margin-top: 32px;

      .label {
        font-size: 1.1rem;
        color: #fff;
        margin-bottom: 15px;
        border-bottom: rgba(255, 255, 240, 0.2) solid 1px;
      }

      ul {
        height: fit-content;
        max-width: 100%;
        display: flex;
        list-style: none;
        align-items: flex-start;
        overflow-x: auto;

        li {
          margin: 0 11px;
          max-width: 180px;
          :first-child {
            margin-left: 0px;
          }
        }
      }
    }
  }
`;
