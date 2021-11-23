import React from 'react';
import { BsClock, BsHeartFill, BsThreeDots, BsVolumeUp } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { Track } from '../../entities/track';
import { usePlayer } from '../../providers/player-context';
import { Time } from '../../utils/time';
import { TimeWithoutUnitsFormatter } from '../../utils/time-without-units-formatter';
import { Table, LabelsRow, TrackRow, ButtonCell } from './styles';
import { TrackTitle, ArtistName, TableCell } from './styles';
import { PlayButton, Button, HiddenButton } from './styles';

interface Props {
  tracks: Track[];
}

export const AlbumTrackTable: React.FC<Props> = ({ tracks }) => {
  const { currentTrack, queue, replaceQueue, playTrack } = usePlayer();

  const handleTrackClick = (track: Track) => () => {
    const isAlbumOnQueue = queue.some(t => t.id === track.id);
    if (!isAlbumOnQueue) {
      replaceQueue(tracks);
    }

    playTrack(track);
  }

  const formatTrackDuration = (duration: number) => {
    const formatter = new TimeWithoutUnitsFormatter();
    const time = Time.parseMillisecondsToTime(duration);

    return formatter.format(time);
  }

  return (
    <Table>
      <thead>
        <LabelsRow>
          <th>#</th>
          <th />
          <th>Title</th>
          <th>Artist</th>
          <th />
          <th><BsClock /></th>
        </LabelsRow>
      </thead>

      <tbody>
        {tracks.map((track, index) => {
          const isTrackActive = track.id === currentTrack?.id;
          const iconSize = isTrackActive ? 15 : 10;
          const PlayButtonIcon = isTrackActive ? BsVolumeUp : FaPlay;

          return (
            <TrackRow isActive={isTrackActive} key={track.id}>
              <ButtonCell>
                <span>{index + 1}</span>
                <PlayButton onClick={handleTrackClick(track)}>
                  <PlayButtonIcon size={iconSize} />
                </PlayButton>
              </ButtonCell>
              <ButtonCell>
                <Button><BsHeartFill size={15} /></Button>
              </ButtonCell>
              <TrackTitle>{track.title}</TrackTitle>
              <ArtistName>{track.artists.map(a => a.name).join(', ')}</ArtistName>
              <ButtonCell>
                <HiddenButton><BsThreeDots size={20} /></HiddenButton>
              </ButtonCell>
              <TableCell>{formatTrackDuration(track.duration)}</TableCell>
            </TrackRow>
          )}
        )
      }
      </tbody>
    </Table>
  );
}