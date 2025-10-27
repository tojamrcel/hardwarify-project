"use client";
import { IoLogOutOutline } from "react-icons/io5";
import { signOutAction } from "../_lib/actions";
import { FormEvent } from "react";

function SignOutButton() {
  async function handleSignOut(e: FormEvent) {
    e.preventDefault();
    await signOutAction();
  }

  return (
    <form onSubmit={handleSignOut}>
      <button className="flex w-full items-center justify-center gap-3 rounded-sm px-4 py-3 text-center text-xl text-red-600 transition-all duration-150 hover:bg-gray-200 dark:text-red-700 dark:hover:bg-gray-800 md:justify-start md:text-left">
        <IoLogOutOutline />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
