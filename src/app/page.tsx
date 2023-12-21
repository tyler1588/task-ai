import CategoryContainer from "@/components/categoryContainer";
import CreateCategoryForm from "@/components/createCategoryForm";
import CreateTaskForm from "@/components/createTaskForm";
import NavBar from "@/components/navbar";
import TaskList from "@/components/tasklist";

export default async function Home() {
  return (
    <main className="h-screen">
      <NavBar />
      <CreateCategoryForm />
      <CategoryContainer />
      <CreateTaskForm />
    </main>
  );
}
