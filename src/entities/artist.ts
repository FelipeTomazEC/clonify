interface Props {
  avatar: string;
  id: string;
  name: string;
}

export class Artist {
  props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  get avatar() {
    return this.props.avatar;
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }
}
