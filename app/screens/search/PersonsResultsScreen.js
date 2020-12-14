import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PersonsResultsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Persons</Text>
    </View>
  );
};

export default PersonsResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
