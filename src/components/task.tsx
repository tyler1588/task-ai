"use client";

import { useRouter } from "next/navigation";

type taskProps = {
  id: string;
  title: string;
  content: string;
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
    <div className="card w-96 bg-neutral-content">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.content}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-error"
            id={props.id}
            onClick={(e) => handleDelete(e)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
