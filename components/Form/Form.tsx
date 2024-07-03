"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import Modal from "@/components/Modals/Modal";
import { useAuth } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
export default function Form() {
  const { user } = useAuth() as AuthContextType;
  const { toast } = useToast();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>();
  const [image, setImage] = useState<string>();
  useEffect(() => {
    if (image) {
      setIsOpen(false);
    }
  }, [image]);

  async function createBlog() {
    try {
      const res = await axios.post("/api/blog/create-blog", {
        uid: user?.uid,
        text: text,
        image: image,
      });
      toast({ title: String(res.data) });
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <section className="flex flex-col justify-center items-center w-full min-h-screen bg-white gap-28">
      <div className="flex w-full flex-col justify-center items-center gap-6">
        <h1 className="text-7xl font-bold">Create Blog</h1>
        <p className="text-2xl text-gray-500">write down your thoughts</p>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          className="font-bold"
        >
          Upload an image
        </Button>
      </div>
      <div>
        <Image
          className="max-h-[375px] object-cover"
          src="/food.png"
          alt="FOOD"
          width={1280}
          height={375}
        ></Image>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-semibold">Heading</div>
          <p className="text-2xl text-gray-500">
            Subheading to introduce testimonials
          </p>
        </div>
        <Textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="w-full"
          placeholder="Placeholder"
          value={text}
          rows={15}
          cols={150}
        />
      </div>
      <Button onClick={createBlog}>Create</Button>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen((prev) => {
            return !prev;
          });
        }}
        setURL={setImage}
      ></Modal>
    </section>
  );
}
