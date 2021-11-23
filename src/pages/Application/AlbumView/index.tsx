import React, { Fragment, useEffect, useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';
import { AlbumTrackTable } from '../../../components/AlbumTrackTable';
import { ButtonsBar } from '../../../components/ButtonsBar';
import { ContentLoadingAnimation } from '../../../components/ContentLoadingAnimation';
import { Album } from '../../../entities/album';
import { usePlayer } from '../../../providers/player-context';
import { getAlbumFromAPI } from '../../../services/get-album-from-api';
import { Time } from '../../../utils/time';
import { TimeWithUnitsFormatter } from '../../../utils/time-with-units-formatter';
import { Container, Cover, Header, StickSentinel, StickContainer, AlbumName, Label, ArtistInfo, AlbumInfo, YearInfo, Info } from './styles';
import { InfoWrapper as InfoContainer } from './styles';

export function AlbumView() {
  const { id } = useParams<{ id: string }>();
  const [album, setAlbum] = useState<Album>();
  const [ref, isSentinelVisible] = useInView({ threshold: 0 });
  const { replaceQueue, playTrack, currentTrack, queue } = usePlayer();
  const numberOfSongs = album?.tracks.length ?? 0;
  const artistsNames = album?.artists.map(a => a.name).join(', ');
  const formatter = new TimeWithUnitsFormatter();
  const durationInSeconds = (album?.tracks ?? [])
    .reduce((acc, track) => acc + track.duration, 0);

  const albumDuration = formatter.format(Time.parseMillisecondsToTime(durationInSeconds));

  useEffect(() => {
    getAlbumFromAPI(id)
      .then((album) => setAlbum(album))
      .catch((err) => console.error(err));
  }, [id]);

  const isAlbumInQueue = useMemo(() => 
    album?.tracks.every(track => queue.some(t => t.id === track.id)) ?? false, 
    [album, queue]
  );

  const playButtonClick = () => {
    if (!isAlbumInQueue) {
      replaceQueue(album?.tracks!);
    }

    const trackToPlay = isAlbumInQueue ? currentTrack : album?.tracks[0];

    playTrack(trackToPlay!);
  }

  return (
    <Container>
      {album === undefined ? (
        <ContentLoadingAnimation className="loading-animation" />
      ) : (
        <Fragment>
          <StickSentinel ref={ref} />
          <StickContainer isStuck={!isSentinelVisible}>
            <Header isStuck={!isSentinelVisible}>
              <Cover src={album.cover} isStuck={!isSentinelVisible} />
              <InfoContainer isStuck={!isSentinelVisible}>
                <Label>Album</Label>
                <AlbumName>{album.name}</AlbumName>
                <ArtistInfo> By &nbsp;<strong>{artistsNames}</strong></ArtistInfo>
                <AlbumInfo>
                  <YearInfo>{album.releaseDate.getFullYear()}</YearInfo>
                  <Info>{numberOfSongs}{numberOfSongs > 1 ? 'songs' : 'song'}, {albumDuration}</Info>
                </AlbumInfo>
              </InfoContainer>
              <div className="buttons">
                <ButtonsBar onClick={playButtonClick} isLiked={true} isTrackListInQueue={isAlbumInQueue} />
              </div>
            </Header>
          </StickContainer>
          <AlbumTrackTable tracks={album.tracks} />
        </Fragment>
      )
      }
    </Container >
  );
}
