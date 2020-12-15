import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Title, Paragraph, useTheme, Divider } from 'react-native-paper';
import Genres from '../carousel/Genres';
import Rating from '../carousel/Rating';

const ResultItem = ({ item }) => {
  const theme = useTheme();
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.poster }} />
        <View style={styles.infoContainer}>
          <Title numberOfLines={1}>{item.title}</Title>
          <Rating rating={item.rating} />
          <Genres genres={item.genres} />
          <Paragraph numberOfLines={3}>{item.description}</Paragraph>
        </View>
      </View>
      <Divider style={{ backgroundColor: theme.colors.onSurface }} />
    </>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 120,
    height: 160,
    borderRadius: 10,
  },
  infoContainer: {
    marginHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 160,
  },
});
