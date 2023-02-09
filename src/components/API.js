import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const commonKey = 'f42f2f62d598d39d316744d8859de3e9';

export const fetchSearch = async (query, page) => {
  const response = await axios.get('/search/movie', {
    params: {
      query: query,
      api_key: commonKey,
      page: page,
    },
  });

  return response.data.results;
};

export const fetchTrending = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: {
      api_key: commonKey,
    },
  });

  return response.data.results;
};

export const fetchMovie = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: commonKey,
    },
  });

  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: commonKey,
    },
  });

  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: commonKey,
    },
  });

  return response.data.results;
};
