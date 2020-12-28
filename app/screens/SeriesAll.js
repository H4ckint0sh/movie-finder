import React, { useEffect, useState } from 'react';
import { SafeAreaView,Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import SerieNavigation from '../navigation/serieStack';
import { NavigationContainer } from '@react-navigation/native';


const SeriesAll = () => {
  const theme = useTheme();

  return (
      <NavigationContainer independent={true}>
          <SerieNavigation />
      </NavigationContainer>
  );
};

export default SeriesAll;
