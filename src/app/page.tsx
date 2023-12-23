import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/tasks");
  }

  return (
    <main className="h-screen bg-gradient-to-b flex justify-center items-center from-cyan-600 to-gray-200">
      <div className="flex flex-col gap-6 items-center">
        <Image src="/logo.png" width={200} height={200} alt="" />
        <p>Welcome to Task AI, a GPT powered task management application.</p>
        <button className="bg-slate-700 text-white hover:bg-gray-400 hover:text-black transition-all rounded-full w-48 p-2">
          <a href="/sign-in">Get started</a>
        </button>
      </div>
    </main>
  );
}
