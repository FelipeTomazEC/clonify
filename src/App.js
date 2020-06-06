import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { LeftSideBar } from "./components/LeftSideBar";
import { NowPlayingBar } from "./components/NowPlayingBar";
import { RightSideBar } from "./components/RightSideBar";
import { Browse } from "./pages/Browse";
import { Home } from "./pages/Home";
import { Radio } from "./pages/Radio";

function App() {
  const user = {
    name: "Felipe Tomaz",
    avatarUrl:
      "https://scontent.fplu15-1.fna.fbcdn.net/v/t1.0-9/90304791_3035122643218732_8078960168131362816_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeHCM586RIHGpAeD-QVOGKcq1Qb422MV-ePVBvjbYxX548Vr42wDzsHMU2QRfzSbsSSJTu3r5rXSwr7EuqT5g236&_nc_ohc=X9jguLQt_mUAX_1QyA7&_nc_ht=scontent.fplu15-1.fna&oh=aef3ffce0192c4839b5fbd03f6e3ca9d&oe=5EF4BEA6",
  };

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
      currentTime: 20,
      timeLength: 241,
      isLiked: false,
      sourceUrl:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} className="header" />
        <LeftSideBar className="left" />
        <RightSideBar className="right" />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/browse" component={Browse} />
          <Route path="/radio" component={Radio} />
        </Switch>
        <footer className="now-playing-bar">
          <NowPlayingBar queue={queue} />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
