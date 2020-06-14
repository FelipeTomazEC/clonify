import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FriendsActivityFeed } from "../../components/FriendsActivityFeed";
import { Header } from "../../components/Header";
import { LeftSideBar } from "../../components/LeftSideBar";
import { NowPlayingBar } from "../../components/NowPlayingBar";
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

  const queue = [
    {
      title: "Awesome Music",
      artist: "John Mac",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBYxXx88UgZe3s4dmgyxFdI1z6OReq8DAokR4JPVv-moaly2B4&usqp=CAU",
      isLiked: true,
      sourceUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "It's play time",
      artist: "Funny Bill",
      cover:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1561427894",
      isLiked: false,
      sourceUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  ];

  return (
    <BrowserRouter>
      <Container>
        <header className="header">
          <Header user={user} />
        </header>
        <aside className="left">
          <UserPlaylistsProvider userId={user.id}>
            <LeftSideBar />
          </UserPlaylistsProvider>
        </aside>
        <aside className="right">
          <FriendsActivityFeed />
        </aside>
        <main className="content">
          <Switch>
            <Route
              path="/application/home"
              render={(props) => (
                <UserPlaylistsProvider userId={user.id}>
                  <Home {...props} userId={user.id} />
                </UserPlaylistsProvider>
              )}
            />
            <Route path="/application/browse" component={Browse} />
            <Route path="/application/radio" component={Radio} />
          </Switch>
        </main>
        <footer className="now-playing-bar">
          <NowPlayingBar queue={queue} />
        </footer>
      </Container>
    </BrowserRouter>
  );
}
