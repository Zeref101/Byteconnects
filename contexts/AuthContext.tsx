"use client";

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { app, auth, db } from "@/firebase";
const AuthContext = createContext({});

async function verifyUser(user: User) {
  const docRef = doc(db, `users/${user.uid}`);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(docRef, {
      email: user.email,
      password: "",
      photoURL: user.photoURL,
      username: user.displayName,
      uid: user.uid,
    });
  }
}

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const { user } = await signInWithPopup(auth, provider);
      setUser(user);
      verifyUser(user);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  const logout = async () => {
    setLoading(true);
    await signOut(auth);
    setLoading(false);
  };

  const emailSignUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(user);
      console.log(user);
      verifyUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const emailSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signInWithGoogle,
        logout,
        emailSignUp,
        emailSignIn,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
