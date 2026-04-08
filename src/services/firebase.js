import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALo5hnkIE8fQxmk2mDbO5E41IkNwW3NtE",
  authDomain: "my-expense-tracker-2026.firebaseapp.com",
  projectId: "my-expense-tracker-2026",
  storageBucket: "my-expense-tracker-2026.firebasestorage.app",
  messagingSenderId: "699282649750",
  appId: "1:699282649750:web:c7db8c594ef8d6daa148b7",
  measurementId: "G-8VVWKM7QFQ"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);