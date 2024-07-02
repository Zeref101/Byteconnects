"use client";
import Blogcard from "@/components/Blog-Card/Blogcard";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types";
export default function Home() {
  const { user } = useAuth() as AuthContextType;
  console.log(user);
  useEffect(() => {
    if (!user) return;
    axios.get(`/api/blog/${user?.uid}`).then((res) => {
      console.log(res.data);
    });
    axios.get("/api/blog/getPosts").then((res) => {
      console.log(res.data);
    });
  }, [user]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#181A2A]">
      <Navbar />
      <Blogcard />
      <Button
        onClick={() => {
          alert("Woooohooooo");
        }}
      >
        Click here
      </Button>
    </main>
  );
}
