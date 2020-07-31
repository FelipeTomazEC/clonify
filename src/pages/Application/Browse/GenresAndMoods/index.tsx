import React, { Fragment, useEffect, useState } from 'react';
import { ContentLoadingAnimation } from '../../../../components/ContentLoadingAnimation';
import { GenreAndMoodCard } from '../../../../components/GenreAndMoodCard';
import { GenreAndMood } from '../../../../entities/genre-and-mood';
import { getGenresFromAPI } from '../../../../services/get-genres-from-api';
import { Container } from './styles';

export function GenresAndMoods() {
  const [genres, setGenres] = useState<GenreAndMood[]>();

  useEffect(() => {
    getGenresFromAPI()
      .then((response) => setGenres(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      {genres === undefined ? (
        <ContentLoadingAnimation />
      ) : (
        <Fragment>
          <h2 className="title">Genres & Moods</h2>
          <ul className="genres-list">
            {genres.map((genre) => (
              <li className="genre-item" key={genre.id}>
                <GenreAndMoodCard
                  cover={genre.cover}
                  name={genre.name}
                  onClick={() =>
                    alert(`Sorry! This functionality was not implemented yet.`)
                  }
                />
              </li>
            ))}
          </ul>
        </Fragment>
      )}
    </Container>
  );
}
