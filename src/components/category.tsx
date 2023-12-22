"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CreateTaskForm from "./createTaskForm";
import Task from "./task";

type TaskObject = {
  id: string;
  title: string;
  content: string | null;
  userId: string;
};

type categoryProps = {
  id: string;
  title: string;
  tasks: TaskObject[];
};

export default function Category(props: categoryProps) {
  const router = useRouter();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = (e.target as HTMLElement).id;
    await fetch("/api/category", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    });
    router.refresh();
  };

  const [taskFormVisible, setTaskFormVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState({
    id: "",
    title: "",
    content: "",
    userId: "",
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSelectedTask({ ...selectedTask, title: e.target.value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSelectedTask({ ...selectedTask, content: e.target.value });
  };

  const handleSelectedTask = (
    id: string,
    title: string,
    content: string,
    userId: string
  ) => {
    setSelectedTask({ id: id, title: title, content: content, userId: userId });
    setTaskFormVisible(true);
  };

  const enableVisibility = () => {
    setSelectedTask({ id: "", title: "", content: "", userId: "" });
    setTaskFormVisible(true);
  };

  const disableVisibility = () => {
    setTaskFormVisible(false);
  };

  return (
    <>
      <CreateTaskForm
        visible={taskFormVisible}
        disableVisibility={disableVisibility}
        categoryID={props.id}
        selectedTask={selectedTask}
        handleTitleChange={handleTitleChange}
        handleContentChange={handleContentChange}
      />
      <div className="w-72 rounded-xl cursor-pointer bg-slate-200 shadow bg-opacity-50 h-min max-h-full overflow-y-scroll flex-none p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{props.title}</h2>
          <button
            className="w-5 h-5 bg-red-400 flex justify-center items-center text-white shadow rounded-full "
            id={props.id}
            onClick={(e) => handleDelete(e)}
          >
            x
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {props.tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              title={task.title}
              content={task.content}
              userId={task.userId}
              handleSelectedTask={handleSelectedTask}
            />
          ))}
        </div>
        <div className="flex justify-end mt-3">
          <button
            className="w-5 h-5 bg-green-400 flex justify-center items-center text-white shadow rounded-full"
            id={props.id}
            onClick={enableVisibility}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
