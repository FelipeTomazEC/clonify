export class Track {
  constructor({
    title,
    sourceUrl,
    id,
    artists,
    albumCover,
    albumId,
    albumName,
  }) {
    this.title = title;
    this.sourceUrl = sourceUrl;
    this.id = id;
    this.artists = artists;
    this.albumCover = albumCover;
    this.albumName = albumName;
    this.albumId = albumId;
  }
}
