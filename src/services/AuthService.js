import firebase from "../firebase/firebase";

export const googleLoginRedirect = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = "pl";
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      const user = result.user;
      const database = firebase.database();

      database.ref(`/users/${user.uid}/name`).set(user.displayName);
      database.ref(`/users/${user.uid}/email`).set(user.email);
    });
};

