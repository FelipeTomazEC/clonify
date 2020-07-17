import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PlayerContext } from '../../providers/player-context';
import { CHANGE_QUEUE, PLAY_TRACK } from '../../reducers/player-reducer';
import { PlayableCard } from '../PlayableCard';
import { Container } from './styles';

export function AlbumCard({ album }) {
  const { name, artists, cover, isLiked = false, tracks } = album;

  const [, dispatch] = useContext(PlayerContext);

  const artistsNames = artists.map((a) => a.name).join(', ');

  const handlePlayClick = () => {
    dispatch({ type: CHANGE_QUEUE, queue: tracks });
    dispatch({ type: PLAY_TRACK, trackIndex: 0 });
  };

  return (
    <Container>
      <PlayableCard
        coverUrl={cover}
        isLiked={isLiked}
        handlePlayClick={handlePlayClick}
      />
      <NavLink to={`/application/albums/${album.id}`}>
        <strong className="name">{name}</strong>
      </NavLink>
      <span className="artist">{artistsNames}</span>
    </Container>
  );
}
