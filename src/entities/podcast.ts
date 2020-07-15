interface Props {
  covers: string[];
  description: string;
  id: string;
  name: string;
  publisher: string;
}

export class Podcast {
  props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  get covers() {
    return this.props.covers;
  }

  get description() {
    return this.props.description;
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get publisher() {
    return this.props.publisher;
  }
}
