import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  Title,
  useTheme,
  Button,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import PreferencesContext from '../context/preferencesContext';

const ProfileScreen = () => {
  const paperTheme = useTheme();
  const { theme, toggleTheme } = useContext(PreferencesContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: paperTheme.colors.primary,
    },
  });
  return (
    <View style={styles.container}>
      <Title style={styles.text}>Profile Screen</Title>
      <TouchableRipple onPress={toggleTheme}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifySelf: 'space-between',
          }}
        >
          <Text>LightTheme</Text>
          <View pointerEvents="none">
            <Switch value={theme === 'light'} />
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

export default ProfileScreen;
