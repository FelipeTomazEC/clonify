export class Album {
  constructor({ id, name, cover, tracks, artists, releaseDate }) {
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.tracks = tracks;
    this.artists = artists;
    this.releaseDate = releaseDate;
  }
}
