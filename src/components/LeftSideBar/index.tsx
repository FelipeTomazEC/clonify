import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Playlist } from '../../entities/playlist';
import { UserPlaylistsContext } from '../../providers/user-playlists-context';
import { LinkList } from './LinkList';
import { Navigator } from './Navigator';
import { Container } from './styles';

export function LeftSideBar() {
  const playlists = useContext<Playlist[]>(UserPlaylistsContext);

  const libraries = ['Albums', 'Liked Songs'];

  return (
    <Container>
      <Navigator />
      <div className="list-container">
        <LinkList title="Your Library">
          {libraries.map((lib) => (
            <li key={lib}>
              <NavLink
                to={`/application/libraries/${lib
                  .replace(' ', '-')
                  .toLowerCase()}`}
              >
                {lib}
              </NavLink>
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
