// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ECzLyXamfuu8SAGdCmU1DANjLowQDAE",
  authDomain: "chatapp-4ce06.firebaseapp.com",
  projectId: "chatapp-4ce06",
  storageBucket: "chatapp-4ce06.appspot.com",
  messagingSenderId: "86475822454",
  appId: "1:86475822454:web:c2aa38b4b66b3b0f885657",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)