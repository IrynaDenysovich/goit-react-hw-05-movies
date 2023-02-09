import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from './API';

const Cast = () => {
  const { moviesId } = useParams();
  const [moviesCast, setMoviesCast] = useState([]);

  const maxCastCount = 5;

  useEffect(() => {
    async function fetchCast() {
      try {
        const moviesCast = await fetchMovieCredits(moviesId);
        setMoviesCast(moviesCast.slice(0, maxCastCount));
      } catch (error) {
      } finally {
      }
    }

    fetchCast();
  }, [moviesId]);

  return (
    <ul>
      {moviesCast.map(({ profile_path, name, character, id }) => {
        const profileUrl =
          'https://image.tmdb.org/t/p/w138_and_h175_face' + profile_path;
        return (
          <li key={id}>
            <img src={profileUrl} alt=""></img>
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
