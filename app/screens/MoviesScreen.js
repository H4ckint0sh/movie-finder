import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import api from '../api/tmdbApi';
import FlatListSmall from '../components/flatlist/FlatListSmall';
import FlatListBig from '../components/flatlist/FlatListBig';

const MoviesScreen = () => {
  const theme = useTheme();

  const [playingMovies, setPlayingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const nowPlaying = await api.getNowPlaying();
      setPlayingMovies(nowPlaying);
      const action = await api.getBYGenre('28');
      setActionMovies(action);
      const drama = await api.getBYGenre('18');
      setDramaMovies(drama);
    })();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.surface }}>
      <ScrollView>
        <FlatListBig data={playingMovies} heading="In Cinemas" />
        <FlatListSmall data={actionMovies} heading="action" />
        <FlatListSmall data={dramaMovies} heading="drama" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoviesScreen;
