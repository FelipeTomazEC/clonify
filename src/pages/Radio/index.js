import faker from "faker";
import React, { useEffect, useState } from "react";
import { RadioCard } from "../../components/RadioCard";
import { StickyPageHeader } from "../../components/StickyPageHeader";
import { Container } from "./styles";

export function Radio() {
  const [radioStations, setRadioStations] = useState([]);

  useEffect(() => {
    const radios = new Array(10).fill(1).map((_) => {
      const isArtistRadio = faker.random.boolean();
      const isLiked = faker.random.boolean();
      const name = isArtistRadio
        ? faker.name.findName()
        : faker.random.words(Math.floor(Math.random() * 3 + 1));
      const coverImage1 = faker.internet.avatar();
      const coverImage2 = faker.internet.avatar();
      const coverImage3 = faker.internet.avatar();
      const coverImages = [coverImage1, coverImage2, coverImage3];

      return { name, coverImages, isArtistRadio, isLiked };
    });

    setRadioStations(radios);
  }, []);

  return (
    <Container>
      <StickyPageHeader title="Radio" />
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
    </Container>
  );
}
