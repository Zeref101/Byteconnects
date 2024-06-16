"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#2b3853]">
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
