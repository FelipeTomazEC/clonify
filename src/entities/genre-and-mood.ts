interface Props {
  cover: string;
  id: string;
  name: string;
}

export class GenreAndMood {
  props: Props;

  constructor(props: Props) {
    this.props = props;
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
}
