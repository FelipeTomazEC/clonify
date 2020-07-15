import { Artist } from './artist';
import { Track } from './track';

interface Props {
  artists: Artist[];
  cover: string;
  id: string;
  name: string;
  releaseDate: Date;
  tracks: Track[];
}

export class Album {
  props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  get artists() {
    return this.props.artists;
  }

  get cover() {
    return this.props.cover;
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get releaseDate() {
    return this.props.releaseDate;
  }

  get tracks() {
    return this.props.tracks;
  }
}
