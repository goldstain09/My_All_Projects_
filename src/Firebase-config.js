// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8YNUU2OX6XkG6R4WsFiFgjBemuGTVaS0",
  authDomain: "portfolio-26950.firebaseapp.com",
  projectId: "portfolio-26950",
  storageBucket: "portfolio-26950.appspot.com",
  messagingSenderId: "258929525580",
  appId: "1:258929525580:web:69c1f2aac4650817f745e9",
  measurementId: "G-MCDZC1M6B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export {db};