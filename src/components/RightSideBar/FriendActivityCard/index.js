import React from "react";
import { FaPlay } from "react-icons/fa";
import { RiAlbumLine } from "react-icons/ri";
import { Container } from "./styles";

export function FriendActivityCard({ activity }) {
  const { avatar, name, album, artist, title } = activity;

  return (
    <Container>
      <div className="avatar-wrapper">
        <div className="icon">
          <FaPlay />
        </div>
        <img className="avatar" src={avatar} alt="avatar" />
      </div>

      <div className="info">
        <strong>{name}</strong>
        <span className="song-title">{title}</span>
        <span className="artist">{artist}</span>
        <section className="song-album">
          <RiAlbumLine className="album-icon" size={20} />
          <span>{album}</span>
        </section>
      </div>
    </Container>
  );
}
