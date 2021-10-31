import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC0V6GUZni8Uy3yYD7kuF6LwAQatu0cIPs",
  authDomain: "simple-notes-firebase-45a37.firebaseapp.com",
  databaseURL: "https://simple-notes-firebase-45a37-default-rtdb.firebaseio.com",
  projectId: "simple-notes-firebase-45a37",
  storageBucket: "simple-notes-firebase-45a37.appspot.com",
  messagingSenderId: "167132697845",
  appId: "1:167132697845:web:858dd1afa3af785240e1bc",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();

  export default firebase;