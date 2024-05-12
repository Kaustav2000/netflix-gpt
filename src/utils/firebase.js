// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAehZGUP-bP5FhcXKY56sG67A1uH0ySJfg",
  authDomain: "netflixgpt-574eb.firebaseapp.com",
  projectId: "netflixgpt-574eb",
  storageBucket: "netflixgpt-574eb.appspot.com",
  messagingSenderId: "397288654020",
  appId: "1:397288654020:web:356d5d2d293a1bb328f591",
  measurementId: "G-3XMXR6PX6L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
