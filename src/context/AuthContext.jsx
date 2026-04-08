import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("👤 Auth State Changed:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  //Signup
  const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  // 🔥 Create user document in Firestore
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    role: "user",
    createdAt: new Date(),

    monthlySalary: 0,
    initialSavings: 0,
    currentBalance: 0,
    totalSavings: 0,
    financialScore: 0,

    theme: "light",
    currency: "INR",
  });

  return user;
};

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);