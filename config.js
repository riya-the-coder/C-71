import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBtwGu19otyiuRuyENXJdQE3aepKVrrymI",
    authDomain: "wily-app-87154.firebaseapp.com",
    databaseURL: "https://wily-app-87154.firebaseio.com",
    projectId: "wily-app-87154",
    storageBucket: "wily-app-87154.appspot.com",
    messagingSenderId: "912272325322",
    appId: "1:912272325322:web:b4c0343bde1c289d5d9233"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();