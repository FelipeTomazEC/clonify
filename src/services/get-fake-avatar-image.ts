import faker from 'faker';

export const getFakeAvatarImage = (size = 300) => 
  `https://i.pravatar.cc/${size}?img=${faker.random.word()}`;
  