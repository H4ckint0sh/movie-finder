import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from '../navigation/BottomTabNavigator';

const Main = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;
