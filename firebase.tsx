// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg3uF4MZwaz_0pNrQZIRKcA1KVzAdlGyI",
  authDomain: "byteconnects.firebaseapp.com",
  projectId: "byteconnects",
  storageBucket: "byteconnects.appspot.com",
  messagingSenderId: "88863885057",
  appId: "1:88863885057:web:49ade0fca82e1c1ab97d00",
  measurementId: "G-HK034B2E6N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
