import { lazy, Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'components/API';

const MoviesList = lazy(() => import('../MoviesList'));
const SearchBox = lazy(() => import('../SearchBox/SearchBox'));

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const page = 1;

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      fetchQuery(query);
    }
  }, [searchParams]);

  async function fetchQuery(query) {
    try {
      const movies = await fetchSearch(query, page);
      const newMovies = movies.map(({ id, title }) => ({
        id,
        title,
      }));
      setMovies(newMovies);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBox></SearchBox>
        <MoviesList movies={movies}></MoviesList>
      </Suspense>
    </div>
  );
};

export default Movies;
