import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PlayerContext } from '../../providers/player-context';
import { PlayerActionType } from '../../reducers/player-reducer';
import { getPlaylistFromAPI } from '../../services/get-playlist-from-api';
import { PlayableCard } from '../PlayableCard';
import { Container } from './styles';

export function PlaylistCard({ playlist }) {
  const { name, description, followersNumber, isLiked, tracks } = playlist;
  const [, dispatch] = useContext(PlayerContext);

  const handlePlayClick = () => {
    dispatch({
      type: PlayerActionType.CHANGE_QUEUE,
      payload: { queue: tracks },
    });

    dispatch({
      type: PlayerActionType.PLAY_TRACK,
      payload: { trackIndex: 0 },
    });
  };

  return (
    <Container onClick={() => getPlaylistFromAPI(playlist.id)}>
      <PlayableCard
        coverUrl={playlist.cover}
        isLiked={isLiked}
        handlePlayClick={handlePlayClick}
      />

      <NavLink to={`/application/playlists/${playlist.id}`}>
        <strong className="name">{name}</strong>
      </NavLink>
      <span className="description">{description}</span>
      <span className="followers-number">
        {followersNumber ? `${followersNumber} Followers` : ''}
      </span>
    </Container>
  );
}
