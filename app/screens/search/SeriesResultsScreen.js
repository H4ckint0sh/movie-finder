import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SeriesResultsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Series</Text>
    </View>
  );
};

export default SeriesResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
