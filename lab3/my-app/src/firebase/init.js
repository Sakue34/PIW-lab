// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZr2y5MqRNdK2QH2ta43s-oLR9on8_XLk",
  authDomain: "piwo-lab.firebaseapp.com",
  projectId: "piwo-lab",
  storageBucket: "piwo-lab.appspot.com",
  messagingSenderId: "557374457410",
  appId: "1:557374457410:web:67f536f0a5b8e12a10cfdb",
  measurementId: "G-L7PSNB92H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);