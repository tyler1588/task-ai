import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: Request) {
  const tasks = await prisma.task.findMany();
  return Response.json({ tasks });
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const { userId }: { userId: string | null } = auth();

    if (!userId) {
      return Response.json("missing user ID", { status: 400 });
    }

    const task: { title: string; content: string; userId: string } = {
      title: body.title,
      content: body.content,
      userId: userId,
    };

    const newTask = await prisma.task.create({
      data: task,
    });

    return Response.json(newTask, { status: 201 });
  } catch (error) {
    return Response.json("error", { status: 400 });
  }
}