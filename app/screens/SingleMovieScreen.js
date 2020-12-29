import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { useTheme, Button, Title, Text } from 'react-native-paper';
import Rating from '../components/carousel/Rating';
import Genres from '../components/carousel/Genres';
import { HeaderBackButton, HeaderTitle } from '@react-navigation/stack';

const SingleMovieScreen = ({ route, navigation }) => {
  const theme = useTheme();
  const { item } = route.params;
  console.log(item);

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
    },
    no: {
      alignItems: 'flex-start',
    },
    tinyLogo: {
      width: 300,
      height: 400,
      borderRadius: 30,
    },
    logo: {
      paddingHorizontal: 40,
    },
    height: {
      height: 100,
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <HeaderBackButton onPress={navigation.goBack} />
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.tinyLogo} source={{ uri: item.poster }} />
          <Title>{item.title}</Title>
          <Rating rating={item.rating} />
          <Genres genres={item.genres} />
          <View style={styles.logo}>
            <Text>{item.description}</Text>
          </View>
          <View style={styles.height} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleMovieScreen;
