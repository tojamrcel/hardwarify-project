"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import InputRow from "../_components/InputRow";
import { signUpAction } from "../_lib/actions";
import { SignUpFormValues } from "../_types/types";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  async function onSubmit(data: SignUpFormValues) {
    const signup = await signUpAction(data);
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-4xl font-bold text-gray-700">Create new account</h2>
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputRow>
          <label
            htmlFor="email"
            className="text-md font-semibold text-gray-500"
          >
            Email
          </label>
          <input
            type="email"
            className="text-md h-10 w-96 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
            placeholder="jankowalski@mail.com"
            {...register("email", { required: "This field is required." })}
          />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email.message}</span>
          )}
        </InputRow>
        <InputRow>
          <label
            htmlFor="password"
            className="text-md font-semibold text-gray-500"
          >
            Password
          </label>
          <input
            type="password"
            className="text-md h-10 w-96 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
            {...register("password", { required: "This field is required" })}
          />
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
        </InputRow>
        <InputRow>
          <label
            htmlFor="confirmpassword"
            className="text-md font-semibold text-gray-500"
          >
            Confirm password
          </label>
          <input
            type="password"
            className="text-md h-10 w-96 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
            {...register("confirmPassword", {
              required: "This field is required",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-600">
              {errors.confirmPassword.message}
            </span>
          )}
        </InputRow>
        <div className="flex w-full items-center justify-between">
          <Link
            href="/login"
            className="underline-offset-3 border-gray-500 text-sm font-semibold text-gray-500 hover:underline"
          >
            I already have an account
          </Link>

          <button className="ml-auto mt-2 rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 transition-all duration-300 hover:bg-red-700">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
