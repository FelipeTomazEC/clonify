import React, { useContext } from "react";
import { TrackQueueContext } from "../../providers/track-queue-context";
import { getPlaylistFromAPI } from "../../services/get-playlist-from-api";
import { PlayableCard } from "../PlayableCard";
import { Container } from "./styles";

export function PlaylistCard({ playlist }) {
  const { name, description, followersNumber, isLiked, tracks } = playlist;
  const [, setQueue] = useContext(TrackQueueContext);

  const handlePlayClick = () => setQueue(tracks);

  return (
    <Container onClick={() => getPlaylistFromAPI(playlist.id)}>
      <PlayableCard
        coverUrl={playlist.cover}
        isLiked={isLiked}
        handlePlayClick={handlePlayClick}
      />
      <strong className="name">{name}</strong>
      <span className="description">{description}</span>
      <span className="followers-number">
        {followersNumber ? `${followersNumber} Followers` : ""}
      </span>
    </Container>
  );
}
