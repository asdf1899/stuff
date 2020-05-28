import { firebase } from "@firebase/app";
import "@firebase/firestore";

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

export const db = firebaseApp.firestore();