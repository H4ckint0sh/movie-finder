import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const PersonListDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <SafeAreaView>
      <Text>Persons Details</Text>
    </SafeAreaView>
  );
};

export default PersonListDetailsScreen;

const styles = StyleSheet.create({});
