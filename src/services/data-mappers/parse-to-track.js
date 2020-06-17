import { Artist } from "../../entities/artist";
import { Track } from "../../entities/track";

const parseDataToArtist = (data) => {
  const name = data.name;
  const id = data.id;

  return new Artist({ id, name });
};

export const parseDataToTrack = (albumId, albumCover, albumName) => (data) => {
  const title = data.name;
  const sourceUrl = data.preview_url;
  const id = data.id;
  const artists = data.artists.map(parseDataToArtist);

  return new Track({
    id,
    title,
    sourceUrl,
    artists,
    albumCover,
    albumId,
    albumName,
  });
};
