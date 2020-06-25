import React, { useEffect, useState } from "react";
import FullScreen from "react-full-screen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FriendsActivityFeed } from "../../components/FriendsActivityFeed";
import { Header } from "../../components/Header";
import { LeftSideBar } from "../../components/LeftSideBar";
import { NowPlayingBar } from "../../components/NowPlayingBar";
import { CurrentPlayingProvider } from "../../providers/current-playing-context";
import { TrackQueueProvider } from "../../providers/track-queue-context";
import { UserPlaylistsProvider } from "../../providers/user-playlists-context";
import { getCurrentUserInfoFromAPI } from "../../services/get-current-user-data-from-api";
import { Browse } from "./Browse";
import { Home } from "./Home";
import { PlaylistView } from "./PlaylistView";
import { Radio } from "./Radio";
import { Container } from "./styles";

export function Application() {
  const [user, setUser] = useState({});
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    getCurrentUserInfoFromAPI()
      .then((user) => setUser(user))
      .catch((err) => console.error(err.message));
  }, []);

  const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

  return (
    <BrowserRouter>
      <FullScreen
        enabled={isFullScreen}
        onChange={(isFull) => setIsFullScreen(isFull)}
      >
        <Container>
          <header className="header">
            <Header user={user} />
          </header>
          <TrackQueueProvider>
            <CurrentPlayingProvider>
              <UserPlaylistsProvider userId={user.id}>
                <aside className="left">
                  <LeftSideBar />
                </aside>
                <aside className="right">
                  <FriendsActivityFeed />
                </aside>
                <main className="content">
                  <Switch>
                    <Route
                      path="/application/home"
                      render={(props) => <Home {...props} userId={user.id} />}
                    />
                    <Route path="/application/browse" component={Browse} />
                    <Route path="/application/radio" component={Radio} />
                    <Route
                      path="/application/playlists/:id"
                      component={PlaylistView}
                    />
                  </Switch>
                </main>
              </UserPlaylistsProvider>
              <footer className="now-playing-bar">
                <NowPlayingBar toggleFullScreen={toggleFullScreen} />
              </footer>
            </CurrentPlayingProvider>
          </TrackQueueProvider>
        </Container>
      </FullScreen>
    </BrowserRouter>
  );
}
