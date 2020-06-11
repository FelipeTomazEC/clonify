export function getSpotifyOAuthURL() {
  const endpoint = "https://accounts.spotify.com/authorize";
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = `${process.env.REACT_APP_OAUTH_CALLBACK_URL}/authentication-callback`;
  const scopes = ["user-follow-read", "user-library-read"];

  return `${endpoint}/?client_id=${client_id}`
    .concat(`&redirect_uri=${redirect_uri}`)
    .concat(`&response_type=token`)
    .concat(`&scope=${encodeURIComponent(scopes)}`);
}

export function setSession(accessToken, tokenTimeToLive, callback) {
  const expiresIn = Date.now() + tokenTimeToLive * 1000;
  const credentials = JSON.stringify({ accessToken, expiresIn });

  localStorage.setItem("@spotify/credentials", credentials);

  callback();
}

export function clearSession(callback) {
  localStorage.removeItem("@spotify/credentials");

  callback();
}

export function getToken() {
  const credentials =
    JSON.parse(localStorage.getItem("@spotify/credentials")) || {};

  const accessToken = credentials.accessToken;

  return accessToken;
}

export function isLogged() {
  const credentials = JSON.parse(localStorage.getItem("@spotify/credentials"));

  if (!credentials) return false;

  return credentials.expiresIn > Date.now();
}
