import { firebase } from "@firebase/app";
import "@firebase/firestore";
import 'firebase/storage'; 

 var firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE,
    projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDER,
    appId: process.env.VUE_APP_FIREBASE_APPID
  };
  // Initialize Firebase
  let firebaseApp = firebase.initializeApp(firebaseConfig);
  const storageRef = firebase.storage().ref();
  const db = firebaseApp.firestore()
export {db, storageRef};