// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMqQeGvEQLLCCMtT3dP2_bvFGef-2IuZU",
  authDomain: "hala-rijik-auth.firebaseapp.com",
  projectId: "hala-rijik-auth",
  storageBucket: "hala-rijik-auth.appspot.com",
  messagingSenderId: "994958984946",
  appId: "1:994958984946:web:65d9478d99e3e246a9b26b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
