import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import {Title, Button} from 'react-native-paper';
import MoviesScreen from '../screens/MoviesScreen';
import SingleMovieScreen from '../screens/SingleMovieScreen'
import { HeaderBackButton } from '@react-navigation/stack';

const MovieNavigation = () => {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator headerMode="none" initialRouteName="Movies">

                <Stack.Screen             
                name="Movies"
                component={MoviesScreen}
                />

                <Stack.Screen  
                name="SingleMovie"
                component={SingleMovieScreen}
                />

            </Stack.Navigator>
        );
};

export default MovieNavigation;