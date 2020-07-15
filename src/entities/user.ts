interface Props {
  name: string;
  avatarUrl: string;
  id: string;
}

export class User {
  props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  get name() {
    return this.props.name;
  }

  get id() {
    return this.props.id;
  }

  get avatarUrl() {
    return this.props.avatarUrl;
  }
}
