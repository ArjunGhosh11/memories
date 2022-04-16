// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMVMSnRCJFfmwreRR-DUpCwB9jS2uyulg",
    authDomain: "assignment-10-f82c0.firebaseapp.com",
    projectId: "assignment-10-f82c0",
    storageBucket: "assignment-10-f82c0.appspot.com",
    messagingSenderId: "287374098904",
    appId: "1:287374098904:web:931d4cde79fea601a7b2ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;