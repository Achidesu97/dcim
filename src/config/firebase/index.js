import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAqx9GKPvgk2h2ZTynjGpvaj4k99w7Okgo",
    authDomain: "dcim-b3604.firebaseapp.com",
    projectId: "dcim-b3604",
    storageBucket: "dcim-b3604.appspot.com",
    messagingSenderId: "233455601501",
    appId: "1:233455601501:web:51a994b87ab73c21250ab4",
    measurementId: "G-QPHKXN11EF"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const database = firebase.database();
export default firebase;