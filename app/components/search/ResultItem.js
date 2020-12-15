import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Title, Paragraph, useTheme } from 'react-native-paper';

const ResultItem = ({ item }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Image />
      <Text></Text>
    </View>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
