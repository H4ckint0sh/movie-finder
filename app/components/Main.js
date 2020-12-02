import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import BottomNavigator from "../navigation/BottomTabNavigator";

const Main = () => {
  return (
    <PaperProvider>
      <BottomNavigator />
    </PaperProvider>
  );
};

export default Main;
