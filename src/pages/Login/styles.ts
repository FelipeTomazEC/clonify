import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  line-height: 1.7;
  background-color: #1db954;
  font-size: 60%;

  .hero {
    height: 95%;
    background-color: #191414;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 90%);
    width: 100%;
    padding: 4em 0 14em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    .logo-box {
      display: block;
      margin-bottom: 8em;

      .logo {
        height: 12em;
      }
    }

    .text-box {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 100%;
      padding: 0 1.5em;
    }

    .paragraph-box {
      position: absolute;
      bottom: 30%;
      text-align: center;
      width: 100%;
      padding: 0 2em;

      .paragraph {
        color: white;
        font-size: 1.4em;
      }
    }
  }

  .copyright {
    text-align: center;

    .text {
      color: #191414;
      font-size: 1.2em;
    }
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(3em);
    }
    100% {
      opacity: 1;
      transform: translate(0px);
    }
  }

  .btn,
  .btn:link,
  .btn:visited {
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.6em 4.2em;
    letter-spacing: 2px;
    display: inline-block;
    border-radius: 10em;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6em;
    border: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 1em 2em rgba(0, 0, 0, 0.2);
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  .btn:active,
  .btn:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  }

  .btn--green {
    background-color: #1db954;
    color: #191414;
  }
  .btn--green::after {
    background-color: #1db954;
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10em;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  .btn--animated {
    animation: moveInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }

  .btn-content {
    display: flex;
    align-items: center;
  }

  .btn-icon {
    margin-right: 16px;
  }
`;
