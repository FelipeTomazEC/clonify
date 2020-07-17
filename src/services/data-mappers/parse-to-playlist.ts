import { Playlist } from '../../entities/playlist';
import { AlbumData } from './parse-to-album';
import { parseDataToTrack, TrackData } from './parse-to-track';
import { UserData } from './parse-to-user';

interface Image {
  url: string;
}

interface ExtendedTrackData extends TrackData {
  album: AlbumData;
}

export interface PlaylistData {
  description: string;
  followers: { total: number };
  id: string;
  images: Image[];
  name: string;
  owner: UserData;
  tracks: { items: { track?: ExtendedTrackData }[] };
}

function isTrackPlayable(track: TrackData | undefined): boolean {
  if (!track) return false;
  if (!track.id || !track.preview_url) return false;
  return true;
}

export const parseDataToPlaylist = (data: PlaylistData) => {
  const tracksData = data.tracks.items.flatMap((i) =>
    i.track ? [i.track] : []
  );

  const playableTracks = tracksData.filter((data) => isTrackPlayable(data));

  const tracks = playableTracks.map((data) =>
    parseDataToTrack(
      data.album.id,
      data.album.images[0].url,
      data.album.name
    )(data)
  );

  return new Playlist({
    cover: data.images[0]?.url,
    id: data.id,
    name: data.name,
    description: data.description ?? '',
    followersNumber: data.followers.total,
    isLiked: false,
    ownerName: data.owner.display_name,
    tracks,
  });
};
