import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, useTheme } from "react-native-paper";

const SearchScreen = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: theme.colors.primary,
    },
  });
  return (
    <View style={styles.container}>
      <Title style={styles.text}>Search Screen</Title>
    </View>
  );
};

export default SearchScreen;
