import React, { useEffect, useState } from "react";
import { AlbumCard } from "../../../components/AlbumCard";
import { PlaylistCard } from "../../../components/PlaylistCard";
import { StickyPageHeader } from "../../../components/StickyPageHeader";
import { Album } from "../../../entities/album";
import { getRecentPlayed } from "../../../services/spotify-web-api-service";
import { Container } from "./styles";

export function Home({ userId }) {
  const [recentPlayed, setRecentPlayed] = useState([]);

  useEffect(() => {
    getRecentPlayed(userId).then((response) => setRecentPlayed(response));
  }, [userId]);

  const makeCard = (item) =>
    item instanceof Album ? (
      <AlbumCard album={item} />
    ) : (
      <PlaylistCard playlist={item} />
    );

  return (
    <Container>
      <StickyPageHeader title="Home" />
      <section>
        <h2 className="label">Recently Played</h2>
        <ul>
          {recentPlayed.map((el) => (
            <li key={el.id}>{makeCard(el)}</li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
