import React, { useEffect, useContext, useState } from 'react';
import { Searchbar, useTheme } from 'react-native-paper';
import { searchContext } from '../../context/searchQueryContext';

const Search = () => {
  const theme = useTheme();
  const [query, setQuery] = useContext(searchContext);

  const onChangeSearch = (query) => setQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={query}
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
