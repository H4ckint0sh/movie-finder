import React from 'react';
import { View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import Movies from '../screens/search/MoviesResultsScreen';
import Series from '../screens/search/SeriesResultsScreen';
import Persons from '../screens/search/PersonsResultsScreen';
import Search from '../components/search/Searchbar';

function CustomTabbar({ state, descriptors, navigation, position }) {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'space-between',
        paddingTop: 100,
        marginHorizontal: 20,
        position: 'absolute',
        zIndex: 2,
      }}
    >
      <StatusBar style="light" />
      <Search />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // modify inputRange for custom behavior
        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0.5)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={index.toString()}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              height: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: theme.colors.disabled,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5,
              backgroundColor: isFocused
                ? theme.colors.surface
                : theme.colors.background,
            }}
          >
            <Animated.Text
              style={{
                opacity,
                color: isFocused
                  ? theme.colors.primary
                  : !theme.dark
                  ? theme.colors.ons
                  : 'white',
              }}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function HomeScreenToptabs() {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      tabBar={(props) => <CustomTabbar {...props} />}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Series" component={Series} />
      <Tab.Screen name="Persons" component={Persons} />
    </Tab.Navigator>
  );
}
