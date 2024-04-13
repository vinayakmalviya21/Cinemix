import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "cinemix-6b643.firebaseapp.com",
  projectId: "cinemix-6b643",
  storageBucket: "cinemix-6b643.appspot.com",
  messagingSenderId: "435771400025",
  appId: "1:435771400025:web:af4f1cb85a67208acef648"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;