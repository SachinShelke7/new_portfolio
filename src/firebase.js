// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClbm51aY_msy48a76iqis5IGT_X-ep7Lg",
  authDomain: "portfolio-d9c9f.firebaseapp.com",
  projectId: "portfolio-d9c9f",
  storageBucket: "portfolio-d9c9f.appspot.com",
  messagingSenderId: "996072749625",
  appId: "1:996072749625:web:8a702775fa6908d509ebe8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const auth = getAuth(app);
