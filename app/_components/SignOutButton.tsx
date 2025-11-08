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
      <button className="flex w-full items-center justify-center gap-3 rounded-sm px-3 py-3 text-center text-xl text-red-600 transition-all duration-150 hover:bg-gray-200 dark:text-red-700 dark:hover:bg-gray-800 sm:px-4 sm:py-4 md:justify-start md:py-3 md:text-left">
        <span className="text-3xl sm:text-4xl md:text-2xl">
          <IoLogOutOutline />
        </span>
        <span className="hidden md:block">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
