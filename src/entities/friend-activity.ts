import { Track } from './track';
import { User } from './user';

interface Props {
  friend: User;
  currentSong: Track;
}

export class FriendActivity {
  props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  get currentSong() {
    return this.props.currentSong;
  }

  get friend() {
    return this.props.friend;
  }
}
