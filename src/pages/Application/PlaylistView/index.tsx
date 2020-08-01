import React, { Fragment, useContext, useEffect, useState } from 'react';
import { BsHeartFill, BsThreeDots, BsVolumeUp } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { RiCalendar2Line } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { ContentLoadingAnimation } from '../../../components/ContentLoadingAnimation';
import { PlaylistViewHeader } from '../../../components/PlaylistViewHeader';
import { Playlist } from '../../../entities/playlist';
import { Track } from '../../../entities/track';
import { PlayerContext } from '../../../providers/player-context';
import { PlayerActionType } from '../../../reducers/player-reducer';
import { getPlaylistFromAPI } from '../../../services/get-playlist-from-api';
import { Container } from './styles';

export function PlaylistView() {
  const { id } = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<Playlist>();
  const [player, dispatch] = useContext(PlayerContext);

  useEffect(() => {
    getPlaylistFromAPI(id)
      .then((playlist) => setPlaylist(playlist))
      .catch((err) => console.error(err));
  }, [id]);

  const handleTrackClick = (track: Track) => {
    if (!playlist) return;

    const trackIndex = playlist.tracks.indexOf(track);

    dispatch({
      type: PlayerActionType.CHANGE_QUEUE,
      payload: { queue: playlist.tracks },
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

  const removeDuplicates = (tracks: Track[]) => {
    const trackMap = tracks.reduce(
      (map, track) => map.set(track.id, track),
      new Map<string, Track>()
    );

    return [...trackMap.values()];
  };

  return (
    <Container>
      {playlist === undefined ? (
        <ContentLoadingAnimation className="loading-animation" />
      ) : (
        <Fragment>
          <PlaylistViewHeader playlist={playlist} />
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
                {removeDuplicates(playlist.tracks).map((track) => (
                  <tr
                    key={track.id}
                    {...{ active: isActive(track).toString() }}
                  >
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
