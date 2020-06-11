export class Album {
  constructor({
    name,
    artistsNames,
    artistsIds,
    tracksIds,
    id,
    covers,
    isLiked,
  }) {
    this.name = name;
    this.artistsNames = artistsNames;
    this.artistsIds = artistsIds;
    this.tracksIds = tracksIds;
    this.id = id;
    this.covers = covers;
    this.isLiked = isLiked;
  }
}
