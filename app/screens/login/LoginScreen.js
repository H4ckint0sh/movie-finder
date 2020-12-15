import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Title, Button } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput } from 'react-native-paper';

import ErrorMessage from '../../components/ErrorMessage';

const validateSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email().label('Email'),
  password: Yup.string().required('Password is required'),
});

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    movieLogo: {
      width: 150,
      height: 120,
    },
    container: {
      flex: 1,
      backgroundColor: 'lightgrey',
    },
    header: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      flex: 0.5,
      alignItems: 'center',
      backgroundColor: 'white',
      borderTopStartRadius: 50,
      borderTopEndRadius: 50,
    },
    input: {
      justifyContent: 'center',
      alignSelf: 'center',
      width: '80%',
      height: 55,
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      margin: 8,
      overflow: 'hidden',
    },
    loginButton: {
      width: '80%',
      borderRadius: 23,
      paddingVertical: 5,
      marginTop: 30,
    },
    continueButton: {
      borderRadius: 23,
      backgroundColor: 'lightgrey',
      width: '80%',
      paddingVertical: 5,
      marginTop: 20,
    },
    register: {
      marginTop: 25,
    },
    registerButton: {
      color: '#007AFF',
    },
    errorText: {
      color: 'red',
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
            source={require('../../../assets/logo.png')}
          />
        </View>
        <Animatable.View
          style={styles.footer}
          animation="slideInUp"
          duration={1000}
        >
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validateSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <Title style={{ marginVertical: 20 }}>Sign in</Title>
                <TextInput
                  style={styles.input}
                  mode="flat"
                  underlineColor="transparent"
                  left={<TextInput.Icon name="email" />}
                  placeholder="Email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  textContentType="emailAddress"
                />
                <ErrorMessage error={errors.email} visible={touched.email} />
                <TextInput
                  style={[styles.input]}
                  mode="flat"
                  underlineColor="transparent"
                  left={<TextInput.Icon name="lock" />}
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  secureTextEntry={true}
                />
                <ErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />
                <Button
                  style={styles.loginButton}
                  labelStyle={styles.label}
                  mode="contained"
                  onPress={() => handleSubmit}
                >
                  Login
                </Button>
                <Button
                  style={styles.continueButton}
                  mode="contained"
                  onPress={() => navigation.push('BottomTabs')}
                >
                  Continue without signing in
                </Button>
                <Text style={styles.register}>
                  Don't have an account?{' '}
                  <Text
                    style={styles.registerButton}
                    onPress={() => navigation.push('Register')}
                  >
                    Register
                  </Text>
                </Text>
              </>
            )}
          </Formik>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
