import React, { useEffect } from 'react';
import { Searchbar, useTheme } from 'react-native-paper';
import api from '../../api/tmdbApi';

const Search = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const [movieResults, setMovieResults] = React.useState([]);
  const [seriesResults, setSeriesResults] = React.useState([]);
  const [personsResults, setPersonsResults] = React.useState([]);

  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    (async () => {
      if (searchQuery.length) {
        const {
          data: { results },
        } = await api.multiSearch(searchQuery);
        const movies = results.filter((item) => item.media_type === 'movie');
        setMovieResults(movies);
        const series = results.filter((item) => item.media_type === 'tv');
        setSeriesResults(series);
        const persons = results.filter((item) => item.media_type === 'person');
        setPersonsResults(persons);
      }
    })();
    console.log('movieResults :', movieResults);
    console.log('seriesResults :', seriesResults);
    console.log('personsResults :', personsResults);
  }, [searchQuery]);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        elevation: 1,
        position: 'absolute',
        width: '100%',
        top: 40,
        alignSelf: 'center',
        borderRadius: 30,
      }}
    />
  );
};

export default Search;
