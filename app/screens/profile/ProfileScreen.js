import React, { Fragment, useContext, useState } from 'react';
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
      flexDirection: 'row',
      paddingLeft: 15,
    },
    nameContainer: {
      justifyContent: 'center',
      paddingLeft: 15,
    },
    infoContainer: {
      marginVertical: 50,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar.Image
          style={styles.avatar}
          size={80}
          source={{ uri: 'https://randomuser.me/api/portraits/men/45.jpg' }}
        />
        <View style={styles.nameContainer}>
          <Title>Alijan Adeli</Title>
          <Caption>@H4ckint0sh</Caption>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <List.Item
          title="alijan.adeli@icloud.com"
          left={(props) => <List.Icon {...props} icon="email-outline" />}
        />
        <List.Item
          title="********"
          left={(props) => <List.Icon {...props} icon="key-outline" />}
        />
      </View>
      <Divider />
      {listArray.map((item, index) => {
        return (
          <Fragment key={`item-${index}`}>
            <ListItem
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
          </Fragment>
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
