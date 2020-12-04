import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// screens
import Home from '../screens/HomeScreen';
import Movies from '../screens/MoviesScreen';
import Series from '../screens/SeriesScreen';
import Search from '../screens/SearchScreen';
import Profile from '../screens/ProfileScreen';

import CustomToptabs from '../navigation/HomeScreenToptabs';

const BottomTabNavigator = ({ navigation, route }) => {
  const TabNavigator = createMaterialBottomTabNavigator();
  const theme = useTheme();
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.onSurface}
      barStyle={{
        backgroundColor: theme.colors.surface,
        color: theme.colors.disabled,
        borderTopColor: theme.colors.disabled,
        borderTopWidth: 1,
      }}
    >
      <TabNavigator.Screen
        name="Latest"
        component={CustomToptabs}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="new-releases"
              style={{
                color: focused ? theme.colors.primary : theme.colors.disabled,
              }}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="local-movies"
              style={{
                color: focused ? theme.colors.primary : theme.colors.disabled,
              }}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Series"
        component={Series}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="tv"
              style={{
                color: focused ? theme.colors.primary : theme.colors.disabled,
              }}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="search"
              style={{
                color: focused ? theme.colors.primary : theme.colors.disabled,
              }}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="person"
              style={{
                color: focused ? theme.colors.primary : theme.colors.disabled,
              }}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
