"use client";

import { UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Task.ai</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <button
            className="btn btn-neutral"
            onClick={() =>
              (
                document.getElementById("category-modal") as HTMLDialogElement
              ).showModal()
            }
          >
            Add Category
          </button>
        </div>
        <UserButton
          appearance={{
            elements: { avatarBox: { width: "3rem", height: "3rem" } },
          }}
        />
      </div>
    </div>
  );
}
