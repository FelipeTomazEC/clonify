import React, { useEffect, useState } from 'react';
import { AlbumCard } from '../../../components/AlbumCard';
import { StickyPageHeader } from '../../../components/StickyPageHeader';
import { Album } from '../../../entities/album';
import { getUserAlbumsLibrary } from '../../../services/get-user-albums-library';
import { AlbumList, Container } from './styles';

export function AlbumLibrary() {
  const [userSavedAlbums, setUserSavedAlbums] = useState<Album[]>([]);

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

    if (hasUserViewedAllAlbums) {
      loadAlbums();
    }
  };

  return (
    <Container onScroll={onScrollHandler}>
      <StickyPageHeader title="Albums" />

      <AlbumList>
        {userSavedAlbums.map((album) => (
          <li key={album.id}>
            <AlbumCard album={album} />
          </li>
        ))}
      </AlbumList>
    </Container>
  );
}
