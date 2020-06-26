import React, { useContext, useEffect, useState } from "react";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { PlayerContext } from "../../providers/player-context";
import { CHANGE_QUEUE, PLAY_TRACK } from "../../reducers/player-reducer";
import { Container } from "./styles";

export function HeaderPlaylistView({
  playlist,
  isLiked = true,
  compact = false,
}) {
  const [player, dispatch] = useContext(PlayerContext);
  const [playButtonText, setPlayButtonText] = useState("Play");

  useEffect(() => {
    if (player.queue !== playlist.tracks) {
      return setPlayButtonText("Play");
    }

    const audioTrack = player.currentPlayingAudio;
    if (audioTrack) {
      audioTrack.onplay = () => setPlayButtonText("Pause");
      audioTrack.onpause = () => setPlayButtonText("Play");
    }
  }, [player, playlist]);

  const handlePlayPauseClick = () => {
    if (player.queue !== playlist.tracks) {
      dispatch({ type: CHANGE_QUEUE, queue: playlist.tracks });
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

    return `${hours} hr ${formatTo2Digits(minutes)} min`;
  };

  const LikeIcon = isLiked ? BsHeartFill : BsHeart;

  const timeLength = playlist
    ? playlist.tracks.reduce((acc, t) => t.duration + acc, 0)
    : 0;

  return (
    <Container compact={compact}>
      <div className="wrapper" compact={compact.toString()}>
        <img src={playlist.cover} alt="cover" className="cover" />
        <div className="info-container">
          <small className="label">PLAYLIST</small>
          <h1 className="name">{playlist.name}</h1>
          <p className="description">{playlist.description}</p>
          <span className="created-by">
            Created by <strong>{playlist.ownerName}</strong>
          </span>
          <span className="details">
            {playlist.tracks.length} songs, {getTimeInHours(timeLength)}
          </span>
        </div>

        <div className="followers-info">
          <span>Followers</span>
          <span>{playlist.followersNumber}</span>
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
