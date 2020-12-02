import client from './client';

const api_key = '97e0e0d17699c5d9bf1092bdd6cd50a5';

const getPopular = async () => {
  const result = await client.get(
    `/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );
  return result;
};

const getBYGenre = async (gene) => {
  const result = await client.get(`/genre/movie/list?api_key=${api_key}`);
  return result;
};

export default {
  getPopular,
  getBYGenre,
};
