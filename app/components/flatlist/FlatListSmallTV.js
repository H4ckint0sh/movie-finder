import React from 'react';
import { StyleSheet, Dimensions, View, FlatList } from 'react-native';
import { Card, Headline, Title, Paragraph, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width, height } = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 1;
const SPACE = (width - ITEM_WIDTH) / 2;

const FlatListSmallTV = ({ navigation, data, heading }) => {
console.log(data)
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
                width: 150,
                height: 200,
                marginRight: 15,
                borderRadius: 10
              }}
              onPress={() => navigation.navigate('SingleMovie', {item})}
            >
              <Card.Cover
                source={{
                  uri: item.poster,
                }}
                style={{
                  width: 150,
                  height: 200,
                  borderRadius: 10
                }}
              />
            </Card>
          );
        }}
      />
    </View>
  );
};

export default FlatListSmallTV;

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
