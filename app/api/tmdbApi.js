import client from './client';
import genres from '../data/tmdb';

const API_KEY = '97e0e0d17699c5d9bf1092bdd6cd50a5';

const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

const getTrending = async (type) => {
  const API_URL = `/trending/${type}/week?api_key=${API_KEY}`;
  const {
    data: { results },
  } = await client.get(API_URL);
  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
      genre_ids,
    }) => ({
      key: id,
      title: original_title,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );

  return movies;
};

const getBYGenre = async () => {
  const result = await client.get(`/genre/movie/list?api_key=${API_KEY}`);
  return result;
};

export default {
  getTrending,
  getBYGenre,
};
