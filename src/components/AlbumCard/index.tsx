import React from 'react';
import { NavLink } from 'react-router-dom';
import { Album } from '../../entities/album';
import { usePlayer } from '../../providers/player-context';
import { PlayableCard } from '../PlayableCard';
import { Container } from './styles';

interface Props {
  album: Album;
}

export function AlbumCard({ album }: Props) {
  const {replaceQueue, playTrack} = usePlayer();

  const handlePlayClick = () => {
    const { tracks } = album;
    replaceQueue(tracks);
    playTrack(tracks[0]);
  };

  return (
    <Container>
      <PlayableCard
        coverUrl={album.cover}
        isLiked={false}
        handlePlayClick={handlePlayClick}
      />

      <NavLink to={`/application/albums/${album.id}`}>
        <strong className="name">{album.name}</strong>
      </NavLink>

      <span className="artist">
        {album.artists.map((a) => a.name).join(', ')}
      </span>
    </Container>
  );
}
