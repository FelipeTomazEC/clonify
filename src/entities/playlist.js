export class Playlist {
  constructor({
    id,
    tracks,
    name,
    cover,
    description,
    followersNumber,
    isLiked,
    ownerName,
  }) {
    this.id = id;
    this.tracks = tracks;
    this.name = name;
    this.cover = cover;
    this.description = description;
    this.followersNumber = followersNumber;
    this.isLiked = isLiked;
    this.ownerName = ownerName;
  }
}
