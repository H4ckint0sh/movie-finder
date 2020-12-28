import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import {Title, Button} from 'react-native-paper';
import SeriesScreen from '../screens/SeriesScreen';
import SingleMovieScreen from '../screens/SingleMovieScreen'
import { HeaderBackButton } from '@react-navigation/stack';

const SerieNavigation = () => {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator headerMode="none" initialRouteName="Series">

                <Stack.Screen             
                name="Series"
                component={SeriesScreen}
                />

                <Stack.Screen  
                name="SingleMovie"
                component={SingleMovieScreen}
                />

            </Stack.Navigator>
        );
};

export default SerieNavigation;