// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBa1ts18pxLRXECWJgRIqM5ds8WP5a44pE",
    authDomain: "izigive.firebaseapp.com",
    databaseURL: "https://izigive-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "izigive",
    storageBucket: "izigive.appspot.com",
    messagingSenderId: "225209899376",
    appId: "1:225209899376:web:d8115895c81497e5bed7b5",
    measurementId: "G-NF94BBVZ31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
