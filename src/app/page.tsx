import CreateTaskForm from "@/components/createTaskForm";
import NavBar from "@/components/navbar";
import TaskList from "@/components/tasklist";

export default async function Home() {
  return (
    <main>
      <NavBar />
      <CreateTaskForm />
      <TaskList />
    </main>
  );
}
