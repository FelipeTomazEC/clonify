import { Artist } from '../../entities/artist';

export interface ArtistData {
  name: string;
  id: string;
  avatar?: string;
}

export function parseDataToArtist(data: ArtistData) {
  const name = data.name;
  const id = data.id;
  const avatar = data.avatar ?? '';

  return new Artist({ id, name, avatar });
}
