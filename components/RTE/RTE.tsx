import "./styles.scss";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { MenuBar } from "./MenuBar";
export default function Tiptap({
  onClick,
  setText,
}: {
  onClick: () => void;
  setText: Dispatch<SetStateAction<string | undefined>>;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "Hello World",
    editorProps: {
      attributes: {
        // spellcheck: "false",
        class:
          "prose prose-sm p-4 sm:prose border-2 border-black lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <Button
        className="max-w-[100px] self-center"
        onClick={() => {
          setText(editor?.getHTML());
          // onClick();
          console.log(editor?.getHTML());
        }}
      >
        Submit
      </Button>
    </div>
  );
}
