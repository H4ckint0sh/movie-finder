import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { useTheme, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase';
import 'firebase/storage';
import Firebase from '../../config/Firebase'

const BottomSheetComp = ({ setImage, bs }) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    bottomSheet: {
      height: 200,
      backgroundColor: theme.colors.surface,
      padding: 16,
      height: 450,
      alignItems: 'center',
    },
    button: {
      width: '90%',
      backgroundColor: theme.colors.primary,
      marginBottom: 10,
      borderRadius: 35,
    },
    header: {
      backgroundColor: theme.colors.surface,
      shadowColor: theme.colors.disabled,
      paddingTop: 20,
      borderTopColor: theme.colors.disabled,
      borderTopWidth: 2,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 60,
      height: 6,
      borderRadius: 4,
      backgroundColor: theme.colors.disabled,
      marginBottom: 10,
    },
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
				} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
		});
		
		// get current users uid
		const {uid} = firebase.auth().currentUser;

    if (!result.cancelled) {
      uploadImage(result.uri, `${uid}`);
    }
  };

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref().child(`images/${imageName}`);
    await ref.put(blob);

    ref
      .getDownloadURL()
      .then(function (url) {
				// setImage(url);
				const update = {photoURL: url};
				Firebase.updateProfile(update);
      })
      .catch(function (error) {
        switch (error.code) {
          case 'storage/object-not-found':
            alert('File doesnt exist');
            break;

          case 'storage/unauthorized':
            alert(' User doesnt have permission to access the object');

            break;

          case 'storage/canceled':
            alert(' User canceled the upload');
            break;

          case 'storage/unknown':
            alert('Unknown error occurred, inspect the server response');
            break;
        }
      });
  };

  const renderContent = () => {
    return (
      <View style={styles.bottomSheet}>
        <Button
          color={`${theme.colors.primary}`}
          mode="contained"
          icon="camera"
          style={styles.button}
          labelStyle={{ color: 'white' }}
        >
          Take a photo
        </Button>
        <Button
          color={`${theme.colors.primary}`}
          icon="image-search"
          mode="contained"
          style={styles.button}
          labelStyle={{ color: 'white' }}
          onPress={() => {pickImage(); bs.current.snapTo(1);}}
        >
          Choose a photo from library
        </Button>
        <Button
          color={`${theme.colors.primary}`}
          mode="contained"
          onPress={() => bs.current.snapTo(1)}
          style={styles.button}
          labelStyle={{ color: 'white' }}
        >
          cancel
        </Button>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
        </View>
      </View>
    );
  };

  return (
    <BottomSheet
      ref={bs}
      snapPoints={[200, 0]}
      initialSnap={1}
      renderContent={renderContent}
      renderHeader={renderHeader}
      enabledGestureInteraction={true}
    />
  );
};

export default BottomSheetComp;
