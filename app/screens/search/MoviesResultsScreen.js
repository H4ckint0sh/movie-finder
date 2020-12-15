import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import ResultsFlatList from '../../components/search/ResultsFlatList';
import { searchContext } from '../../context/searchQueryContext';
import api from '../../api/tmdbApi';

const MoviesResultsScreen = () => {
  const [query, setQuery] = useContext(searchContext);

  const [movieResults, setMovieResults] = useState([]);
  // const [seriesResults, setSeriesResults] = useState([]);
  // const [personsResults, setPersonsResults] = useState([]);

  const theme = useTheme();
  useEffect(() => {
    (async () => {
      if (query.length) {
        const results = await api.multiSearch(query);
        setMovieResults(results.movies);
        // setSeriesResults(results.series);
        // setPersonsResults(results.persons);
      }
    })();
    console.log(movieResults);
  }, [query]);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <ResultsFlatList data={movieResults} />
    </View>
  );
};

export default MoviesResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
