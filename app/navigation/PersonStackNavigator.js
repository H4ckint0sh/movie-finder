import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonsList from '../screens/trending/TrendingPersonsScreen';
import PersonsListDetails from '../screens/trending/PersonListDetailsScreen';

const PersonStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="PersonsList" headerMode="none">
      <Stack.Screen
        options={{ gestureEnabled: false }}
        name="PersonsList"
        component={PersonsList}
      />
      <Stack.Screen
        options={{ gestureEnabled: false }}
        name="PersonListDetails"
        component={PersonsListDetails}
      />
    </Stack.Navigator>
  );
};

export default PersonStackNavigator;
