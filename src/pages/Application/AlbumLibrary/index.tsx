import React, { useEffect, useState } from 'react';
import { AlbumCard } from '../../../components/AlbumCard';
import { FilterBar } from '../../../components/FilterBar';
import { ObservableScrollContainer } from '../../../components/ObservableScrollContainer';
import { StickyPageHeader } from '../../../components/StickyPageHeader';
import { Album } from '../../../entities/album';
import { getUserAlbumsLibrary } from '../../../services/get-user-albums-library';
import { AlbumList, Wrapper } from './styles';

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

  const onScrollHandler = (scrolledPercentage: number) => {
    if (scrolledPercentage === 100 && filter === '') {
      loadAlbums();
    }
  };

  const filterFunction = (album: Album) =>
    !!album.name.toLowerCase().match(filter.toLowerCase());

  const albums =
    filter === '' ? userSavedAlbums : userSavedAlbums.filter(filterFunction);

  return (
    <ObservableScrollContainer dispatch={onScrollHandler}>
      <Wrapper>
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
      </Wrapper>
    </ObservableScrollContainer>
  );
}
