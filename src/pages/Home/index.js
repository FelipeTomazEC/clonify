import faker from "faker";
import React, { useEffect, useState } from "react";
import { PlaylistCard } from "../../components/PlaylistCard";
import { StickyPageHeader } from "../../components/StickyPageHeader";
import { Container } from "./styles";

export function Home() {
  const [recentPlaylists, setRecentPlaylists] = useState([]);

  useEffect(() => {
    const playlists = new Array(10).fill(1).map((_) => {
      const coverUrl = faker.random.image();
      const name = faker.lorem.words();
      const description = faker.lorem.words(Math.floor(1 + Math.random() * 7));
      const followersNumber = faker.random.number();

      return { coverUrl, name, description, followersNumber };
    });

    setRecentPlaylists(playlists);
  }, []);

  return (
    <Container>
      <StickyPageHeader title="Home" />
      <section>
        <h2 className="label">Recently Played</h2>
        <ul>
          {recentPlaylists.map((el) => (
            <li key={el.name}>
              <PlaylistCard info={el} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="label">Hot Pop</h2>
        <ul>
          {recentPlaylists.map((el) => (
            <li key={el.name}>
              <PlaylistCard info={el} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="label">Your heavy rotation</h2>
        <ul>
          {recentPlaylists.map((el) => (
            <li key={el.name}>
              <PlaylistCard info={el} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="label">Your top podcasts</h2>
        <ul>
          {recentPlaylists.map((el) => (
            <li key={el.name}>
              <PlaylistCard info={el} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="label">Sleep</h2>
        <ul>
          {recentPlaylists.map((el) => (
            <li key={el.name}>
              <PlaylistCard info={el} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
