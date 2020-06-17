import React, { useContext } from "react";
import { TrackQueueContext } from "../../providers/TrackQueueContext";
import { PlayableCard } from "../PlayableCard";
import { Container } from "./styles";

export function AlbumCard({ album }) {
  const { name, artists, cover, isLiked = false, tracks } = album;
  const [, setQueue] = useContext(TrackQueueContext);

  const artistsNames = artists.map((a) => a.name).join(", ");

  const handlePlayClick = () => setQueue(tracks);

  return (
    <Container>
      <PlayableCard
        coverUrl={cover}
        isLiked={isLiked}
        handlePlayClick={handlePlayClick}
      />
      <strong className="name">{name}</strong>
      <span className="artist">{artistsNames}</span>
    </Container>
  );
}
