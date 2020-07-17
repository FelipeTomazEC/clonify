export function getSpotifyOAuthURL() {
  const endpoint = 'https://accounts.spotify.com/authorize';
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_OAUTH_CALLBACK_URL;
  const scopes = [
    'user-read-recently-played',
    'user-follow-read',
    'user-library-read',
  ];

  return `${endpoint}/?client_id=${client_id}`
    .concat(`&redirect_uri=${redirect_uri}`)
    .concat(`&response_type=token`)
    .concat(`&scope=${encodeURIComponent(scopes.join(' '))}`);
}

export function setSession(
  accessToken: string,
  tokenTimeToLive: number,
  callback: () => void
) {
  const expiresIn = Date.now() + tokenTimeToLive * 1000;
  const credentials = JSON.stringify({ accessToken, expiresIn });

  localStorage.setItem('@spotify/credentials', credentials);

  callback();
}

export function clearSession(callback: () => void) {
  localStorage.removeItem('@spotify/credentials');

  callback();
}

export function getToken() {
  const credentials = JSON.parse(
    localStorage.getItem('@spotify/credentials') || '{}'
  );

  const accessToken = credentials.accessToken;

  return accessToken;
}

export function isLogged() {
  const storedCredentials = localStorage.getItem('@spotify/credentials');
  if (!storedCredentials) return false;

  const credentials = JSON.parse(storedCredentials);

  return credentials.expiresIn > Date.now();
}
