// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyNEqUqda_RtLTKFE9swpaR9Saf6I3SiE",
  authDomain: "flixxit-845df.firebaseapp.com",
  projectId: "flixxit-845df",
  storageBucket: "flixxit-845df.appspot.com",
  messagingSenderId: "726311027161",
  appId: "1:726311027161:web:de614dcd540b0ab05e59c8",
  measurementId: "G-Q2X2GMCXM2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
