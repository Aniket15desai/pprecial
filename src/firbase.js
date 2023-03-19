// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrfFdnYZqoaq_9vwFoXcelQnFiFiMco28",
    authDomain: "auth-pprecial-bbd43.firebaseapp.com",
    projectId: "auth-pprecial-bbd43",
    storageBucket: "auth-pprecial-bbd43.appspot.com",
    messagingSenderId: "775926312350",
    appId: "1:775926312350:web:6f1ef08757526bcedb7a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);