import firebase from 'firebase';

// Initialize Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyByj3-t5mEJINBAue4fEu8gtxtSSZ2B-9s",
    authDomain: "my-workout-report.firebaseapp.com",
    databaseURL: "https://my-workout-report.firebaseio.com",
    projectId: "my-workout-report",
    storageBucket: "my-workout-report.appspot.com",
    messagingSenderId: "848486781789",
    appId: "1:848486781789:web:599f219a43be268dc74eb4",
    measurementId: "G-M0XN3B55VW"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore()

  export default database;