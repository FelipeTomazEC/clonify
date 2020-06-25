import styled from "styled-components";

export const AnimationContainer = styled.div`
  max-width: 100%;
  height: 100%;
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
`;

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

  .tracks-section {
    margin-top: 270px;
    display: block;
    width: 100%;
    color: #fff;
    padding: 0px 32px;

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;

      th,
      td {
        border-bottom: rgba(178, 175, 174, 0.2) solid 1px;
        text-align: left;
        vertical-align: center;
        max-width: 0px;
        height: 40px;
        padding: 0px 15px;
      }

      th {
        text-transform: uppercase;
        font-weight: 200;
        color: #b2afae;
        letter-spacing: 1px;
      }

      td {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      tr {
        :hover {
          > .col-play-button,
          .col-more-button {
            button {
              display: inline-block;
            }
          }
        }
      }

      tr[active="true"] {
        color: #1db954;
      }

      .col-like-button,
      .col-play-button,
      .col-more-button {
        padding: 0;
        width: 35px;

        button {
          background-color: transparent;
          border: none;
          line-height: 50%;
          outline: none;
          color: #fff;
          width: 100%;
          height: 100%;

          :hover {
            transform: scale(1.1);
          }
        }
      }

      .col-play-button,
      .col-more-button {
        button {
          display: none;
        }
      }

      .col-more-button {
        width: 100px;

        button {
          width: 35px;
          margin-left: 65px;
        }
      }

      .col-title {
        width: 45%;
      }

      .col-artist {
        width: 30%;
      }
    }
  }
`;
