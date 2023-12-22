"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CreateTaskForm from "./createTaskForm";

type categoryProps = {
  id: string;
  title: string;
};

export default function Category(props: categoryProps) {
  const router = useRouter();

  const [taskFormVisible, setTaskFormVisible] = useState(false);

  const disableVisibility = () => {
    setTaskFormVisible(false);
  };

  return (
    <>
      <CreateTaskForm
        visible={taskFormVisible}
        disableVisibility={disableVisibility}
        categoryID={props.id}
      />
      <div className="w-96 bg-accent-content rounded-lg p-3">
        <h2 className="text-neutral-content">{props.title}</h2>

        <div className="form-control">
          <button
            className="btn btn-neutral"
            onClick={() => setTaskFormVisible(true)}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}
