import axios from "axios";
import faker from "faker";
import { FriendActivity } from "../entities/friend-activity";
import { Playlist } from "../entities/playlist";
import { Song } from "../entities/song";
import { User } from "../entities/user";
import { getToken } from "./authentication";

const fetchFromApi = async (endpoint) =>
  axios
    .create({
      baseURL: "https://api.spotify.com/v1",
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
    .get(endpoint)
    .then((response) => response.data);

export async function getCurrentUser() {
  const userData = await fetchFromApi("/me");
  const name = userData.display_name;
  const avatarUrl = userData.images[0].url;
  const id = userData.id;

  return new User({ name, avatarUrl, id });
}

export async function getUserPlaylists(userId) {
  const data = await fetchFromApi(`/users/${userId}/playlists`);
  const playlistsData = Array.from(data.items);

  return playlistsData.map(({ images, name, tracks }) => {
    const imagesUrl = images.map((img) => img.url);
    const tracksIds = tracks;
    return new Playlist({ name, images: imagesUrl, tracksIds });
  });
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
      const { name: title, preview_url: sourceUrl } = track;
      const { album: albumData } = track;
      const { name: currentAlbumName, id: albumId } = albumData;
      const { id: artistId, name: currentArtistName } = albumData.artists[0];
      const currentSong = new Song({ title, artistId, albumId, sourceUrl });
      const activity = new FriendActivity({
        friend,
        currentAlbumName,
        currentSong,
        currentArtistName,
      });

      return activity;
    });

  return fakeActivities;
}
