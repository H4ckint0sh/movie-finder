import React, { useEffect, useState } from 'react';
import { SafeAreaView,Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import MovieNavigation from '../navigation/movieStack';
import { NavigationContainer } from '@react-navigation/native';


const MoviesAll = () => {
  const theme = useTheme();

  return (
      <NavigationContainer independent={true}>
          <MovieNavigation />
      </NavigationContainer>
  );
};

export default MoviesAll;
