import Category from "./category";
import prisma from "@/lib/prisma/prisma";
import { auth } from "@clerk/nextjs";
import AddCategoryBtn from "./addCategoryBtn";
import { redirect } from "next/navigation";

export default async function CategoryContainer() {
  const { userId }: { userId: string | null } = auth();

  if (!userId) {
    redirect("/");
  }
  const allCategories = await prisma.category.findMany({
    where: {
      userId: {
        equals: userId,
      },
    },
    include: {
      tasks: true,
    },
  });

  return (
    <div className="m-auto flex flex-col h-[calc(100vh_-_64px)] gap-3 p-5">
      <AddCategoryBtn />
      <div className="flex overflow-x-scroll h-[calc(100vh_-_64px_-_16px)] gap-3">
        {allCategories.map((category) => (
          <Category
            key={category.id}
            id={category.id}
            title={category.title}
            tasks={category.tasks}
          />
        ))}
      </div>
    </div>
  );
}
