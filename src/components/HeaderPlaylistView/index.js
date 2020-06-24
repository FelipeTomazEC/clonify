import React from "react";
import { BsHeart, BsHeartFill, BsThreeDots } from "react-icons/bs";
import { Container } from "./styles";

export function HeaderPlaylistView({
  cover,
  name,
  description,
  numberOfFollowers,
  numberOfSongs,
  creatorName,
  timeLength,
  isLiked = true,
  compact = false,
}) {
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

  return (
    <Container compact={compact}>
      <div className="wrapper" compact={compact.toString()}>
        <img src={cover} alt="cover" className="cover" />
        <div className="info-container">
          <small className="label">PLAYLIST</small>
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
          <span className="created-by">
            Created by <strong>{creatorName}</strong>
          </span>
          <span className="details">
            {numberOfSongs} songs, {getTimeInHours(timeLength)}
          </span>
        </div>

        <div className="followers-info">
          <span>Followers</span>
          <span>{numberOfFollowers}</span>
        </div>

        <div className="buttons">
          <button className="play-pause">Play</button>
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
