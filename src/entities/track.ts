import { Artist } from './artist';

interface Props {
  albumName: string;
  albumCover: string;
  albumId: string;
  artists: Artist[];
  duration: number;
  id: string;
  sourceUrl: string;
  title: string;
}

export class Track {
  props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  get albumName() {
    return this.props.albumName;
  }

  get albumId() {
    return this.props.albumId;
  }

  get albumCover() {
    return this.props.albumCover;
  }

  get artists() {
    return this.props.artists;
  }

  get duration() {
    return this.props.duration;
  }

  get id() {
    return this.props.id;
  }

  get sourceUrl() {
    return this.props.sourceUrl;
  }

  get title() {
    return this.props.title;
  }
}
