import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: "samer-spotify.firebaseapp.com",
  projectId: "samer-spotify",
  storageBucket: "samer-spotify.appspot.com",
  messagingSenderId: "974955493441",
  appId: "1:974955493441:web:292b61bb3b95bc09d7aec0",
};

initializeApp(config);

const db = getFirestore();
