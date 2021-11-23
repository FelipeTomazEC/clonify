import React from 'react';
import { NavLink } from 'react-router-dom';
import { Playlist } from '../../entities/playlist';
import { usePlayer } from '../../providers/player-context';
import { getPlaylistFromAPI } from '../../services/get-playlist-from-api';
import { PlayableCard } from '../PlayableCard';
import { Container } from './styles';

interface Props {
  playlist: Playlist;
}

export function PlaylistCard({ playlist }: Props) {
  const { replaceQueue, playTrack } = usePlayer();

  const handlePlayClick = () => {
    replaceQueue(playlist.tracks);
    playTrack(playlist.tracks[0]);
  };

  return (
    <Container onClick={() => getPlaylistFromAPI(playlist.id)}>
      <PlayableCard
        coverUrl={playlist.cover}
        isLiked={playlist.isLiked}
        handlePlayClick={handlePlayClick}
      />

      <NavLink to={`/application/playlists/${playlist.id}`}>
        <strong className="name">{playlist.name}</strong>
      </NavLink>
      <span className="description">{playlist.description}</span>
      <span className="followers-number">
        {playlist.followersNumber
          ? `${playlist.followersNumber} Followers`
          : ''}
      </span>
    </Container>
  );
}
