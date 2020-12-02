import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import api from '../api/tmdbApi';

const MoviesScreen = () => {
  const theme = useTheme();

  const [actionMovies, setActionMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await api.getBYGenre();
      setActionMovies(result);
    })();
    console.log(actionMovies);
  }, []);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.primary,
    },
  });
  return (
    <View style={styles.container}>
      <Title style={styles.text}>Movies Screen</Title>
    </View>
  );
};

export default MoviesScreen;
