"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateTaskForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { title: title, content: content };
    await fetch("/api/task", { method: "POST", body: JSON.stringify(data) });
    setTitle("");
    setContent("");
    router.refresh();
  };

  return (
    <form className="flex flex-col gap-3 border-2 border-slate-500 w-52 m-auto">
      <label>Title</label>
      <input
        type="text"
        className="border-2"
        value={title}
        onChange={(e) => handleTitleChange(e)}
      ></input>
      <label>Content</label>
      <input
        type="text"
        className="border-2"
        value={content}
        onChange={(e) => handleContentChange(e)}
      ></input>
      <button className="border-2" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </form>
  );
}
