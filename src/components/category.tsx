"use client";

import { useRouter } from "next/navigation";

type categoryProps = {
  id: string;
  title: string;
};

export default function Category(props: categoryProps) {
  const router = useRouter();

  return (
    <div className="w-96 bg-accent-content rounded-lg p-3">
      <h2 className="text-neutral-content">{props.title}</h2>
      <div className="form-control">
        <button
          className="btn btn-neutral"
          value={props.id}
          onClick={() =>
            (
              document.getElementById("task-modal") as HTMLDialogElement
            ).showModal()
          }
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
