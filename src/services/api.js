import axios from "axios";

export const fetchFilm = async () => {
  const { data } =
    await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=fcda54be8650c9b11970d8029be3ea3a
`);
  return data.results;
};

export const fetchFilmById = async (movieId) => {
  const { data } =
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=fcda54be8650c9b11970d8029be3ea3a
`);
  return data;
};

export const fetchFilmByCast = async (movieId) => {
  const { data } =
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fcda54be8650c9b11970d8029be3ea3a
`);
  return data.cast;
};

export const fetchFilmByReviews = async (movieId) => {
  const { data } =
    await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=fcda54be8650c9b11970d8029be3ea3a
`);
  return data.results;
};

export const fetchFilmBySearch = async (values) => {
  const { data } =
    await axios.get(`https://api.themoviedb.org/3/search/movie?query=${values}&api_key=fcda54be8650c9b11970d8029be3ea3a
`);

  return data.results;
};
