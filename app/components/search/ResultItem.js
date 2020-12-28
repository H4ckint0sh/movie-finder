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
          <Title style={styles.title} numberOfLines={1}>
            {item.title}
          </Title>
          {item.rating ? <Rating rating={item.rating} /> : null}
          {item.genres ? <Genres genres={item.genres} /> : null}
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
  title: {
    fontSize: 16,
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
