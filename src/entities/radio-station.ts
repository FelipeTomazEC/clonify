type RadioType = 'artist' | 'song';
type ImageURL = string;

interface Props {
  isLiked: boolean;
  mainArtist: ImageURL;
  secondaryArtists: [ImageURL, ImageURL];
  name: string;
  type: RadioType;
}

export class RadioStation {
  props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  get isLiked(): boolean {
    return this.props.isLiked;
  }

  get name(): string {
    return this.props.name;
  }

  get mainArtist(): ImageURL {
    return this.props.mainArtist;
  }

  get secondaryArtists(): [ImageURL, ImageURL] {
    return this.props.secondaryArtists;
  }

  get type(): RadioType {
    return this.props.type;
  }
}
