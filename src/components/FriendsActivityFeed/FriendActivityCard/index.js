import React from "react";
import { FaPlay } from "react-icons/fa";
import { RiAlbumLine } from "react-icons/ri";
import { Container } from "./styles";

export function FriendActivityCard({ activity }) {
  const { friend, currentSong: song } = activity;

  return (
    <Container>
      <div className="avatar-wrapper">
        <div className="icon">
          <FaPlay />
        </div>
        <img className="avatar" src={friend.avatarUrl} alt="avatar" />
      </div>

      <div className="info">
        <strong>{friend.name}</strong>
        <span className="song-title">{song.title}</span>
        <span className="artist">{activity.currentArtistName}</span>
        <section className="song-album">
          <RiAlbumLine className="album-icon" size={20} />
          <span>{activity.currentAlbumName}</span>
        </section>
      </div>
    </Container>
  );
}
