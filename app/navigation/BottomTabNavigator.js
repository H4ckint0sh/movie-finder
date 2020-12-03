import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/HomeScreen';
import Movies from '../screens/MoviesScreen';
import Series from '../screens/SeriesScreen';
import Search from '../screens/SearchScreen';
import Profile from '../screens/ProfileScreen';

const BottomTabNavigator = () => {
  const TabNavigator = createMaterialBottomTabNavigator();
  return (
    <TabNavigator.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <TabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="local-movies" color={color} size={26} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Series"
        component={Series}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="tv" color={color} size={26} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={26} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" color={color} size={26} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

export default BottomTabNavigator;
