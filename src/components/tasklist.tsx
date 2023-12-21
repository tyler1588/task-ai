import Task from "./task";
import prisma from "@/lib/prisma/prisma";

export default async function TaskList() {
  const allTasks = await prisma.task.findMany({});

  return (
    <div className="p-3 flex flex-col gap-3 w-min justify-center m-auto bg-accent-content mt-5 rounded-lg">
      <h1 className="text-neutral-content">To Do</h1>
      {allTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          content={task.content ? task.content : ""}
        />
      ))}
    </div>
  );
}
