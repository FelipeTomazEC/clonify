import React, { useEffect, useState, useMemo } from 'react';
import { FilterBar } from '../../../components/FilterBar';
import { ObservableScrollContainer } from '../../../components/ObservableScrollContainer';
import { PlaylistTrackTable } from '../../../components/PlaylistTrackTable';
import { StickyPageHeader } from '../../../components/StickyPageHeader';
import { getUserTracksLibrary } from '../../../services/get-user-tracks-library';
import { PlayButton, Wrapper } from './styles';
import { PlayerStatus } from "../../../constants/player-status.enum";
import { usePlayer } from '../../../providers/player-context';
import { Track } from '../../../entities/track';

export function LikedSongsLibrary() {
    const {playTrack, replaceQueue, playerStatus, currentTrack, queue} = usePlayer();
    const [filter, setFilter] = useState<string>('');
    const [tracks, setTracks] = useState<Track[]>([]);

    const loadLibrary = async () => {
        const offset = tracks.length;
        try {
            const response = await getUserTracksLibrary(offset);
            setTracks((tracks) => tracks.concat(response));
        } catch (err) {
            console.error(err);
        }
    };

    const onScrollHandler = (scrolledPercentage: number) => {
        if (scrolledPercentage === 100) {
            loadLibrary();
        }
    };

    const isTracksInQueue = useMemo(() =>
        tracks.every(track => queue.some(t => t.id === track.id)) ?? false
    , [tracks, queue]);

    const playPauseHandler = () => {
        if(!isTracksInQueue) {
            replaceQueue(tracks);
        }

        const trackToPlay = isTracksInQueue ? currentTrack : tracks[0];
        playTrack(trackToPlay!);
    }

    const label = !isTracksInQueue || playerStatus !== PlayerStatus.PLAYING
        ? 'Play'
        : 'Pause';

    useEffect(() => {
        loadLibrary();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ObservableScrollContainer dispatch={onScrollHandler}>
            <Wrapper>
                <StickyPageHeader title="Liked Songs">
                    {(stuck) => (
                        <PlayButton stuck={stuck} onClick={playPauseHandler}>
                          {label}
                        </PlayButton>
                    )}
                </StickyPageHeader>
                <FilterBar value={filter} onChange={(text) => setFilter(text)}/>
                <PlaylistTrackTable tracks={tracks}/>
            </Wrapper>
        </ObservableScrollContainer>
    );
}
