import React from "react";
import Form from "@/components/Form/Form";
import Navbar from "@/components/Navbar/Navbar";
import HorizontalLine from "@/components/horizontal-line/HorizontalLine";
export default function CreateBlog() {
  return (
    <div className="flex flex-col gap-36 px-12 min-h-screen min-w-screen py-12">
      <Navbar />
      <Form></Form>
    </div>
  );
}
