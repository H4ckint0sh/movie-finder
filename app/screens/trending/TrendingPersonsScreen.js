import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const { width } = Dimensions.get('screen');
import { Avatar } from 'react-native-paper';
import {
  FlingGestureHandler,
  Directions,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import api from '../../api/tmdbApi';
import { useTheme } from 'react-native-paper';
import { event } from 'react-native-reanimated';

const OVERFLOW_HEIGHT = 100;
const SPACING = 10;
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 1.6;
const VISIBLE_ITEMS = 3;
const MARGIN = (width - ITEM_WIDTH) / 2;

const OverflowItems = ({ data, scrollXAnimated }) => {
  const theme = useTheme();
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text
                style={[styles.name, { color: theme.colors.disabled }]}
                numberOfLines={1}
              >
                {item.name}
              </Text>
              <View style={styles.infoContainer}>
                <Text
                  style={[styles.location, { color: theme.colors.disabled }]}
                >
                  {item.known_for_department}
                </Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default function PersonList({ navigation }) {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const setActiveIndex = useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });

  useEffect(() => {
    (async () => {
      const persons = await api.getTrending('person');
      setData(persons);
    })();
    console.log(data);
  }, []);

  useEffect(() => {
    if (index === data.length - VISIBLE_ITEMS - 1) {
      // get new data
      // fetch more data
      const newData = [...data, ...data];
      setData(newData);
    }
  });

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}
    >
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}
      >
        <SafeAreaView
          style={[styles.container, { backgroundColor: theme.colors.surface }]}
        >
          <StatusBar hidden />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACING * 2,
              marginTop: 50,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [style, { zIndex: data.length - index }];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({ item, index: i }) => {
              const inputRange = [i - 1, i, i + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              return (
                <Animated.View
                  style={{
                    position: 'absolute',
                    left: -ITEM_WIDTH / 2,
                    opacity,
                    transform: [
                      {
                        translateX,
                      },
                      { scale },
                    ],
                  }}
                >
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w440_and_h660_face${item.profile_path}`,
                    }}
                    style={{
                      width: ITEM_WIDTH,
                      height: ITEM_HEIGHT,
                      borderRadius: 14,
                    }}
                  />
                </Animated.View>
              );
            }}
          />
          <OverflowItems data={data} scrollXAnimated={scrollXAnimated} />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    paddingTop: SPACING * 3,
  },
  infoContainer: {
    justifyContent: 'space-between',
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
    position: 'absolute',
    top: ITEM_HEIGHT * 1.3,
    marginHorizontal: MARGIN,
  },
});
