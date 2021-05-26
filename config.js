import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBT7xddpMauy_3n2x_OLBPwPrHud5ZRQ4Q",
    authDomain: "project-71-6e5f6.firebaseapp.com",
    projectId: "project-71-6e5f6",
    storageBucket: "project-71-6e5f6.appspot.com",
    messagingSenderId: "494314477742",
    appId: "1:494314477742:web:69638353c9228ac8de353f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();