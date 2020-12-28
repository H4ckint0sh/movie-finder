import React, { useEffect, useState } from 'react';
import {SafeAreaView,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme, Button } from 'react-native-paper';
import api from '../api/tmdbApi';
import FlatListSmall from '../components/flatlist/FlatListSmall';
import FlatListBig from '../components/flatlist/FlatListBig';

const MoviesScreen = ({ navigation }) => {
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
        <FlatListBig navigation={navigation} data={playingMovies} heading="In Cinemas NOW!" />
        <FlatListSmall navigation={navigation} data={actionMovies} heading="action" />
        <FlatListSmall navigation={navigation} data={dramaMovies} heading="drama" />
        <Button>Show more...</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoviesScreen;
