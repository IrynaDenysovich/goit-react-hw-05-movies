import { useState, useEffect, lazy, Suspense } from 'react';
import { fetchTrending } from '../API';

const MoviesList = lazy(() => import('../MoviesList'));

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const movies = await fetchTrending();
        const newMovies = movies.map(({ id, title }) => ({
          id,
          title,
        }));
        setMovies(newMovies);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList movies={movies}></MoviesList>
      </Suspense>
    </div>
  );
};

export default Home;
