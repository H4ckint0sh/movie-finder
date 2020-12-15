import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ResultItem from './ResultItem';

const ResultsFlatList = ({ data }) => {
  return (
    <View>
      {data.length !== 0 && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ResultItem item={item} />}
        />
      )}
    </View>
  );
};

export default ResultsFlatList;

const styles = StyleSheet.create({});
