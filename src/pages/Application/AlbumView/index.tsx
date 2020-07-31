import React, { Fragment, useContext, useEffect, useState } from 'react';
import { BsClock, BsHeartFill, BsThreeDots, BsVolumeUp } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { AlbumViewHeader } from '../../../components/AlbumViewHeader';
import { ContentLoadingAnimation } from '../../../components/ContentLoadingAnimation';
import { Album } from '../../../entities/album';
import { Track } from '../../../entities/track';
import { PlayerContext } from '../../../providers/player-context';
import { PlayerActionType } from '../../../reducers/player-reducer';
import { getAlbumFromAPI } from '../../../services/get-album-from-api';
import { Container } from './styles';

export function AlbumView() {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState<Album>();
  const [player, dispatch] = useContext(PlayerContext);

  useEffect(() => {
    getAlbumFromAPI(id)
      .then((album) => setAlbum(album))
      .catch((err) => console.error(err));
  }, [id]);

  const handleTrackClick = (trackIndex: number) => {
    dispatch({
      type: PlayerActionType.CHANGE_QUEUE,
      payload: { queue: album ? album.tracks : [] },
    });

    dispatch({
      type: PlayerActionType.PLAY_TRACK,
      payload: { trackIndex },
    });
  };

  const isActive = (track: Track) => {
    const { queue, currentPlayingIndex } = player;
    const currentTrack = queue[currentPlayingIndex];

    return track.id === currentTrack?.id;
  };

  const getTimeFromMilliseconds = (timeInMilliseconds: number) => {
    const format2Digit = (value: number) => `${value}`.padStart(2, '0');
    const timeInSeconds = Math.round(timeInMilliseconds / 1000);
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds - minutes * 60 - hours * 3600;

    return hours > 0
      ? `${hours}:${format2Digit(minutes)}:${format2Digit(seconds)}`
      : `${minutes}:${format2Digit(seconds)}`;
  };

  return (
    <Container>
      {album === undefined ? (
        <ContentLoadingAnimation className="loading-animation" />
      ) : (
        <Fragment>
          <AlbumViewHeader album={album} />
          <section className="tracks-section">
            <table className="tracks-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th />
                  <th>Title</th>
                  <th>Artist</th>
                  <th />
                  <th>
                    <BsClock />
                  </th>
                </tr>
              </thead>

              <tbody>
                {album.tracks.map((track, index) => (
                  <tr
                    key={track.id}
                    {...{ active: isActive(track).toString() }}
                  >
                    <td className="col-play-button">
                      <span>{index + 1}</span>
                      <button onClick={() => handleTrackClick(index)}>
                        {isActive(track) ? (
                          <BsVolumeUp size={15} />
                        ) : (
                          <FaPlay size={10} />
                        )}
                      </button>
                    </td>
                    <td className="col-like-button">
                      <button>
                        <BsHeartFill size={15} />
                      </button>
                    </td>
                    <td className="col-title">{track.title}</td>
                    <td className="col-artist">
                      {track.artists.map((a) => a.name).join(', ')}
                    </td>
                    <td className="col-more-button">
                      <button>
                        <BsThreeDots size={20} />
                      </button>
                    </td>
                    <td className="col-duration">
                      {getTimeFromMilliseconds(track.duration)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </Fragment>
      )}
    </Container>
  );
}
