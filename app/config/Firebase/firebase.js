import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { Alert } from 'react-native';
import firebaseConfig from './firebaseConfig';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Firebase = {
  // auth
  // loginWithEmail: (email, password) => {
  //   firebase
  //     .auth()
  //     .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  //     .then(() => {
  //       return firebase.auth().signInWithEmailAndPassword(email, password);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // },
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  signOut: () => {
    return firebase.auth().signOut();
  },
  checkUserAuth: (user) => {
    return firebase.auth().onAuthStateChanged(user);
  },

  // firestore
  createNewUser: (userData) => {
    return firebase
      .firestore()
      .collection('users')
      .doc(`${userData.uid}`)
      .set(userData);
  },

  getCurrentUser: (uid) => {
    const usersRef = firebase.firestore().collection('users');
  },

  updateProfile: () => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: 'Jane Q. User',
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
      })
      .then(function () {
        alert('success');
      })
      .catch(function (error) {
        alert(error);
      });
  },

  changeEmail: (email, password) => {
    if (email === '' || password === '') {
      return;
    }
    var user = firebase.auth().currentUser;
    var credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    );

    user
      .reauthenticateWithCredential(credential)
      .then(function () {
        user
          .updateEmail(email)
          .then(function () {
            alert('success');
          })
          .catch(function (error) {
            alert(error);
          });
      })
      .catch(function (error) {
        alert(error);
      });
  },
  changePassword: (password, newPassword) => {
    if (password === '' || newPassword === '') {
      return;
    }
    var user = firebase.auth().currentUser;
    var credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    );

    user
      .reauthenticateWithCredential(credential)
      .then(function () {
        user
          .updatePassword(newPassword)
          .then(function () {
            alert('success');
          })
          .catch(function (error) {
            alert(error);
          });
      })
      .catch(function (error) {
        alert(error);
      });
  },

  getUserProfile: () => {
    const user = firebase.auth().currentUser;
    return firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((doc) => console.log(doc));
  },
};

export default Firebase;
