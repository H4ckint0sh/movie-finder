import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';
import ResultsFlatList from '../../components/search/ResultsFlatList';
import { searchContext } from '../../context/searchQueryContext';
import api from '../../api/tmdbApi';

const PersonsResultsScreen = () => {
  const theme = useTheme();
  const [query, setQuery] = useContext(searchContext);

  const [personsResults, setPersonsResults] = useState([]);
  useEffect(() => {
    (async () => {
      if (query.length) {
        const results = await api.multiSearch(query);
        setPersonsResults(results.series);
      }
    })();
    console.log(personsResults);
    return () => {
      setPersonsResults([]);
    };
  }, [query]);
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      {/* <ResultsFlatList data={personsResults} /> */}
    </View>
  );
};

export default PersonsResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
