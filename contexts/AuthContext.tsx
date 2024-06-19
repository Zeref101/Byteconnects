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
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
const AuthContext = createContext({});

async function verifyUser(user: User, password?: string, username?: string) {
  const docRef = doc(db, `users/${user.email}`);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(docRef, {
      email: user.email,
      password: password ?? "",
      photoURL: user.photoURL,
      username: user.displayName ?? username,
      uid: user.uid,
    });
  } else {
    throw new Error("User already exists");
  }
}

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const signInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
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

  const emailSignUp = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // setUser(user);
      // console.log(user);
      await verifyUser(user, password, username);
      toast({
        title: "Account created successfully!",
      });
      router.push("/sign-in");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  const emailSignIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      const docRef = doc(db, `users/${user.email}`);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        throw new Error("User does not exist");
      }
      console.log(user);
      toast({
        title: "Signed In successfully!",
      });
      router.push("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.message,
      });
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
