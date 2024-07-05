export const MenuBar = ({ editor }: any) => {
    if (!editor) {
      return null;
    }
  
    return (
      <div className="control-group">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("bold") ? "is-active border-2 border-black" : ""
            }`}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("italic") ? "is-active border-2 border-black" : ""
            }`}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`bg-gray-300  rounded-md px-2 py-1 ${
              editor.isActive("strike") ? "is-active border-2 border-black" : ""
            }`}
          >
            Strike
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("code") ? "is-active border-2 border-black" : ""
            }`}
          >
            Code
          </button>
          <button
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("clearMarks")
                ? "is-active border-2 border-black"
                : ""
            }`}
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
          >
            Clear marks
          </button>
          <button
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("clearNodes")
                ? "is-active border-2 border-black"
                : ""
            }`}
            onClick={() => editor.chain().focus().clearNodes().run()}
          >
            Clear nodes
          </button>
          <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("paragraph")
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            Paragraph
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("heading", { level: 1 })
                ? "is-active is-active border-2 border-black"
                : ""
            }`}
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("heading", { level: 2 })
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            H2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("heading", { level: 3 })
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            H3
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("heading", { level: 4 })
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            H4
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("heading", { level: 5 })
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            H5
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("heading", { level: 6 })
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            H6
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("bulletList")
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            Bullet list
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("orderedList")
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            Ordered list
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("codeBlock")
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            Code block
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("blockquote")
                ? "is-active border-2 border-black"
                : ""
            }`}
          >
            Blockquote
          </button>
          <button
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("horizontalRule")
                ? "is-active border-2 border-black"
                : ""
            }`}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            Horizontal rule
          </button>
          <button
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("hardBReak")
                ? "is-active border-2 border-black"
                : ""
            }`}
            onClick={() => editor.chain().focus().setHardBreak().run()}
          >
            Hard break
          </button>
          <button
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("undo") ? "is-active border-2 border-black" : ""
            }`}
            onClick={() => editor.chain().focus().undo().run()}
          >
            Undo
          </button>
          <button
            className={`bg-gray-300 rounded-md px-2 py-1 ${
              editor.isActive("redo") ? "is-active border-2 border-black" : ""
            }`}
            onClick={() => editor.chain().focus().redo().run()}
          >
            Redo
          </button>
        </div>
      </div>
    );
  };
  