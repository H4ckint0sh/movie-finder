import React, { useContext, useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  TextInput,
} from 'react-native';
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
  Headline,
  Subheading,
} from 'react-native-paper';
import BottomSheetComp from '../../components/profile/BottomSheet';
import Firebase, { withFirebaseHOC } from '../../config/Firebase';
import preferencesContext from '../../context/preferencesContext';
import { userContext } from '../../context/userContext';

const ProfileScreen = ({ navigation }) => {
  const paperTheme = useTheme();
  const [user, setUser] = useContext(userContext);
  const { theme, toggleTheme, setPrimaryColor } = useContext(
    preferencesContext
  );
  const bs = useRef(null);

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [newEmail, setNewEmail] = useState('');
  const [showEmailEdit, setShowEmailEdit] = useState(false);
  const [showPasswordEdit, setShowPasswordEdit] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [image, setImage] = useState(null);

  const handleSignOut = () => {
    try {
      Firebase.signOut();
      navigation.navigate('Welcome');
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = () => {
    try {
      Firebase.getUserProfile();
    } catch (error) {
      console.log(error);
    }
  };

  const doChangeEmail = () => {
    Firebase.changeEmail(newEmail, password);
    setNewEmail('');
    setPassword('');
    setShowEmailEdit(false);
  };

  const doChangePassword = () => {
    Firebase.changePassword(password, newPassword);
    setPassword('');
    setNewPassword('');
    setShowPasswordEdit(false);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: paperTheme.colors.surface,
    },
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 100,
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
    textIinput1: {
      height: 40,
      paddingHorizontal: 20,
      marginBottom: 10,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 25,
      color: paperTheme.colors.disabled,
    },
    textIinput2: {
      height: 40,
      paddingHorizontal: 20,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 25,
      color: paperTheme.colors.disabled,
    },
    changeButton: {
      height: 40,
      backgroundColor: paperTheme.colors.disabled,
      marginTop: 10,
      borderRadius: 25,
    },
  });
  return (
    <View style={styles.container}>
      <BottomSheetComp setImage={setImage} bs={bs} />
      <View style={styles.profileContainer}>
        <Avatar.Image
          style={styles.avatar}
          size={80}
          source={{
            uri: image
              ? image
              : 'https://randomuser.me/api/portraits/men/45.jpg',
          }}
        />
        <IconButton
          style={{
            position: 'absolute',
            bottom: 0,
            left: 70,
            backgroundColor: paperTheme.colors.surface,
            borderWidth: 1,
            borderColor: paperTheme.colors.disabled,
          }}
          icon="camera-plus"
          color={paperTheme.colors.disabled}
          size={15}
          onPress={() => bs.current.snapTo(0)}
        />
        <View style={styles.nameContainer}>
          <Title>{user.displayName ? user.displayName : 'No name'}</Title>
          <Caption>@H4ckint0sh</Caption>
        </View>
        <IconButton
          style={{
            alignSelf: 'center',
          }}
          icon="exit-to-app"
          color={paperTheme.colors.notification}
          size={30}
          onPress={handleSignOut}
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
          title={user.email ? user.email : ''}
          left={(props) => <List.Icon {...props} icon="email-outline" />}
          right={(props) => (
            <Button onPress={() => setShowEmailEdit(!showEmailEdit)}>
              {showEmailEdit ? 'cancel' : 'change'}
            </Button>
          )}
        />
        {showEmailEdit && (
          <View style={{ marginHorizontal: 15 }}>
            <TextInput
              style={styles.textIinput1}
              onChangeText={(text) => setNewEmail(text)}
              placeholder="New Email"
              placeholderTextColor={paperTheme.colors.disabled}
              value={newEmail}
              textContentType="emailAddress"
            />
            <TextInput
              style={styles.textIinput2}
              onChangeText={(text) => setPassword(text)}
              placeholder="password"
              placeholderTextColor={paperTheme.colors.disabled}
              value={password}
              textContentType="password"
            />
            <Button
              style={styles.changeButton}
              onPress={doChangeEmail}
              disabled={newEmail === '' || password === ''}
            >
              Change
            </Button>
          </View>
        )}

        {/* <List.Item
          title="0766506640"
          left={(props) => <List.Icon {...props} icon="phone-outline" />}
          right={(props) => <List.Icon {...props} icon="pencil-outline" />}
        /> */}
        <List.Item
          title="********"
          left={(props) => <List.Icon {...props} icon="key-outline" />}
          right={(props) => (
            <Button onPress={() => setShowPasswordEdit(!showPasswordEdit)}>
              {showPasswordEdit ? 'cancel' : 'change'}
            </Button>
          )}
        />
        {showPasswordEdit && (
          <View style={{ marginHorizontal: 15 }}>
            <TextInput
              style={styles.textIinput1}
              onChangeText={(text) => setPassword(text)}
              placeholder="Current Password"
              placeholderTextColor={paperTheme.colors.disabled}
              value={password}
              textContentType="password"
            />
            <TextInput
              style={styles.textIinput2}
              onChangeText={(text) => setNewPassword(text)}
              placeholder="New Password"
              placeholderTextColor={paperTheme.colors.disabled}
              value={newPassword}
              textContentType="newPassword"
            />
            <Button
              style={styles.changeButton}
              onPress={doChangePassword}
              disabled={password === '' || newPassword === ''}
            >
              Change
            </Button>
          </View>
        )}
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
    </View>
  );
};

export default withFirebaseHOC(ProfileScreen);
