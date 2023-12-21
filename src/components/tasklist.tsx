import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function TaskList() {
  const allTasks = await prisma.task.findMany({});
  return (
    <div className="py-5 grid grid-cols-3 gap-5 w-10/12 m-auto">
      {allTasks.map((task) => (
        <div key={task.id} className="shadow">
          <h1 className="text-lg">Title: {task.title}</h1>
          <p>Content: {task.content}</p>
        </div>
      ))}
    </div>
  );
}
