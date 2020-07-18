import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Album } from '../../entities/album';
import { PlayerContext } from '../../providers/player-context';
import { CHANGE_QUEUE, PLAY_TRACK } from '../../reducers/player-reducer';
import { PlayableCard } from '../PlayableCard';
import { Container } from './styles';

interface Props {
  album: Album;
}

export function AlbumCard(props: Props) {
  const [, dispatch] = useContext(PlayerContext);

  const handlePlayClick = () => {
    dispatch({ type: CHANGE_QUEUE, queue: props.album.tracks });
    dispatch({ type: PLAY_TRACK, trackIndex: 0 });
  };

  return (
    <Container>
      <PlayableCard
        coverUrl={props.album.cover}
        isLiked={false}
        handlePlayClick={handlePlayClick}
      />

      <NavLink to={`/application/albums/${props.album.id}`}>
        <strong className="name">{props.album.name}</strong>
      </NavLink>

      <span className="artist">
        {props.album.artists.map((a) => a.name).join(', ')}
      </span>
    </Container>
  );
}
