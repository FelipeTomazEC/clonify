import React, { Fragment, useContext, useEffect, useState } from 'react';
import { BsHeartFill, BsThreeDots, BsVolumeUp } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { RiCalendar2Line } from 'react-icons/ri';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';
import { ContentLoadingAnimation } from '../../../components/ContentLoadingAnimation';
import { HeaderPlaylistView } from '../../../components/HeaderPlaylistView';
import { PlayerContext } from '../../../providers/player-context';
import { CHANGE_QUEUE, PLAY_TRACK } from '../../../reducers/player-reducer';
import { getPlaylistFromAPI } from '../../../services/get-playlist-from-api';
import { Container } from './styles';

export function PlaylistView() {
  const [ref, isSentinelInView] = useInView({ threshold: 0 });
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [player, dispatch] = useContext(PlayerContext);

  useEffect(() => {
    getPlaylistFromAPI(id)
      .then((playlist) => setPlaylist(playlist))
      .catch((err) => console.error(err));
  }, [id]);

  const handleTrackClick = (track) => {
    const trackIndex = playlist.tracks.indexOf(track);

    dispatch({ type: CHANGE_QUEUE, queue: playlist.tracks });
    dispatch({ type: PLAY_TRACK, trackIndex });
  };

  const isActive = (track) => {
    const { queue, currentPlayingIndex } = player;
    const currentTrack = queue[currentPlayingIndex];

    return track.id === currentTrack?.id;
  };

  const getTracksWithoutDuplicates = (tracks) => [
    ...tracks
      .reduce((acc, track) => acc.set(track.id, track), new Map())
      .values(),
  ];

  return (
    <Container>
      {playlist === null ? (
        <ContentLoadingAnimation className="loading-animation" />
      ) : (
        <Fragment>
          <div ref={ref} className="sticky-guard"></div>
          <HeaderPlaylistView playlist={playlist} compact={!isSentinelInView} />
          <section className="tracks-section">
            <table className="tracks-table">
              <thead>
                <tr>
                  <th />
                  <th />
                  <th>Title</th>
                  <th>Artist</th>
                  <th>
                    <RiCalendar2Line />
                  </th>
                </tr>
              </thead>

              <tbody>
                {getTracksWithoutDuplicates(playlist.tracks).map((track) => (
                  <tr key={track.id} active={isActive(track).toString()}>
                    <td className="col-play-button">
                      <button onClick={() => handleTrackClick(track)}>
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
