import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { RiAlbumLine } from "react-icons/ri";
import { TrackQueueContext } from "../../../providers/TrackQueueContext";
import { getAlbumTracks } from "../../../services/spotify-web-api-service";
import { Container } from "./styles";

export function FriendActivityCard({ activity }) {
  const { friend, currentSong: song } = activity;
  const [, setQueue] = useContext(TrackQueueContext);

  const handlePlayClick = async () => {
    try {
      const tracks = await getAlbumTracks(song.albumId);
      const firstTrack = tracks.find((t) => t.id === song.id);
      setQueue([firstTrack, ...tracks]);
    } catch (err) {
      console.error(err);
    }
  };

  const artistsName = song.artists.map((a) => a.name).join(", ");

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
          <span>{song.albumName}</span>
        </section>
      </div>
    </Container>
  );
}
