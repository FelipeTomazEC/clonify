import React, { useContext, useEffect, useState } from "react";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { PlayerContext } from "../../providers/player-context";
import { CHANGE_QUEUE, PLAY_TRACK } from "../../reducers/player-reducer";
import { Container } from "./styles";

export function HeaderAlbumView({ album, isLiked = true, compact = false }) {
  const [player, dispatch] = useContext(PlayerContext);
  const [playButtonText, setPlayButtonText] = useState("Play");

  useEffect(() => {
    if (player.queue !== album.tracks) {
      return setPlayButtonText("Play");
    }

    const audioTrack = player.currentPlayingAudio;
    if (audioTrack) {
      audioTrack.onplay = () => setPlayButtonText("Pause");
      audioTrack.onpause = () => setPlayButtonText("Play");
    }
  }, [player, album]);

  const handlePlayPauseClick = () => {
    if (player.queue !== album.tracks) {
      dispatch({ type: CHANGE_QUEUE, queue: album.tracks });
      dispatch({ type: PLAY_TRACK, trackIndex: 0 });
      return;
    }

    const audioTrack = player.currentPlayingAudio;
    const isPlaying = !audioTrack.paused;

    return isPlaying ? audioTrack.pause() : audioTrack.play();
  };

  const formatTo2Digits = (number) => {
    const formatted = `${number}`.padStart(2, "0");
    return formatted;
  };

  const getTimeInHours = (timeInMilliseconds) => {
    const timeInSeconds = timeInMilliseconds / 1000;
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.round((timeInSeconds % 3600) / 60);

    return hours > 0
      ? `${hours} hr ${formatTo2Digits(minutes)} min`
      : `${formatTo2Digits(minutes)} min`;
  };

  const LikeIcon = isLiked ? BsHeartFill : BsHeart;

  const timeLength = album
    ? album.tracks.reduce((acc, t) => t.duration + acc, 0)
    : 0;

  return (
    <Container compact={compact}>
      <div className="wrapper" compact={compact.toString()}>
        <img src={album.cover} alt="cover" className="cover" />
        <div className="info-container">
          <small className="label">ALBUM</small>
          <h1 className="name">{album.name}</h1>
          <span className="artist-name">
            By <strong>{album.artists.map((a) => a.name).join(", ")}</strong>
          </span>
          <span className="release-year">
            {album.releaseDate.getFullYear()}
          </span>
          <span className="details">
            {album.tracks.length} songs, {getTimeInHours(timeLength)}
          </span>
        </div>

        <div className="buttons">
          <button className="play-pause" onClick={handlePlayPauseClick}>
            {playButtonText}
          </button>
          <button className="like">
            <LikeIcon size={15} />
          </button>
          <button className="more">
            <BsThreeDots size={15} />
          </button>
        </div>
      </div>
    </Container>
  );
}
