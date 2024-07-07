import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";
export default function Modal({ open, onClose, setURL }) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  function handleFileChange(e) {
    setImage(e.target.files[0]);
    // console.log(e.target.files[0]);
  }
  function handleUpload() {
    if (!image) return;
    console.log(image.name);
    const storageRef = ref(storage, "imageUploads/" + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress(() => {
          return (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        });
        // console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setURL(downloadURL);
        });
      }
    );
  }
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle className="text-white">Enter the image</DialogTitle>
        <Input
          onChange={handleFileChange}
          className="m-10 bg-white rounded-md"
          type="file"
        ></Input>
        <Button onClick={handleUpload} className="bg-white rounded-md">
          Upload
        </Button>
        {progress > 0 && (
          <div>
            <DialogDescription>{Math.ceil(progress)}%</DialogDescription>
            <Progress
              value={progress}
              className="w-[60%] bg-white p-3 text-black"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
