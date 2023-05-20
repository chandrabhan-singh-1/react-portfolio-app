import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2Pf6Zc6xA14fnozb2uMWC8TeMkgOWAv4",
  authDomain: "chandrabhan-portfolio.firebaseapp.com",
  projectId: "chandrabhan-portfolio",
  storageBucket: "chandrabhan-portfolio.appspot.com",
  messagingSenderId: "342494869082",
  appId: "1:342494869082:web:04fd0fa8f3f26425620a63",
  measurementId: "G-3SZKLTPH31",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
