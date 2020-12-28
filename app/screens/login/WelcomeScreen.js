import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Title, Button, useTheme, IconButton } from 'react-native-paper';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import { userContext } from '../../context/userContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeProvider } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const [user, setUser] = useContext(userContext);
  const styles = StyleSheet.create({
    movieLogo: {
      width: 150,
      height: 120,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
    header: {
      flex: 0.55,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      flex: 0.45,
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.disabled,
      borderWidth: 1,
      borderTopStartRadius: 50,
      borderTopEndRadius: 50,
    },
    button: {
      width: '80%',
      borderRadius: 23,
      paddingVertical: 5,
      marginVertical: 8,
    },
    googleButton: {
      width: '80%',
      borderRadius: 23,
      paddingVertical: 1,
      marginVertical: 8,
      borderWidth: 2,
      borderColor: '#34A853',
      backgroundColor: '#EA4335',
    },
    googleLabel: {
      color: '#FBBC05',
      fontSize: 20,
    },
    label: {
      color: 'white',
      fontSize: 16,
    },
  });
  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  const onSignIn = (googleUser) => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            const { user } = result;
            console.log('user:', user);
            setUser(user);
            navigation.navigate('BottomTabs');
            // firebase
            //   .database()
            //   .ref('/users/' + result.user.uid)
            //   .set({
            //     gmail: result.user.email,
            //     profile_picture: result.additionalUserInfo.profile.picture,
            //     locale: result.additionalUserInfo.profile.locale,
            //     first_name: result.additionalUserInfo.profile.given_name,
            //     last_name: result.additionalUserInfo.profile.family_name,
            //   })
            //   .then((snapshot) => {
            //     console.log('snapshot', snapshot);
            //     navigation.navigate('BottomTabs');
            //   });
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log('User already signed-in Firebase.');
        navigation.navigate('BottomTabs');
      }
    });
  };
  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        //androidClientId: YOUR_CLIENT_ID_HERE,
        iosClientId:
          '868124637531-gbkp2v1utv18s49v6m9q4pac7s2aqbsc.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounce"
          duration={1500}
          style={styles.movieLogo}
          source={require('../../../assets/logo.png')}
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
          style={[styles.googleButton]}
          labelStyle={styles.googleLabel}
          mode="contained"
          onPress={() => signInWithGoogleAsync()}
          icon="google"
          color={'#EA4335'}
          uppercase={false}
        >
          Sign in with Google
        </Button>
        {/* <IconButton
          style={[styles.googleButton]}
          icon="google"
          color={'#EA4335'}
          size={20}
          onPress={() => signInWithGoogleAsync()}
        /> */}
        <Button
          style={[styles.button, { backgroundColor: 'lightgrey' }]}
          mode="contained"
          onPress={() => navigation.navigate('BottomTabs')}
        >
          Continue without signing in{' '}
        </Button>
      </Animatable.View>
    </View>
  );
};

export default WelcomeScreen;
