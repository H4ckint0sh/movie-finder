import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/HomeScreen";

const BottomTabNavigator = () => {
  const TabNavigator = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        initialRouteName='Home'
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <TabNavigator.Screen name='Home' component={Home} />
        <TabNavigator.Screen name='Movies' component={Home} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
