import React, { useContext, useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {
  Title,
  useTheme,
  Button,
  Switch,
  Avatar,
  Caption,
  Text,
  Divider,
  List,
  Portal,
  Dialog,
  Checkbox,
  IconButton,
} from 'react-native-paper';
import PreferencesContext from '../../context/preferencesContext';

const ProfileScreen = () => {
  const paperTheme = useTheme();
  const { theme, toggleTheme } = useContext(PreferencesContext);
  const { setPrimaryColor } = useContext(PreferencesContext);

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: paperTheme.colors.surface,
    },
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 30,
      marginHorizontal: 50,
    },
    nameContainer: {
      justifyContent: 'center',
    },
    infoContainer: {
      marginVertical: 50,
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
    ratingSectionContainer: {
      alignItems: 'center',
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
        <IconButton
          style={{
            alignSelf: 'center',
          }}
          icon="exit-to-app"
          color={paperTheme.colors.notification}
          size={30}
          onPress={() => console.log('Logged Out')}
        />
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingSectionContainer}>
          <Text>My Ratings</Text>
          <Caption>34</Caption>
        </View>
        <View style={styles.ratingSectionContainer}>
          <Text>My Wishlists</Text>
          <Caption>23</Caption>
        </View>
        <View style={styles.ratingSectionContainer}>
          <Text>My Reviews</Text>
          <Caption>12</Caption>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <List.Item
          title="alijan.adeli@icloud.com"
          left={(props) => <List.Icon {...props} icon="email-outline" />}
          right={(props) => <List.Icon {...props} icon="pencil-outline" />}
        />
        <List.Item
          title="0766506640"
          left={(props) => <List.Icon {...props} icon="phone-outline" />}
          right={(props) => <List.Icon {...props} icon="pencil-outline" />}
        />
        <List.Item
          title="********"
          left={(props) => <List.Icon {...props} icon="key-outline" />}
          right={(props) => <List.Icon {...props} icon="pencil-outline" />}
        />
      </View>
      <Divider />
      <List.Item
        title="Primary Color"
        right={(props) => (
          <>
            <Button onPress={showDialog}>Set</Button>
            <Portal>
              <Dialog
                style={{ borderRadius: 20 }}
                visible={visible}
                onDismiss={hideDialog}
              >
                <Dialog.Title>Choose a primary color</Dialog.Title>
                <Dialog.Content>
                  <List.Item
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color="#1ba1f2"
                        icon="format-color-fill"
                      />
                    )}
                    right={(props) => (
                      <Checkbox.Android
                        onPress={() => setPrimaryColor('#1ba1f2')}
                        color="#1ba1f2"
                        status={
                          paperTheme.colors.primary === '#1ba1f2'
                            ? 'checked'
                            : 'unchecked'
                        }
                      />
                    )}
                  />
                  <List.Item
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color="#FB950A"
                        icon="format-color-fill"
                      />
                    )}
                    right={(props) => (
                      <Checkbox.Android
                        onPress={() => setPrimaryColor('#FB950A')}
                        status={
                          paperTheme.colors.primary === '#FB950A'
                            ? 'checked'
                            : 'unchecked'
                        }
                        color="#FB950A"
                      />
                    )}
                  />
                  <List.Item
                    left={(props) => (
                      <List.Icon
                        {...props}
                        color="#FF05C1"
                        icon="format-color-fill"
                      />
                    )}
                    right={(props) => (
                      <Checkbox.Android
                        onPress={() => setPrimaryColor('#FF05C1')}
                        status={
                          paperTheme.colors.primary === '#FF05C1'
                            ? 'checked'
                            : 'unchecked'
                        }
                        color="#FF05C1"
                      />
                    )}
                  />
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>close</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </>
        )}
      />
      <Divider />
      <List.Item
        title="Light Theme"
        right={(props) => (
          <Switch value={theme === 'light'} onValueChange={toggleTheme} />
        )}
      />
      <Divider />
      <List.Item
        title="Notifications"
        right={(props) => (
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        )}
      />
      <Divider />
    </SafeAreaView>
  );
};

export default ProfileScreen;
