import React, { useState } from 'react';
import { BsHeartFill, BsThreeDots, BsVolumeUp } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { RiCalendar2Line } from 'react-icons/ri';
import { Track } from '../../entities/track';
import { usePlayer } from '../../providers/player-context';
import {
  ArtistName,
  Button,
  ColGroup,
  Header,
  PlayButton,
  Table,
  TableRow
} from './styles';

interface Props {
  tracks: Track[];
}

export const PlaylistTrackTable: React.FC<Props> = ({ tracks }) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState<number>(-1);
  const { queue, playTrack, currentTrack, replaceQueue } = usePlayer();

  const handleTrackClick = (track: Track) => () => {
    const isAlbumOnQueue = queue.some(t => t.id === track.id);
    if(!isAlbumOnQueue) {
      replaceQueue(tracks);
    }

    playTrack(track);
  }

  return (
    <Table>
      <ColGroup>
        <col className="thin"/>
        <col className="thin"/>
        <col className="large"/>
        <col className="medium"/>
        <col className="medium"/>
        <col className="thin" />
      </ColGroup>

      <Header>
        <tr>
          <th/>
          <th/>
          <th>Title</th>
          <th>Artist</th>
          <th>
            <RiCalendar2Line />
          </th>
          <th/>
        </tr>
      </Header>

      <tbody>
        {tracks.map((track, index) => {
          const { id, title, artists } = track;
          const isActive = currentTrack?.id === track.id;
          const isSelected = selectedRowIndex === index;
          const PlayIcon = isActive ? (
            <BsVolumeUp size={15} />
          ) : (
            <FaPlay size={10} />
          );

          return (
            <TableRow
              key={id}
              active={isActive}
              selected={isSelected}
              onClick={() => setSelectedRowIndex(index)}
            >
              <td>
                <PlayButton
                  onClick={handleTrackClick(track)}
                  className="play-button"
                >
                  {PlayIcon}
                </PlayButton>
              </td>
              <td>
                <Button>
                  <BsHeartFill size={15} />
                </Button>
              </td>
              <td className="text">{title}</td>
              <td className="text">
                {artists.map((a, index, array) => (
                  <ArtistName>
                    {index === array.length - 1 ? a.name : a.name.concat(', ')}
                  </ArtistName>
                ))}
              </td>
              <td>{new Date().toISOString().split('T')[0]}</td>
              <td>
                <Button className="more-button">
                  <BsThreeDots size={20} />
                </Button>
              </td>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};
