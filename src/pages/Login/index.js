import React from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import SpotifyLogo from "../../assets/spotify-logo.svg";
import { getSpotifyOAuthURL, isLogged } from "../../services/authentication";
import { Container } from "./styles";

export function Login() {
  return isLogged() ? (
    <Redirect to={{ pathname: "/home" }} />
  ) : (
    <Container>
      <div className="hero">
        <div className="logo-box">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <div className="text-box">
          <a
            href={`${getSpotifyOAuthURL()}`}
            className="btn btn--green btn--animated"
          >
            <span className="btn-content">
              <img src={SpotifyLogo} className="btn-icon" alt="spotify-logo" />
              Continue with the Spotify
            </span>
          </a>
        </div>

        <div className="paragraph-box">
          <p className="paragraph">
            This app is a clone of the desktop Spotify application.
            <br></br>
            To view this demo, you need to sign in with your Spotify account.
          </p>
        </div>
      </div>

      <footer>
        <div className="copyright">
          <small className="text">2020 | Powered by Felipe Tomaz</small>
        </div>
      </footer>
    </Container>
  );
}
