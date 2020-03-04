import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyApz8QVvUfHV0E9m_yESpyzHzZw4Hl8B3g",
    authDomain: "find-active.firebaseapp.com",
    databaseURL: "https://find-active.firebaseio.com",
    projectId: "find-active",
    storageBucket: "find-active.appspot.com",
    messagingSenderId: "592781164896",
    appId: "1:592781164896:web:3ec88b5e28cf0a9f935e05"
  };



firebase.initializeApp(firebaseConfig);

const database = firebase.database()

// database.ref('clubs').push({
//     name: "Studio Joga Park",
//     location: "Gdańsk, pomorskie",
//     type: "yoga",
//     photo: 'https://static1.s-trojmiasto.pl/zdj/c/n/1/1448/1200x800/1448636.jpg'
// }) 

export default firebase