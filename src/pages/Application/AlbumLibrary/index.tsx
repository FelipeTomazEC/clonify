import React, { useEffect, useState } from 'react';
import { AlbumCard } from '../../../components/AlbumCard';
import { FilterBar } from '../../../components/FilterBar';
import { StickyPageHeader } from '../../../components/StickyPageHeader';
import { Album } from '../../../entities/album';
import { getUserAlbumsLibrary } from '../../../services/get-user-albums-library';
import { AlbumList, Container } from './styles';

export function AlbumLibrary() {
  const [userSavedAlbums, setUserSavedAlbums] = useState<Album[]>([]);
  const [filter, setFilter] = useState('');

  const loadAlbums = () => {
    const offset = userSavedAlbums.length;

    getUserAlbumsLibrary(offset)
      .then((albums) => setUserSavedAlbums((prev) => prev.concat(albums)))
      .catch((err) => console.error(err));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadAlbums(), []);

  const onScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const scrollHeight = e.currentTarget.scrollHeight;
    const current = e.currentTarget.scrollTop;
    const containerHeight = e.currentTarget.clientHeight;
    const hasUserViewedAllAlbums = scrollHeight - current === containerHeight;

    if (hasUserViewedAllAlbums && filter.length === 0) {
      loadAlbums();
    }
  };

  const filterFunction = (name: string) =>
    !!name.toLowerCase().match(filter.toLowerCase());

  const albums =
    filter === ''
      ? userSavedAlbums
      : userSavedAlbums.filter((a) => filterFunction(a.name));

  return (
    <Container onScroll={onScrollHandler}>
      <StickyPageHeader title="Albums">
        <FilterBar value={filter} onChange={(text) => setFilter(text)} />
      </StickyPageHeader>

      <AlbumList>
        {albums.map((album) => (
          <li key={album.id}>
            <AlbumCard album={album} />
          </li>
        ))}
      </AlbumList>
    </Container>
  );
}
