import React, { useEffect, useState } from "react";
import { AlbumCard } from "../../../components/AlbumCard";
import { PlaylistCard } from "../../../components/PlaylistCard";
import { PodcastCard } from "../../../components/PodcastCard";
import { StickyPageHeader } from "../../../components/StickyPageHeader";
import { Album } from "../../../entities/album";
import {
  getRecentPlayed,
  getUserPlaylists,
  getUserPodcasts,
} from "../../../services/spotify-web-api-service";
import { Container } from "./styles";

export function Home({ userId }) {
  const [recentPlayed, setRecentPlayed] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    getUserPodcasts().then((podcasts) => {
      console.log(podcasts);
      setPodcasts(podcasts);
    });
  }, []);

  useEffect(() => {
    getRecentPlayed(userId).then((response) => setRecentPlayed(response));
    getUserPlaylists(userId).then((playlists) => setPlaylists(playlists));
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
      <section>
        <h2 className="label">Your Playlists</h2>
        <ul>
          {playlists.map((el) => (
            <li key={el.id}>{makeCard(el)}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="label">Your Top Podcasts</h2>
        <ul>
          {podcasts.map((el) => (
            <li key={el.id}>
              <PodcastCard podcast={el} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
