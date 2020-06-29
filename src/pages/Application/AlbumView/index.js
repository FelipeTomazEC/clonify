import React, { Fragment, useContext, useEffect, useState } from "react";
import { BsClock, BsHeartFill, BsThreeDots, BsVolumeUp } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
import { ContentLoadingAnimation } from "../../../components/ContentLoadingAnimation";
import { HeaderAlbumView } from "../../../components/HeaderAlbumView";
import { PlayerContext } from "../../../providers/player-context";
import { CHANGE_QUEUE, PLAY_TRACK } from "../../../reducers/player-reducer";
import { getMultipleAlbumsFromAPI } from "../../../services/get-album-from-api";
import { Container } from "./styles";

export function AlbumView() {
  const [ref, isSentinelInView] = useInView({ threshold: 0 });
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [player, dispatch] = useContext(PlayerContext);

  useEffect(() => {
    getMultipleAlbumsFromAPI([id])
      .then(([album]) => setAlbum(album))
      .catch((err) => console.error(err));
  }, [id]);

  const handleTrackClick = (trackIndex) => {
    dispatch({ type: CHANGE_QUEUE, queue: album.tracks });
    dispatch({ type: PLAY_TRACK, trackIndex });
  };

  const isActive = (track) => {
    const { queue, currentPlayingIndex } = player;
    const currentTrack = queue[currentPlayingIndex];

    return track.id === currentTrack?.id;
  };

  const getTimeFromMilliseconds = (timeInMilliseconds) => {
    const format2Digit = (value) => `${value}`.padStart(2, "0");
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
      {album === null ? (
        <ContentLoadingAnimation className="loading-animation" />
      ) : (
        <Fragment>
          <div ref={ref} className="sticky-guard"></div>
          <HeaderAlbumView album={album} compact={!isSentinelInView} />
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
                  <tr key={track.id} active={isActive(track).toString()}>
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
                      {track.artists.map((a) => a.name).join(", ")}
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
