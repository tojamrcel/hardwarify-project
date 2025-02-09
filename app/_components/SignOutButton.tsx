"use client";
import { signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";

function SignOutButton() {
  async function handleSignOut() {
    await signOut();
  }

  return (
    <button
      className="justify-left flex items-center gap-2 rounded-lg p-2 text-red-600 hover:bg-gray-300"
      onClick={handleSignOut}
    >
      <IoLogOutOutline />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
