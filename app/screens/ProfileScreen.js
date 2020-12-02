import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, useTheme, Button } from 'react-native-paper';

const ProfileScreen = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.primary,
    },
  });
  return (
    <View style={styles.container}>
      <Title style={styles.text}>Profile Screen</Title>
      <Button
        icon="camera"
        mode="default"
        onPress={() => console.log('Pressed')}
      >
        darkTheme
      </Button>
    </View>
  );
};

export default ProfileScreen;
