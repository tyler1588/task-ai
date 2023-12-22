"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type CreateCategoryFormProps = {
  visible: boolean;
  disableVisibility: () => void;
};

export default function CreateCategoryForm(props: CreateCategoryFormProps) {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      title: title,
    };
    const newCategory = await fetch("/api/category", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setTitle("");
    router.refresh();
    props.disableVisibility();
  };

  return (
    <dialog
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      open={props.visible ? true : false}
    >
      <div className="h-full w-full flex">
        <div className="w-96 p-5 bg-white m-auto rounded-xl">
          <div className="flex justify-end">
            <button className="" onClick={props.disableVisibility}>
              ✕
            </button>
          </div>
          <h3 className="font-bold text-xl">Add Category</h3>
          <form className="flex flex-col gap-3 mt-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="w-full border p-1 rounded"
                value={title}
                onChange={(e) => handleTitleChange(e)}
              />
            </label>
            <button
              className="bg-slate-500 hover:bg-slate-700 transition-all text-white rounded-xl p-2 w-1/2 m-auto"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
