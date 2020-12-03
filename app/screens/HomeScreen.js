import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Image,
  Text,
} from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import api from '../api/tmdbApi';

const { width, height } = Dimensions.get('screen');
const SPACING = 10;
const ITEM_SIZE = width * 0.72;

const HomeScreen = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    posterImage: {
      width: '100%',
      height: ITEM_SIZE * 1.2,
      resizeMode: 'cover',
      borderRadius: 24,
      margin: 0,
      marginBottom: 10,
    },
    text: {
      color: theme.colors.primary,
    },
  });

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    (async () => {
      const movies = await api.getPopular();
      setPopular(movies);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Title style={styles.text}>Home Screen</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={popular}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        contentContainerStyle={{ alignItems: 'center' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: 'center',
                  // transform: [{ translateY }],
                  backgroundColor: 'white',
                  borderRadius: 34,
                }}
              >
                <Image
                  source={{ uri: item.poster }}
                  style={styles.posterImage}
                />
                <Text style={{ fontSize: 24 }} numberOfLines={1}>
                  {item.title}
                </Text>
                {/* <Rating rating={item.rating} /> */}
                {/* <Genres genres={item.genres} /> */}
                <Text style={{ fontSize: 12 }} numberOfLines={3}>
                  {item.description}
                </Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
