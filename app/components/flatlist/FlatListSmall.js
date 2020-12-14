import React from 'react';
import { StyleSheet, Dimensions, View, FlatList } from 'react-native';
import { Card, Headline, Title, Paragraph } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.4;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;
const SPACE = (width - ITEM_WIDTH) / 2;

const FlatListSmall = ({ data, heading }) => {
  return (
    <View style={styles.container}>
      <Headline style={styles.headline}>{heading}</Headline>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={[{ key: 'space-left' }, ...data, { key: 'space-right' }]}
        horizontal
        keyExtractor={(item) => `item-${item.key}`}
        contentContainerStyle={{ alignItems: 'center' }}
        snapToAlignment={'start'}
        snapToInterval={ITEM_WIDTH + SPACE / 2 - 15}
        decelerationRate={'fast'}
        pagingEnabled
        renderItem={({ item }) => {
          if (!item.poster) {
            return <View key={item.key} style={{ width: SPACE }} />;
          }
          return (
            <Card
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT * 2,
                marginRight: 15,
              }}
            >
              <Card.Cover
                source={{
                  uri: item.poster,
                }}
              />
              <Card.Content>
                <Title numberOfLines={1}>{item.title}</Title>
                <Paragraph numberOfLines={2}>{item.description}</Paragraph>
              </Card.Content>
            </Card>
          );
        }}
      />
    </View>
  );
};

export default FlatListSmall;

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    margin: 0,
  },
  headline: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
  },
});
