import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Title, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    movieLogo: {
      width: 130,
      height: 130,
    },
    container: {
      flex: 1,
      backgroundColor: 'lightgrey',
    },
    header: {
      flex: 0.65,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      flex: 0.35,
      alignItems: 'center',
      backgroundColor: 'white',
      borderTopStartRadius: 50,
      borderTopEndRadius: 50,
    },
    button: {
      width: '80%',
      borderRadius: 23,
      paddingVertical: 5,
      marginVertical: 8,
    },
    label: {
      color: 'white',
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: '100%', flex: 1 }}
        source={require('../../../assets/movie-background.jpg')}
      >
        <View style={styles.header}>
          <Animatable.Image
            animation="bounce"
            duration={1500}
            style={styles.movieLogo}
            source={require('../../../assets/logo2.png')}
          />
        </View>
        <Animatable.View
          style={styles.footer}
          animation="slideInUp"
          duration={1000}
        >
          <Title style={{ marginVertical: 20 }}>Find the movies you want</Title>

          <Button
            labelStyle={styles.label}
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate('Login')}
          >
            Sign In
          </Button>
          <Button
            style={[styles.button]}
            labelStyle={styles.label}
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </Button>
          <Button
            style={[styles.button, { backgroundColor: 'lightgrey' }]}
            mode="contained"
            onPress={() => navigation.navigate('BottomTabs')}
          >
            Continue without signing in{' '}
          </Button>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
