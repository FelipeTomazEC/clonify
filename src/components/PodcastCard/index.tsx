import React from 'react';
import { Podcast } from '../../entities/podcast';
import { PlayableCard } from '../PlayableCard';
import { Container } from './styles';

interface Props {
  podcast: Podcast;
}

export function PodcastCard(props: Props) {
  const handlePlayClick = () =>
    alert('Sorry! This functionality was not implemented yet.');

  return (
    <Container>
      <PlayableCard
        coverUrl={props.podcast.covers[0]}
        isLiked={true}
        handlePlayClick={handlePlayClick}
      />
      <strong className="name">{props.podcast.name}</strong>
      <p className="description">{props.podcast.description}</p>
    </Container>
  );
}
