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
      <button className="justify-left flex w-full items-center gap-2 rounded-lg p-2 text-red-600 hover:bg-gray-300">
        <IoLogOutOutline />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
