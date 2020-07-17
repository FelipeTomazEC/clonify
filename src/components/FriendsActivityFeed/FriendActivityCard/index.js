import React, { useContext } from 'react';
import { FaPlay } from 'react-icons/fa';
import { RiAlbumLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { PlayerContext } from '../../../providers/player-context';
import { CHANGE_QUEUE, PLAY_TRACK } from '../../../reducers/player-reducer';
import { getAlbumFromAPI } from '../../../services/get-album-from-api';
import { Container } from './styles';

export function FriendActivityCard({ activity }) {
  const { friend, currentSong: song } = activity;
  const [, dispatch] = useContext(PlayerContext);

  const handlePlayClick = async () => {
    try {
      const tracks = (await getAlbumFromAPI(song.albumId)).tracks;
      const trackIndex = tracks.findIndex((t) => t.id === song.id);

      dispatch({ type: CHANGE_QUEUE, queue: tracks });
      dispatch({ type: PLAY_TRACK, trackIndex });
    } catch (err) {
      console.error(err);
    }
  };

  const artistsName = song.artists.map((a) => a.name).join(', ');

  return (
    <Container>
      <div className="avatar-wrapper" onClick={handlePlayClick}>
        <div className="icon">
          <FaPlay />
        </div>
        <img className="avatar" src={friend.avatarUrl} alt="avatar" />
      </div>

      <div className="info">
        <strong>{friend.name}</strong>
        <span className="song-title">{song.title}</span>
        <span className="artist">{artistsName}</span>
        <section className="song-album">
          <RiAlbumLine className="album-icon" size={20} />
          <NavLink to={`/application/albums/${song.albumId}`}>
            {song.albumName}
          </NavLink>
        </section>
      </div>
    </Container>
  );
}
