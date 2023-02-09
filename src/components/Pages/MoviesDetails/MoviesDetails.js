import { lazy, useEffect, useRef, useState, Suspense } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from '../../API';
import {
  DetailsContainer,
  ImgPoster,
  MovieDetailsInfo,
  ContainerInfo,
  ListLink,
  List,
  Addition,
} from './MoviesDetails.styled';

const BackLink = lazy(() => import('../../BackLink/BackLink'));

const MoviesDetails = () => {
  const { moviesId } = useParams();
  const [moviesDetails, setMoviesDetails] = useState();
  const location = useLocation();
  const backRefLink = location.state?.from ?? '/';

  const refState = useRef(backRefLink);

  useEffect(() => {
    async function fetchData() {
      try {
        const moviesDetails = await fetchMovie(moviesId);
        setMoviesDetails(moviesDetails);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [moviesId]);

  if (moviesDetails) {
    const { title, release_date, overview, vote_average, genres, poster_path } =
      moviesDetails;
    const posterUrl =
      'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + poster_path;
    const genersName = genres.map(({ name }) => {
      return name;
    });
    return (
      <DetailsContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <BackLink to={refState.current}>&#8592; Go back</BackLink>
          <MovieDetailsInfo>
            <ImgPoster src={posterUrl} alt=""></ImgPoster>
            <ContainerInfo>
              <h2>
                {title}({release_date.slice(0, 4)})
              </h2>
              <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres </h3>
              <p>{genersName.join(' ')}</p>
            </ContainerInfo>
          </MovieDetailsInfo>
          <Addition>Additional information</Addition>
          <List>
            <ListLink>
              <Link to="cast">Cast</Link>
            </ListLink>
            <ListLink>
              <Link to="reviews">Rewievs</Link>
            </ListLink>
          </List>
          <Outlet />
        </Suspense>
      </DetailsContainer>
    );
  } else {
    return <>loading...</>;
  }
};

export default MoviesDetails;
