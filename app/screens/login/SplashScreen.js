import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
// import firebase from 'firebase';

const SplashScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      marginBottom: 20,
      width: 150,
      height: 120,
    },
  });

  useEffect(() => {
    //checkIfLoggedIn();
  }, []);

  // const checkIfLoggedIn = () => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate('BottomTabs');
  //     } else {
  //       navigation.navigate('Welcome');
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />
      <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;
