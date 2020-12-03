import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import Search from '../components/Searchbar';

const SearchScreen = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    search: {},
    text: {
      color: theme.colors.primary,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Search style={styles.search} />
      <Title style={styles.text}>Search Screen</Title>
    </SafeAreaView>
  );
};

export default SearchScreen;
