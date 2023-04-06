import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCirHT22j5KeffxsncHmTSSKnUJvP9HcOE",
  authDomain: "loginmern-b5d33.firebaseapp.com",
  projectId: "loginmern-b5d33",
  storageBucket: "loginmern-b5d33.appspot.com",
  messagingSenderId: "977795256990",
  appId: "1:977795256990:web:231044f4cc754435d0e18f",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
