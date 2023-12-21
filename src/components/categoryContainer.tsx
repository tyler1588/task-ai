import { useState } from "react";
import Category from "./category";
import Task from "./task";
import prisma from "@/lib/prisma/prisma";

export default async function CategoryContainer() {
  const allCategories = await prisma.category.findMany({});

  return (
    <div className="p-5  bg-neutral-content  w-11/12 h-5/6 m-auto mt-5 rounded-lg">
      <h1>Categories</h1>
      <div className="flex gap-3 mt-3">
        {allCategories.map((category) => (
          <Category key={category.id} id={category.id} title={category.title} />
        ))}
      </div>
    </div>
  );
}
