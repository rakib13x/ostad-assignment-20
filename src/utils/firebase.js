// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "dev-blog-5fa01.firebaseapp.com",
  projectId: "dev-blog-5fa01",
  storageBucket: "dev-blog-5fa01.appspot.com",
  messagingSenderId: "522094697585",
  appId: "1:522094697585:web:f77301ce996e8448504fd0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
