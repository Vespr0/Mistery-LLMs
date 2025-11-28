// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBknQfT-JUtw7pjF01o6d0D-U7hgSh3P4E",
  authDomain: "augmented-audio-438906-u9.firebaseapp.com",
  projectId: "augmented-audio-438906-u9",
  storageBucket: "augmented-audio-438906-u9.firebasestorage.app",
  messagingSenderId: "756141661249",
  appId: "1:756141661249:web:a9d204b8968697beeabac0",
  measurementId: "G-S6NLB1DL8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);