import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Title, useTheme } from 'react-native-paper';
import Search from '../../components/Searchbar';

const SearchScreen = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Search />
    </SafeAreaView>
  );
};

export default SearchScreen;
