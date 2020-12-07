import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, useTheme } from 'react-native-paper';

const SeriesScreen = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
    },
    text: {
      color: theme.colors.primary,
    },
  });
  return (
    <View style={styles.container}>
      <Title style={styles.text}>Series Screen</Title>
    </View>
  );
};

export default SeriesScreen;
