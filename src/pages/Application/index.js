import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FriendsActivityFeed } from "../../components/FriendsActivityFeed";
import { Header } from "../../components/Header";
import { LeftSideBar } from "../../components/LeftSideBar";
import { NowPlayingBar } from "../../components/NowPlayingBar";
import { TrackQueueProvider } from "../../providers/TrackQueueContext";
import { UserPlaylistsProvider } from "../../providers/UserPlaylistsContext";
import { getCurrentUser } from "../../services/spotify-web-api-service";
import { Browse } from "./Browse";
import { Home } from "./Home";
import { Radio } from "./Radio";
import { Container } from "./styles";

export function Application() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getCurrentUser()
      .then((user) => setUser(user))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <header className="header">
          <Header user={user} />
        </header>
        <TrackQueueProvider>
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
              </Switch>
            </main>
          </UserPlaylistsProvider>
          <footer className="now-playing-bar">
            <NowPlayingBar />
          </footer>
        </TrackQueueProvider>
      </Container>
    </BrowserRouter>
  );
}
