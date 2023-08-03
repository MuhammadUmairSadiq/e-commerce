import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq-yMZVbAdUgSKEhIQ55mjuVC7EftgvS4",
  authDomain: "e-commerce-39dec.firebaseapp.com",
  projectId: "e-commerce-39dec",
  storageBucket: "e-commerce-39dec.appspot.com",
  messagingSenderId: "275246600034",
  appId: "1:275246600034:web:f04e4abb83755dcdfd263b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();