import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});
