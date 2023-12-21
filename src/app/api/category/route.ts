import { auth } from "@clerk/nextjs";
import prisma from "@/lib/prisma/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const { userId }: { userId: string | null } = auth();

    if (!userId) {
      return Response.json("missing user ID", { status: 400 });
    }

    const category: { title: string; userId: string } = {
      title: body.title,
      userId: userId,
    };

    const newCategory = await prisma.category.create({
      data: category,
    });

    return Response.json(newCategory, { status: 201 });
  } catch (error) {
    return Response.json("error", { status: 400 });
  }
}
