import { Track } from './track';

interface Props {
  cover: string;
  description: string;
  followersNumber: number;
  id: string;
  isLiked: boolean;
  name: string;
  ownerName: string;
  tracks: Track[];
}

export class Playlist {
  props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  get cover() {
    return this.props.cover;
  }

  get description() {
    return this.props.description;
  }

  get followersNumber() {
    return this.props.followersNumber;
  }

  get id() {
    return this.props.id;
  }

  get isLiked() {
    return this.props.isLiked;
  }

  get name() {
    return this.props.name;
  }

  get ownerName() {
    return this.props.ownerName;
  }

  get tracks() {
    return this.props.tracks;
  }
}
