// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkgKp_6f8ldMcnFdEkq8TtnHBa44XzrdU",
  authDomain: "livestreaming-301cf.firebaseapp.com",
  projectId: "livestreaming-301cf",
  storageBucket: "livestreaming-301cf.appspot.com",
  messagingSenderId: "780802453053",
  appId: "1:780802453053:web:013733118057aecb334454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
