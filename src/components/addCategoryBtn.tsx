"use client";

import CreateCategoryForm from "./createCategoryForm";
import { useState } from "react";

export default function AddCategoryBtn() {
  const [categoryFormVisible, setCategoryFormVisible] = useState(false);

  const disableVisibility = () => {
    setCategoryFormVisible(false);
  };

  return (
    <>
      <CreateCategoryForm
        visible={categoryFormVisible}
        disableVisibility={disableVisibility}
      />
      <button
        className="flex gap-1 font-bold items-center shadow bg-opacity-50 bg-gray-200 hover:bg-gray-400 transition-all p-2 rounded-xl w-48 h-10"
        onClick={() => setCategoryFormVisible(true)}
      >
        <div className="w-5 h-5 bg-green-400 flex justify-center items-center text-white shadow rounded-full">
          +
        </div>
        New Category
      </button>
    </>
  );
}
