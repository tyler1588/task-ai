import { useRouter } from "next/navigation";
import { useState } from "react";

type CreateTaskFormProps = {
  visible: boolean;
  disableVisibility: () => void;
  categoryID: string;
};

export default function CreateTaskForm(props: CreateTaskFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
      categoryID: props.categoryID,
    };
    const newCategory = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(newCategory);
    setTitle("");
    router.refresh();
    (document.getElementById("task-modal") as HTMLDialogElement).close();
  };

  return (
    <dialog
      id="task-modal"
      className="modal"
      open={props.visible ? true : false}
    >
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={props.disableVisibility}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Add Task</h3>
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={title}
              onChange={(e) => handleTitleChange(e)}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Content</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={content}
              onChange={(e) => handleContentChange(e)}
            />
          </label>
          <button
            className="btn btn-neutral mt-3"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
}
