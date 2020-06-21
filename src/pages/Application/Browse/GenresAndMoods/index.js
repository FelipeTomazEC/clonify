import React, { useEffect, useState } from "react";
import { GenreAndMoodCard } from "../../../../components/GenreAndMoodCard";
import { getGenresFromAPI } from "../../../../services/get-genres-from-api";
import { Container } from "./styles";

export function GenresAndMoods() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenresFromAPI()
      .then((response) => setGenres(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <h2 className="title">Genres & Moods</h2>
      <ul className="genres-list">
        {genres.map((genre) => (
          <li className="genre-item" key={genre.id}>
            <GenreAndMoodCard
              cover={genre.cover}
              name={genre.name}
              onClick={() => alert(`Click on ${genre.id}`)}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
