import React, { useEffect, useState } from 'react';
import { FilterBar } from '../../../components/FilterBar';
import { ObservableScrollContainer } from '../../../components/ObservableScrollContainer';
import { PlaylistTrackTable } from '../../../components/PlaylistTrackTable';
import { StickyPageHeader } from '../../../components/StickyPageHeader';
import { usePlayer } from '../../../hooks/use-player';
import { getUserTracksLibrary } from '../../../services/get-user-tracks-library';
import { PlayButton, Wrapper } from './styles';
import { PlayerStatus } from "../../../constants/player-status.enum";

export function LikedSongsLibrary() {
    const {tracks, setTracks, activeTrackId, playTrack, status} = usePlayer([]);
    const [filter, setFilter] = useState<string>('');

    const loadLibrary = async () => {
        const offset = tracks.length;
        try {
            const tracks = await getUserTracksLibrary(offset);
            setTracks(prev => prev.concat(tracks));
        } catch (err) {
            console.error(err);
        }
    };

    const onScrollHandler = (scrolledPercentage: number) => {
        if (scrolledPercentage === 100) {
            loadLibrary();
        }
    };

    const playPauseHandler = () => {
        if (tracks.length === 0) return;
        const track = tracks.find(t => t.id === activeTrackId) ?? tracks[0];

        playTrack(track);
    }

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
                            { status === PlayerStatus.PLAYING ? 'Pause' : 'Play' }
                        </PlayButton>
                    )}
                </StickyPageHeader>
                <FilterBar value={filter} onChange={(text) => setFilter(text)}/>
                <PlaylistTrackTable
                    tracks={tracks}
                    activeTrackId={activeTrackId}
                    playTrack={playTrack}
                />
            </Wrapper>
        </ObservableScrollContainer>
    );
}
