import React from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Home Screen</Title>
    </View>
  );
};

export default HomeScreen;
