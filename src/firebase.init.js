// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3qOINuNGGR76vE5t-6ao551_uDzc93uI",
    authDomain: "carpentryz.firebaseapp.com",
    projectId: "carpentryz",
    storageBucket: "carpentryz.appspot.com",
    messagingSenderId: "10141394380",
    appId: "1:10141394380:web:7c805e329e79ef7b292969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth