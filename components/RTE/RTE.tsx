import "./style.css";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "../ui/button";
import { MenuBar } from "./MenuBar";

export default function Tiptap({
  onClick,
  setText,
  initialContent
}: {
  onClick: () => void;
  setText: Dispatch<SetStateAction<string | undefined>>;
  initialContent: string
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent, // Use initialContent as the initial content
    editorProps: {
      attributes: {
        class: "prose prose-sm p-4 sm:prose border-2 border-black lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  // Effect to update editor content when initialContent changes
  useEffect(() => {
    if (editor && initialContent !== editor.getHTML()) {
      editor.commands.setContent(initialContent);
    }
  }, [initialContent, editor]);

  useEffect(() => {
    if (editor) {
      const updateHandler = () => {
        const html = editor.getHTML();
        setText(html);
      };
      editor.on('update', updateHandler);
      return () => {
        editor?.off('update', updateHandler);
      };
    }
  }, [editor, setText]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <Button
        className="max-w-[100px] self-center"
        onClick={() => {
          setText(editor?.getHTML());
          // onClick(); // Uncomment if onClick should be called
          console.log(editor?.getHTML());
        }}
      >
        Submit
      </Button>
    </div>
  );
}