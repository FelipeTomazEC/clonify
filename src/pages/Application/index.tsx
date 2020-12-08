import React, { useEffect, useState } from 'react';
import FullScreen from 'react-full-screen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ContentLoadingAnimation } from '../../components/ContentLoadingAnimation';
import { FriendsActivityFeed } from '../../components/FriendsActivityFeed';
import { Header } from '../../components/Header';
import { LeftSideBar } from '../../components/LeftSideBar';
import { NowPlayingBar } from '../../components/NowPlayingBar';
import { User } from '../../entities/user';
import { PlayerProvider } from '../../providers/player-context';
import { UserPlaylistsProvider } from '../../providers/user-playlists-context';
import { getCurrentUserInfoFromAPI } from '../../services/get-current-user-data-from-api';
import { AlbumLibrary } from './AlbumLibrary';
import { AlbumView } from './AlbumView';
import { Browse } from './Browse';
import { Home } from './Home';
import { LikedSongsLibrary } from './LikedSongsLibrary';
import { PlaylistView } from './PlaylistView';
import { Radio } from './Radio';
import { Container, LoadingContainer } from './styles';

export function Application() {
  const [user, setUser] = useState<User>();
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    getCurrentUserInfoFromAPI()
      .then((user) => setUser(user))
      .catch((err) => console.error(err.message));
  }, []);

  const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

  return user === undefined ? (
    <LoadingContainer>
      <ContentLoadingAnimation />
    </LoadingContainer>
  ) : (
    <BrowserRouter>
      <FullScreen
        enabled={isFullScreen}
        onChange={(isFull) => setIsFullScreen(isFull)}
      >
        <Container>
          <header className="header">
            <Header user={user} />
          </header>
          <PlayerProvider>
            <UserPlaylistsProvider userId={user.id}>
              <aside className="left">
                <LeftSideBar />
              </aside>
              <aside className="right">
                <FriendsActivityFeed />
              </aside>
              <main className="content">
                <Switch>
                  <Route path="/application/home" component={Home} />
                  <Route path="/application/browse" component={Browse} />
                  <Route path="/application/radio" component={Radio} />
                  <Route
                    path="/application/playlists/:id"
                    component={PlaylistView}
                  />
                  <Route path="/application/albums/:id" component={AlbumView} />
                  <Route
                    path="/application/libraries/albums"
                    component={AlbumLibrary}
                  />
                  <Route
                    path="/application/libraries/liked-songs"
                    component={LikedSongsLibrary}
                  />
                </Switch>
              </main>
            </UserPlaylistsProvider>
            <footer className="now-playing-bar">
              <NowPlayingBar toggleFullScreen={toggleFullScreen} />
            </footer>
          </PlayerProvider>
        </Container>
      </FullScreen>
    </BrowserRouter>
  );
}
