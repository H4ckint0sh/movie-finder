import React, { useEffect } from 'react';
import { Searchbar, useTheme } from 'react-native-paper';
import api from '../api/tmdbApi';

const Search = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    (async () => {
      if (searchQuery.length) {
        const results = await api.multiSearch(searchQuery);
        setSearchResults(results);
      }
    })();
    console.log(searchResults);
  }, [searchQuery]);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        elevation: 1,
        position: 'absolute',
        width: '90%',
        top: 40,
        alignSelf: 'center',
        borderRadius: 30,
        zIndex: 3,
      }}
    />
  );
};

export default Search;
