import styled from "styled-components";

export const Container = styled.main`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: rgba(12, 12, 11, 0.95);
  overflow-x: hidden;

  header {
    padding-left: 30px;
  }

  section {
    margin: 15px 15px 0px 30px;
    width: calc(100% - 60px);

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

    :nth-of-type(1) {
      margin-top: 60px;
    }
  }
`;
