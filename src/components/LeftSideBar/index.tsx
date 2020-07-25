import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Playlist } from '../../entities/playlist';
import { UserPlaylistsContext } from '../../providers/user-playlists-context';
import { LinkList } from './LinkList';
import { Navigator } from './Navigator';
import { Container } from './styles';

export function LeftSideBar() {
  const playlists = useContext<Playlist[]>(UserPlaylistsContext);

  const libraries = [
    'Made For You',
    'Recently Played',
    'Liked Songs',
    'Albums',
    'Artists',
    'Podcasts',
  ];

  return (
    <Container>
      <Navigator />
      <div className="list-container">
        <LinkList title="Your Library">
          {libraries.map((l) => (
            <li key={l}>
              <span>{l}</span>
            </li>
          ))}
        </LinkList>

        <LinkList title="Playlists">
          {playlists.map((p) => (
            <li key={p.id}>
              <NavLink to={`/application/playlists/${p.id}`}>{p.name}</NavLink>
            </li>
          ))}
        </LinkList>
      </div>
    </Container>
  );
}
