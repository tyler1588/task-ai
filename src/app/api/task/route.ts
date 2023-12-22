import { auth } from "@clerk/nextjs";
import prisma from "@/lib/prisma/prisma";

export async function DELETE(request: Request) {
  const body = await request.json();

  try {
    const { userId }: { userId: string | null } = auth();

    await prisma.task.delete({
      where: {
        id: body.id,
      },
    });

    return Response.json({ status: 204 });
  } catch (error) {
    return Response.json("error", { status: 400 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const { userId }: { userId: string | null } = auth();

    if (!userId) {
      return Response.json("missing user ID", { status: 400 });
    }

    console.log(body);

    const newTask = await prisma.task.create({
      data: {
        title: body.title,
        content: body.content,
        userId,
        Category: {
          connect: { id: body.categoryID },
        },
      },
    });

    return Response.json(newTask, { status: 201 });
  } catch (error) {
    return Response.json("error", { status: 400 });
  }
}
