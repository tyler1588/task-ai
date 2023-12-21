import Task from "./task";
import prisma from "@/lib/prisma/prisma";

export default async function TaskList() {
  const allTasks = await prisma.task.findMany({});
  return (
    <div className="py-5 flex flex-wrap gap-5 justify-center w-10/12 m-auto">
      {allTasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          content={task.content ? task.content : ""}
        />
      ))}
    </div>
  );
}
