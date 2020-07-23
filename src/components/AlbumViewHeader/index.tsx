import React from 'react';
import { Album } from '../../entities/album';
import { Time } from '../../utils/time';
import { TimeWithUnitsFormatter } from '../../utils/time-with-units-formatter';
import { ContentViewHeader } from '../ContentViewHeader';
import { DetailsContainer } from './styles';

interface Props {
  album: Album;
}

export function AlbumViewHeader(props: Props) {
  const { artists, name, cover, releaseDate, tracks } = props.album;
  const totalMilliseconds = tracks.reduce((acc, cur) => acc + cur.duration, 0);
  const time = Time.parseMillisecondsToTime(totalMilliseconds);
  const formatter = new TimeWithUnitsFormatter();

  return (
    <ContentViewHeader
      isLiked={false}
      cover={cover}
      label="album"
      name={name}
      trackQueue={tracks}
    >
      <DetailsContainer>
        <span className="artists-names">
          By &nbsp;
          <strong>{artists.map((a) => a.name).join(', ')}</strong>
        </span>

        <span className="release-year">{releaseDate.getFullYear()}</span>

        <span>
          {tracks.length > 1
            ? `${tracks.length} songs`
            : `${tracks.length} song`}
          , &nbsp;
        </span>

        <span>{formatter.format(time)}</span>
      </DetailsContainer>
    </ContentViewHeader>
  );
}
