import React, { useContext } from "react";
import { UserPlaylistsContext } from "../../providers/UserPlaylistsContext";
import { Navigator } from "./Navigator";
import { SideList } from "./SideList";
import { Container } from "./styles";

export function LeftSideBar() {
  const playlists = useContext(UserPlaylistsContext);

  const libraries = [
    "Made For You",
    "Recently Played",
    "Liked Songs",
    "Albums",
    "Artists",
    "Podcasts",
  ];

  return (
    <Container>
      <Navigator />
      <div className="list-container">
        <SideList items={libraries} title="Your Library" />
        <SideList items={playlists.map((p) => p.name)} title="Playlists" />
      </div>
    </Container>
  );
}
