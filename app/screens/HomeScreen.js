import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import api from '../api/tmdbApi';

const HomeScreen = () => {
  const theme = useTheme();
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

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await api.getPopular();
      setPopular(result);
    })();
    console.log('popular', popular);
  }, []);
  return (
    <View style={styles.container}>
      <Title style={styles.text}>Home Screen</Title>
    </View>
  );
};

export default HomeScreen;
