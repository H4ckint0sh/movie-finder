import client from './client';
import genres from '../data/tmdb';

const API_KEY = '97e0e0d17699c5d9bf1092bdd6cd50a5';

const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

const editData = (data) => {
  const movies = data.map(
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

const getTrending = async (type) => {
  const API_URL = `/trending/${type}/week?api_key=${API_KEY}`;
  const {
    data: { results },
  } = await client.get(API_URL);

  if (type === 'person') {
    return results;
  }
  const movies = editData(results);

  return movies;
};

const getBYGenre = async (id) => {
  const API_URL = `/discover/movie?api_key=${API_KEY}&with_genres=${id}`;
  const {
    data: { results },
  } = await client.get(API_URL);
  const movies = editData(results);
  return movies;
};

const getTVSeries = async (id) => {
  const API_URL = `/discover/tv?api_key=${API_KEY}&with_genres=${id}`;
  const {
    data: { results },
  } = await client.get(API_URL);
  const series = editData(results)
  return series;
  //api.themoviedb.org/3/discover/movie?api_key=97e0e0d17699c5d9bf1092bdd6cd50a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10765
}

const getNowPlaying = async () => {
  const API_URL = `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
  const {
    data: { results },
  } = await client.get(API_URL);
  const movies = editData(results);
  return movies;
};

const multiSearch = async (query) => {
  const API_URL = `/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const {
    data: { results },
  } = await client.get(API_URL);
  const moviesResults = results.filter((item) => item.media_type === 'movie');
  const movies = editData(moviesResults);

  const seriesResults = results.filter((item) => item.media_type === 'tv');
  const series = editData(seriesResults);

  const persons = results.filter((item) => item.media_type === 'person');
  return { movies: movies, series: series, persons: persons };
};

export default {
  getTrending,
  getBYGenre,
  getNowPlaying,
  multiSearch,
  getTVSeries,
};
