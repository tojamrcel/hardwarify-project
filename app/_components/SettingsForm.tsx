"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiPencil } from "react-icons/hi";
import { UpdateProfile } from "../_types/types";

function SettingsForm({ email }: { email: string }) {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfile>();

  function handleChange() {
    setIsEditing(true);
  }

  function handleClose() {
    setIsEditing(false);
  }

  function onSubmit(data: UpdateProfile) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex gap-2">
          <input
            type="email"
            className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-400 shadow-sm outline-none transition-all duration-200"
            value={email}
            readOnly
          />
        </div>
        <div className="flex gap-2">
          <input
            type="password"
            className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg read-only:focus:shadow-sm"
            defaultValue={isEditing ? "" : "password"}
            placeholder="Password"
            readOnly={!isEditing}
            {...register("password", {
              required: "Password is required.",
            })}
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
                className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg read-only:focus:shadow-sm"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password.",
                })}
              />
            </div>
            <button className="transition-color flex w-2/3 items-center justify-center gap-1 rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 duration-300 hover:bg-red-700">
              CHANGE
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="-mt-2 w-2/3 text-gray-600 hover:text-gray-800"
            >
              CLOSE
            </button>
          </>
        )}
      </form>
    </>
  );
}

export default SettingsForm;
