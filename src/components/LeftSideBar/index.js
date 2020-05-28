import React from "react";
import { Navigator } from "./Navigator";
import { SideList } from "./SideList";
import { Container } from "./styles";

export function LeftSideBar({ className }) {
  const libraries = [
    "Made For You",
    "Recently Played",
    "Liked Songs",
    "Albums",
    "Artists",
    "Podcasts",
  ];

  const playlists = [
    "This is Coldplay",
    "This is Khalid",
    "This is Queen",
    "Workout",
    "This is The Chainsmokers",
    "Time to sleep",
    "Top America",
    "Rap God",
    "Life Sucks",
  ];

  return (
    <Container className={className}>
      <Navigator />
      <SideList items={libraries} title="Your Library" />
      <SideList items={playlists} title="Playlists" />
    </Container>
  );
}
