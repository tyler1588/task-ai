"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateCategoryForm() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { title: title };
    const newCategory = await fetch("/api/category", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(newCategory);
    setTitle("");
    router.refresh();
    (document.getElementById("category-modal") as HTMLDialogElement).close();
  };

  return (
    <dialog id="category-modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Add Category</h3>
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={title}
              onChange={(e) => handleTitleChange(e)}
            />
          </label>
          <button
            className="btn btn-neutral mt-3"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
}
