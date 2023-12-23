import { UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <>
      <div className="bg-slate-100 bg-opacity-70 shadow flex justify-between items-center p-3 h-16">
        <h1 className="text-xl font-bold">Taskr</h1>
        <div className="flex gap-2 items-center">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: { width: "3rem", height: "3rem" } },
            }}
          />
        </div>
      </div>
    </>
  );
}
