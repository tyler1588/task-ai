"use client";

import { useRouter } from "next/navigation";

type taskProps = {
  id: string;
  title: string;
  content: string | null;
};

export default function Task(props: taskProps) {
  const router = useRouter();
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = (e.target as HTMLElement).id;
    await fetch("/api/task", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    });
    router.refresh();
  };

  return (
    <div className="card bg-opacity-70 cursor-pointer hover:bg-slate-300 transition-all bg-slate-100 rounded w-full flex-none flex justify-between p-2">
      <h2 className="card-title">{props.title}</h2>
      <button
        className="w-5 h-5 bg-red-400 flex justify-center items-center text-white shadow rounded-full "
        id={props.id}
        onClick={(e) => handleDelete(e)}
      >
        x
      </button>
    </div>
  );
}
