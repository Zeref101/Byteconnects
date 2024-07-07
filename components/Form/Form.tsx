"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";
import Modal from "@/components/Modals/Modal";
import { useAuth } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import Tiptap from "../RTE/RTE";
import DOMPurify from 'dompurify';

export default function Form() {
  const { user } = useAuth() as AuthContextType;
  const { toast } = useToast();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string | undefined>("");
  const [image, setImage] = useState<string>();
  const [previewMode, setPreviewMode] = useState<boolean>(false);

  React.useEffect(() => {
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
      toast({
        title: "Error",
        description: "Error creating blog",
      });
    }
  }
  const createMarkup = (htmlContent: string | undefined) => {
    console.log(htmlContent)
    if (htmlContent)
      return { __html: DOMPurify.sanitize(htmlContent) };
  };


  return (
    <section className="flex flex-col justify-center items-center w-full ">
      <div className="flex w-full flex-col justify-center items-center gap-6 text-white">
        <h1 className="text-7xl font-bold">Create Blog</h1>
        <p className="text-2xl ">write down your thoughts</p>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          className="font-bold"
        >
          Upload an image
        </Button>
        <Button
          onClick={() => setPreviewMode(!previewMode)}
          className="font-bold"
        >
          {previewMode ? "Edit" : "Preview"}
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-6">
          {previewMode ? (
            <div className="text-white tiptap">
              {/* Use createMarkup function to sanitize and render the text */}
              <div dangerouslySetInnerHTML={createMarkup(text)} />
            </div>
          ) : (
            <Tiptap setText={setText} onClick={createBlog} initialContent={text ? text : ""} />
          )}
        </div>
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