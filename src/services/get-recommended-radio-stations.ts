import faker from 'faker';
import { RadioStation } from '../entities/radio-station';

function createFakeRadioStation() {
  const type = faker.random.boolean() ? 'artist' : 'song';
  const isLiked = faker.random.boolean();
  const name =
    type === 'artist'
      ? faker.name.findName()
      : faker.random.words(Math.floor(Math.random() * 3 + 1));
  const coverImage1 = faker.internet.avatar();
  const coverImage2 = faker.internet.avatar();
  const coverImage3 = faker.internet.avatar();

  return new RadioStation({
    type,
    isLiked,
    mainArtist: coverImage1,
    name,
    secondaryArtists: [coverImage2, coverImage3],
  });
}

export async function getRecommendedRadioStations(): Promise<RadioStation[]> {
  const stations = new Array(10).fill(1).map(createFakeRadioStation);

  return Promise.resolve(stations);
}
