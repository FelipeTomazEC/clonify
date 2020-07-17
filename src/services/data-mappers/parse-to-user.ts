import { User } from '../../entities/user';

interface Image {
  url: string;
}

export interface UserData {
  display_name: string;
  id: string;
  images: Image[];
}

export const parseDataToUser = (data: UserData) => {
  const name = data.display_name;
  const id = data.id;
  const avatarUrl = data.images[0].url;

  return new User({ avatarUrl, id, name });
};
