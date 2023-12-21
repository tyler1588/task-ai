"use client";

import { UserButton } from "@clerk/nextjs";
import { useRef } from "react";

export default function NavBar() {
  const myModal = useRef<HTMLDialogElement>(null);
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <button
            className="btn btn-secondary"
            onClick={() =>
              (
                document.getElementById("my_modal_3") as HTMLDialogElement
              ).showModal()
            }
          >
            Add task
          </button>
        </div>
        <UserButton />
      </div>
    </div>
  );
}
