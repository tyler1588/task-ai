import { UserButton } from "@clerk/nextjs";

export default async function NavBar() {
  return (
    <div className="shadow py-5">
      <div className="flex items-center justify-between w-11/12 m-auto">
        <h1>Task.ai</h1>
        <UserButton></UserButton>
      </div>
    </div>
  );
}
