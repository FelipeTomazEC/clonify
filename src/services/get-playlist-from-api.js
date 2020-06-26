import sanitizeHTML from "sanitize-html";
import { Artist } from "../entities/artist";
import { Playlist } from "../entities/playlist";
import { Track } from "../entities/track";
import { fetchFromApi } from "./spotify-web-api-service";

const parseDataToArtist = (data) => {
  const name = data.name;
  const id = data.id;

  return new Artist({ id, name });
};

const parseDataToTrack = (data) => {
  const title = data.name;
  const sourceUrl = data.preview_url;
  const id = data.id;
  const artists = data.artists.map(parseDataToArtist);
  const albumCover = data.album.images[0]?.url;
  const albumId = data.album.id;
  const albumName = data.album.name;
  const duration = data.duration_ms;

  return new Track({
    id,
    title,
    sourceUrl,
    artists,
    albumCover,
    albumId,
    albumName,
    duration,
  });
};

export async function getPlaylistFromAPI(playlistId) {
  const endpoint = `/playlists/${playlistId}`;
  const data = await fetchFromApi(endpoint);

  const { id, name, description, followers, images } = data;
  const ownerName = data.owner.display_name || "Clonify";
  const tracks = data.tracks.items
    .flatMap((el) => (el.track.id ? [el.track] : []))
    .map(parseDataToTrack);

  return new Playlist({
    id,
    name,
    description: sanitizeHTML(description, { allowedTags: [] }),
    followersNumber: followers.total,
    cover: images[0]?.url,
    tracks,
    isLiked: false,
    ownerName,
  });
}
