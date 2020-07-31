import faker from 'faker';
import React, { useEffect, useState } from 'react';
import { RadioCard } from '../../../components/RadioCard';
import { StickyPageHeader } from '../../../components/StickyPageHeader';
import { RadioStation } from '../../../entities/radio-station';
import { Container } from './styles';

export function Radio() {
  const [radioStations, setRadioStations] = useState([]);

  useEffect(() => {
    const radios = new Array(10).fill(1).map((_) => {
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
    });

    setRadioStations(radios);
  }, []);

  return (
    <Container>
      <StickyPageHeader title="Radio" />
      <main>
        <section>
          <h2 className="label">Recommended Stations</h2>
          <ul>
            {radioStations.map((el) => (
              <li key={el.name}>
                <RadioCard radio={el} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Container>
  );
}
