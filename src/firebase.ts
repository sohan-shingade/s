import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA49dWoGlJ4aqSJpleQQ4guzOdcetNN7g",
  authDomain: "superscout-test.firebaseapp.com",
  projectId: "superscout-test",
  storageBucket: "superscout-test.appspot.com",
  messagingSenderId: "924347511654",
  appId: "1:924347511654:web:16639735aa246b2e42cea7"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();