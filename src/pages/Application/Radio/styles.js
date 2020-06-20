import styled from "styled-components";

export const Container = styled.main`
  max-height: 100%;
  overflow-y: auto;
  background-color: rgba(12, 12, 11, 0.95);
  overflow-x: hidden;

  main {
    section {
      padding: 30px;

      .label {
        font-size: 1.1rem;
        color: #fff;
        margin-bottom: 15px;
        border-bottom: rgba(255, 255, 240, 0.1) solid 1px;
      }

      ul {
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
          margin: 10px 5px;

          :first-child {
            margin-left: 0px;
          }
        }
      }
    }
  }
`;
