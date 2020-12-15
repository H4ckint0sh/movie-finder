import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ResultItem from './ResultItem';

const ResultsFlatList = ({ data }) => {
  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          data={data}
          keyExtractor={(item) => `item-${item.key}`}
          renderItem={({ item }) => <ResultItem item={item} />}
        />
      )}
    </View>
  );
};

export default ResultsFlatList;

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    marginHorizontal: 20,
  },
});
