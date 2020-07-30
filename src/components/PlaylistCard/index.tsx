import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Playlist } from '../../entities/playlist';
import { PlayerContext } from '../../providers/player-context';
import { PlayerActionType } from '../../reducers/player-reducer';
import { getPlaylistFromAPI } from '../../services/get-playlist-from-api';
import { PlayableCard } from '../PlayableCard';
import { Container } from './styles';

interface Props {
  playlist: Playlist;
}

export function PlaylistCard(props: Props) {
  const [, dispatch] = useContext(PlayerContext);

  const handlePlayClick = () => {
    dispatch({
      type: PlayerActionType.CHANGE_QUEUE,
      payload: { queue: props.playlist.tracks },
    });

    dispatch({
      type: PlayerActionType.PLAY_TRACK,
      payload: { trackIndex: 0 },
    });
  };

  return (
    <Container onClick={() => getPlaylistFromAPI(props.playlist.id)}>
      <PlayableCard
        coverUrl={props.playlist.cover}
        isLiked={props.playlist.isLiked}
        handlePlayClick={handlePlayClick}
      />

      <NavLink to={`/application/playlists/${props.playlist.id}`}>
        <strong className="name">{props.playlist.name}</strong>
      </NavLink>
      <span className="description">{props.playlist.description}</span>
      <span className="followers-number">
        {props.playlist.followersNumber
          ? `${props.playlist.followersNumber} Followers`
          : ''}
      </span>
    </Container>
  );
}
