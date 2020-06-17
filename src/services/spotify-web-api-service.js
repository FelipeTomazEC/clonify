import axios from "axios";
import faker from "faker";
import { Artist } from "../entities/artist";
import { FriendActivity } from "../entities/friend-activity";
import { Track } from "../entities/track";
import { User } from "../entities/user";
import { getToken } from "./authentication";

export const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";

export async function fetchFromApi(endpoint) {
  return axios
    .create({
      baseURL: SPOTIFY_BASE_URL,
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
    .get(endpoint)
    .then((response) => response.data);
}

export async function getFriendsActivity() {
  const getFakeFriend = () =>
    new User({
      name: faker.name.findName(),
      avatarUrl: faker.internet.avatar(),
      id: faker.random.uuid(),
    });

  const randomTracksRef = await fetchFromApi(
    "/browse/categories/toplists/playlists"
  )
    .then((response) => {
      const playlists = response.playlists.items;
      const randomIndex = Math.floor(Math.random() * playlists.length);
      return playlists[randomIndex];
    })
    .then((playlist) => playlist.tracks.href);

  const fullTracksData = await fetchFromApi(randomTracksRef).then(
    (response) => response.items
  );

  const fakeActivities = fullTracksData
    .map((data) => data.track)
    .map((track) => {
      const friend = getFakeFriend();
      const { name: title, preview_url: sourceUrl, id, album } = track;
      const currentSong = new Track({
        title,
        albumId: album.id,
        sourceUrl,
        id,
        albumCover: album.images[0].url,
        albumName: album.name,
        artists: album.artists.map(
          (data) => new Artist({ id: data.id, name: data.name })
        ),
      });

      const activity = new FriendActivity({ friend, currentSong });

      return activity;
    });

  return fakeActivities;
}

export async function getAlbumTracks(albumId) {
  const data = await fetchFromApi(`/albums/${albumId}`);
  const artistsIds = data.artists.map((a) => a.id).join(",");
  const artists = await fetchFromApi(`/artists?ids=${artistsIds}`)
    .then((res) => res.artists)
    .then((artistsData) =>
      artistsData.map(
        (data) =>
          new Artist({
            avatar: data.images[0].url,
            id: data.id,
            name: data.name,
          })
      )
    );

  const tracks = data.tracks.items.map(
    (el) =>
      new Track({
        id: el.id,
        sourceUrl: el.preview_url,
        title: el.name,
        albumCover: data.images[0].url,
        albumId: data.id,
        artists,
        albumName: data.name,
      })
  );

  return tracks;
}
