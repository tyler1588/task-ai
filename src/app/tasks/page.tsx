import CategoryContainer from "@/components/categoryContainer";
import NavBar from "@/components/navbar";

export default async function Home() {
  return (
    <main className="h-screen bg-gradient-to-b from-cyan-600 to-gray-200">
      <NavBar />
      <CategoryContainer />
    </main>
  );
}
