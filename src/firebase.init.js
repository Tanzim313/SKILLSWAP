// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdAKb9I-yNi017AxY9nQD7ZmI4iG3XT0A",
  authDomain: "skillswap-7287e.firebaseapp.com",
  projectId: "skillswap-7287e",
  storageBucket: "skillswap-7287e.firebasestorage.app",
  messagingSenderId: "1002528089053",
  appId: "1:1002528089053:web:849494e6c7a0ac21e1cc34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);