import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from './API';

const Reviews = () => {
  const { moviesId } = useParams();
  const [moviesReviews, setMoviesReviews] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  const maxCastCount = 5;

  useEffect(() => {
    setStatusMessage('Loading...');
    async function fetchReviews() {
      try {
        const moviesCast = await fetchMovieReviews(moviesId);
        setMoviesReviews(moviesCast.slice(0, maxCastCount));
        setStatusMessage(
          moviesCast.length === 0
            ? "We don't have any reviews for this movie."
            : ''
        );
      } catch (error) {
        console.log(error);
      } 
    }

    fetchReviews();
  }, [moviesId]);

  return (
    <div>
      {statusMessage.length > 0 && <div>{statusMessage}</div>}
      <ul>
        {moviesReviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
