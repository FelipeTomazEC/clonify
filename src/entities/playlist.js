export class Playlist {
  constructor({
    id,
    tracksIds,
    name,
    covers,
    description,
    followersNumber,
    isLiked,
  }) {
    this.id = id;
    this.tracksIds = tracksIds;
    this.name = name;
    this.covers = covers;
    this.description = description;
    this.followersNumber = followersNumber;
    this.isLiked = isLiked;
  }
}
