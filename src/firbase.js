// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: `${process.env.APP_KEY}`,
    // authDomain: `${process.env.AUTH_DOMAIN}`,
    // projectId: `${process.env.PROJECT_ID}`,
    // storageBucket: `${process.env.STORAGE_BUCKET}`,
    // messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
    // appId: `${process.env.APP_ID}`
    apiKey: "AIzaSyAIy53B-DzM3GPWDhOyHGLC4wVUtYm50hQ",
    authDomain: "auth-apprecial-cba80.firebaseapp.com",
    projectId: "auth-apprecial-cba80",
    storageBucket: "auth-apprecial-cba80.appspot.com",
    messagingSenderId: "375234510940",
    appId: "1:375234510940:web:78b2e6f2c6d43f9a9e2699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);