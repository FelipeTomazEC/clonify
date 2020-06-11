export function getSpotifyOAuthURL() {
  const endpoint = "https://accounts.spotify.com/authorize";
  const client_id = "33d7584571144836b02e538bd4119af6";
  const redirect_uri = "http://192.168.120.110:3000/authentication-callback";
  const scopes = ["user-follow-read", "user-library-read"];

  return `${endpoint}/?client_id=${client_id}`
    .concat(`&redirect_uri=${redirect_uri}`)
    .concat(`&response_type=token`)
    .concat(`&scopes=${encodeURIComponent(scopes.join(" "))}`);
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
