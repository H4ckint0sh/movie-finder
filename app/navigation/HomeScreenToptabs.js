import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import HomeScreen from '../screens/HomeScreen';

function CustomTabbar({ state, descriptors, navigation, position }) {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 40,
        marginHorizontal: 40,
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
      }}
    >
      <StatusBar style="light" />
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

function MovieScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movies!</Text>
    </View>
  );
}

function SeriesScreen() {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
      }}
    >
      <Text style={{ color: theme.colors.onSurface }}>TV Series!</Text>
    </View>
  );
}

function PersonsScreen() {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
      }}
    >
      <Text style={{ color: theme.colors.onSurface }}>Persons!</Text>
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
      <Tab.Screen name="Movies" component={HomeScreen} />
      <Tab.Screen name="TV Series" component={SeriesScreen} />
      <Tab.Screen name="Persons" component={PersonsScreen} />
    </Tab.Navigator>
  );
}
