import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import ResultsFlatList from '../../components/search/ResultsFlatList';
import { searchContext } from '../../context/searchQueryContext';
import api from '../../api/tmdbApi';

const SeriesResultsScreen = () => {
  const theme = useTheme();
  const [query, setQuery] = useContext(searchContext);

  const [seriesResults, setSeriesResults] = useState([]);
  useEffect(() => {
    (async () => {
      if (query.length) {
        const results = await api.multiSearch(query);
        setSeriesResults(results.series);
      }
    })();
    return () => {
      setSeriesResults([]);
    };
  }, [query]);
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <ResultsFlatList data={seriesResults} />
    </View>
  );
};

export default SeriesResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
