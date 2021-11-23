import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { RiAlbumLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { FriendActivity } from '../../../entities/friend-activity';
import { usePlayer } from '../../../providers/player-context';
import { getAlbumFromAPI } from '../../../services/get-album-from-api';
import { Container } from './styles';

interface Props {
  activity: FriendActivity;
}

export function FriendActivityCard(props: Props) {
  const { friend, currentSong: song } = props.activity;
  const { replaceQueue, playTrack } = usePlayer();

  const handlePlayClick = async () => {
    try {
      const { tracks } = await getAlbumFromAPI(song.albumId);
      const track = tracks.find(t => t.id === song.id)!;

      replaceQueue(tracks);
      playTrack(track);
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
