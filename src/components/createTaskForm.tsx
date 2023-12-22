import { useRouter } from "next/navigation";

type CreateTaskFormProps = {
  visible: boolean;
  disableVisibility: () => void;
  categoryID: string;
  selectedTask: { id: string; title: string; content: string; userId: string };
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CreateTaskForm(props: CreateTaskFormProps) {
  const router = useRouter();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (props.selectedTask.id === "") {
      const data = {
        title: props.selectedTask.title,
        content: props.selectedTask.content,
        categoryID: props.categoryID,
      };

      const response = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) throw Error("Status code: " + response.status);
    } else {
      const data = {
        id: props.selectedTask.id,
        title: props.selectedTask.title,
        content: props.selectedTask.content,
        userId: props.selectedTask.userId,
      };
      const response = await fetch("/api/task", {
        method: "PUT",
        body: JSON.stringify(data),
      });
      if (!response.ok) throw Error("Status code: " + response.status);
    }
    router.refresh();
    props.disableVisibility();
  };

  return (
    <dialog
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      open={props.visible ? true : false}
    >
      <div className="h-full w-full flex">
        <div className="w-96 p-5 bg-white m-auto rounded-xl">
          <div className="flex justify-end">
            <button className="" onClick={props.disableVisibility}>
              ✕
            </button>
          </div>
          <h3 className="font-bold text-xl">
            {props.selectedTask.id ? "Update Task" : "Add Task"}
          </h3>
          <form className="flex flex-col gap-3 mt-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="w-full border p-1 rounded"
                value={props.selectedTask.title}
                onChange={(e) => props.handleTitleChange(e)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Content</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="w-full border p-1 rounded"
                value={props.selectedTask.content}
                onChange={(e) => props.handleContentChange(e)}
              />
            </label>
            <button
              className="bg-slate-500 hover:bg-slate-700 transition-all text-white rounded-xl p-2 w-1/2 m-auto"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
