
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth, GithubAuthProvider , GoogleAuthProvider , signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVaGKMRRDGu0rjjXy4q889ke2mP5X_JiU",
  authDomain: "my-e-commerce-5256f.firebaseapp.com",
  projectId: "my-e-commerce-5256f",
  storageBucket: "my-e-commerce-5256f.firebasestorage.app",
  messagingSenderId: "1011859769967",
  appId: "1:1011859769967:web:e5cb9292f8a0b714b91b9a",
  measurementId: "G-3VXBSMGJSC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app , GithubAuthProvider , auth , signInWithPopup , GoogleAuthProvider , db};