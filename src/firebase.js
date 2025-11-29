import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAI, getGenerativeModel } from "firebase/ai";

// Your web app's Firebase configuration
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

// Initialize AI Service
const ai = getAI(app);

// Initialize the generative model
const model = getGenerativeModel(ai, { model: "gemini-flash-lite-latest" });

export { app, analytics, model };
