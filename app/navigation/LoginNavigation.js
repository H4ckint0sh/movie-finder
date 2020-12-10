import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/login/RegisterScreen';
import WelcomeScreen from '../screens/login/WelcomeScreen';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

const LoginNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Welcome">
      <Stack.Screen
        options={{ gestureEnabled: true }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ gestureEnabled: true }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ gestureEnabled: true }}
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{ gestureEnabled: false }}
        name="BottomTabs"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};
export default LoginNavigation;

const styles = StyleSheet.create({});
