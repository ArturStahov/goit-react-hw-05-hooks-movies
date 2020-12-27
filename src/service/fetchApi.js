import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '81f248d3c9154788229a5419bb33091a',
  language: 'en-US',
  include_adult: false,
};

const getPopular = page => {
  const options = {
    params: {
      page,
    },
  };
  return axios.get('movie/popular?', options).then(response => response.data);
};

const searchMovie = (query, page) => {
  const options = {
    params: {
      page,
      query,
    },
  };
  return axios.get('search/movie?', options).then(response => response.data);
};

const getMovieDetails = movieID =>
  axios.get(`movie/${movieID}?`).then(response => response.data);

const getCastDetails = movieID =>
  axios.get(`movie/${movieID}/credits?`).then(response => response.data);

const getReviewsDetails = movieID =>
  axios.get(`movie/${movieID}/reviews?`).then(response => response.data);

export {
  getPopular,
  searchMovie,
  getMovieDetails,
  getCastDetails,
  getReviewsDetails,
};
