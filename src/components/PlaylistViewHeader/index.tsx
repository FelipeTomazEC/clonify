import React, { Fragment } from 'react';
import { Playlist } from '../../entities/playlist';
import { Time } from '../../utils/time';
import { TimeWithUnitsFormatter } from '../../utils/time-with-units-formatter';
import { ContentViewHeader } from '../ContentViewHeader';
import { DetailsContainer, FollowersInfo } from './styles';

interface Props {
  playlist: Playlist;
}

export function PlaylistViewHeader(props: Props) {
  const { cover, name, description, tracks, ownerName } = props.playlist;
  const time = Time.parseMillisecondsToTime(
    tracks.reduce((acc, cur) => acc + cur.duration, 0)
  );
  const formatter = new TimeWithUnitsFormatter();

  return (
    <ContentViewHeader
      cover={cover}
      isLiked={true}
      label="playlist"
      name={name}
      trackQueue={tracks}
    >
      <Fragment>
        <DetailsContainer>
          <span className="description">{description}</span>

          <span className="creator-name">
            Created by &nbsp;<strong>{ownerName}</strong>
          </span>

          <span>
            {tracks.length > 1
              ? `${tracks.length} songs`
              : `${tracks.length} song`}
            , &nbsp;
          </span>

          <span>{formatter.format(time)}</span>
        </DetailsContainer>

        <FollowersInfo>
          <span>Followers</span>
          <span>{props.playlist.followersNumber}</span>
        </FollowersInfo>
      </Fragment>
    </ContentViewHeader>
  );
}
