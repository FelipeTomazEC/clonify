import React, { useEffect, useState } from 'react';
import { RadioCard } from '../../../components/RadioCard';
import { StickyPageHeader } from '../../../components/StickyPageHeader';
import { RadioStation } from '../../../entities/radio-station';
import { getRecommendedRadioStations } from '../../../services/get-recommended-radio-stations';
import { Container } from './styles';

export function Radio() {
  const [radioStations, setRadioStations] = useState<RadioStation[]>([]);

  useEffect(() => {
    getRecommendedRadioStations()
      .then((stations) => setRadioStations(stations))
      .catch((err) => console.error(err));
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
