import CategoryContainer from "@/components/categoryContainer";
import CreateCategoryForm from "@/components/createCategoryForm";
import NavBar from "@/components/navbar";

export default async function Home() {
  return (
    <main className="h-screen bg-gradient-to-b from-cyan-600 to-gray-200 p-5">
      <NavBar />
      <CategoryContainer />
    </main>
  );
}
