import React, { useState, useMemo, useContext } from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from '../navigation/BottomTabNavigator';
import { useColorScheme } from 'react-native-appearance';
import PreferencesContext from '../context/preferencesContext';
import LoginNavigation from '../navigation/LoginNavigation';
import Firebase, { FirebaseProvider } from '../config/Firebase';

const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme === 'dark' ? 'dark' : 'light');
  const [color, setColor] = useState('#1ba1f2');
  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  const setPrimaryColor = (_color) => {
    setColor(_color);
  };

  const preferences = useMemo(
    () => ({
      toggleTheme,
      setPrimaryColor,
      theme,
      color,
    }),
    [theme, color]
  );

  return (
    <FirebaseProvider value={Firebase}>
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider
          theme={
            theme === 'light'
              ? {
                  ...DefaultTheme,
                  colors: { ...DefaultTheme.colors, primary: '#1ba1f2' },
                }
              : {
                  ...DarkTheme,
                  colors: { ...DarkTheme.colors, primary: '#1ba1f2' },
                }
          }
        >
          <NavigationContainer>
            <LoginNavigation />
          </NavigationContainer>
        </PaperProvider>
      </PreferencesContext.Provider>
    </FirebaseProvider>
  );
};

export default Main;
