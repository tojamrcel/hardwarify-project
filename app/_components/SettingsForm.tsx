"use client";

import { useState } from "react";
import { HiPencil } from "react-icons/hi";

function SettingsForm({ email }: { email: string }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChange() {
    setIsEditing(true);
  }

  function handleClose() {
    setIsEditing(false);
  }

  return (
    <>
      <div className="flex gap-2">
        <input
          type="email"
          name="email"
          className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-400 shadow-sm outline-none transition-all duration-200"
          value={email}
          readOnly
        />
      </div>
      <div className="flex gap-2">
        <input
          type="password"
          name="password"
          className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg read-only:focus:shadow-sm"
          value="password"
          readOnly
        />
        {!isEditing && (
          <button
            onClick={handleChange}
            className="transition-color flex items-center justify-center gap-1 rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 duration-300 hover:bg-red-700"
          >
            <HiPencil className="text-xl" />
            Change password
          </button>
        )}
      </div>
      {isEditing && (
        <>
          <div className="flex gap-2">
            <input
              type="password"
              name="confirmpassword"
              className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg read-only:focus:shadow-sm"
              placeholder="Confirm your password"
              readOnly
            />
          </div>
          <button className="transition-color flex w-2/3 items-center justify-center gap-1 rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 duration-300 hover:bg-red-700">
            CHANGE
          </button>
          <button
            onClick={handleClose}
            className="-mt-2 w-2/3 text-gray-600 hover:text-gray-800"
          >
            CLOSE
          </button>
        </>
      )}
    </>
  );
}

export default SettingsForm;
