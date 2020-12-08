import React, { useContext, useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {
  Title,
  useTheme,
  Button,
  TouchableRipple,
  Switch,
  Avatar,
  Caption,
  Text,
  Divider,
  List,
} from 'react-native-paper';
import PreferencesContext from '../../context/preferencesContext';
import ListItem from '../../components/ListItem';

const listArray = [
  { title: 'Account', icon: 'chevron-right' },
  { title: 'My Ratings', icon: 'chevron-right' },
  { title: 'My Wishlist', icon: 'chevron-right' },
  { title: 'Set PrimaryColor', icon: 'chevron-down' },
];

const ProfileScreen = () => {
  const paperTheme = useTheme();
  const { theme, toggleTheme } = useContext(PreferencesContext);
  const [showColoerSettings, setShowColorSettings] = useState(false);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: paperTheme.colors.surface,
    },
    profileContainer: {
      flex: 0.7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      paddingTop: 10,
    },
    userName: {},
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar.Image
          style={styles.avatar}
          size={100}
          source={{ uri: 'https://randomuser.me/api/portraits/men/45.jpg' }}
        />
        <Title style={styles.name}>Alijan Adeli</Title>
        <Caption style={styles.userName}>@H4ckint0sh</Caption>
      </View>
      <Divider />
      {listArray.map((item, index) => {
        return (
          <>
            <ListItem
              key={`item-${index}`}
              title={item.title}
              icon={
                index === 3 && showColoerSettings === true
                  ? 'chevron-up'
                  : item.icon
              }
              onPress={() =>
                index === 3 ? setShowColorSettings(!showColoerSettings) : null
              }
            />
            <Divider />
          </>
        );
      })}
      <List.Item
        title="Light Theme"
        right={(props) => (
          <Switch value={theme === 'light'} onValueChange={toggleTheme} />
        )}
      />
      <Divider />
      <List.Item
        title="Push Nutifications"
        right={(props) => (
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        )}
      />
      <Divider />
    </SafeAreaView>
  );
};

export default ProfileScreen;
