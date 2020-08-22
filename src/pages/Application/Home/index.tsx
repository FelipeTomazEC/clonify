import React, { useContext, useEffect, useState } from 'react';
import { AlbumCard } from '../../../components/AlbumCard';
import { CardCarousel } from '../../../components/CardCarousel';
import { PlaylistCard } from '../../../components/PlaylistCard';
import { PodcastCard } from '../../../components/PodcastCard';
import { StickyPageHeader } from '../../../components/StickyPageHeader';
import { Album } from '../../../entities/album';
import { Playlist } from '../../../entities/playlist';
import { Podcast } from '../../../entities/podcast';
import { UserPlaylistsContext } from '../../../providers/user-playlists-context';
import { getRecentPlayedFromAPI } from '../../../services/get-recent-played-from-api';
import { getUserFollowedPodcasts } from '../../../services/get-user-followed-podcasts';
import { Container } from './styles';

export function Home() {
  const [recentPlayed, setRecentPlayed] = useState<(Playlist | Album)[]>([]);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const playlists = useContext(UserPlaylistsContext);

  useEffect(() => {
    getUserFollowedPodcasts().then((podcasts) => setPodcasts(podcasts));
    getRecentPlayedFromAPI().then((response) => setRecentPlayed(response));
  }, []);

  const makeCard = (item: Album | Playlist) =>
    item instanceof Album ? (
      <AlbumCard album={item} />
    ) : (
      <PlaylistCard playlist={item} />
    );

  return (
    <Container>
      <StickyPageHeader title="Home" />
      <main>
        <section>
          <CardCarousel
            title="Recent Played"
            elements={recentPlayed}
            cardRender={makeCard}
          />
        </section>
        <section>
          <CardCarousel
            title="Your Playlists"
            elements={playlists}
            cardRender={makeCard}
          />
        </section>
        <section>
          <CardCarousel
            title="Your Top Podcasts"
            elements={podcasts}
            cardRender={(podcast) => <PodcastCard podcast={podcast} />}
          />
        </section>
      </main>
    </Container>
  );
}
