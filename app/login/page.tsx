"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import InputRow from "../_components/InputRow";
import { useState } from "react";
import Button from "../_components/Button";

interface LoginData {
  email: string;
  password: string;
}

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    defaultValues: { email: "test@test.com", password: "test1234" }, // default values set for users to test app
  });

  const [error, setError] = useState("");

  async function onSubmit(data: LoginData) {
    const { email, password } = data;
    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login && login.error) setError(login.error);

    redirect("/account");
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-4xl font-bold text-gray-700">Login</h2>
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputRow>
          <label
            htmlFor="email"
            className="text-md font-semibold text-gray-500"
          >
            Login
          </label>
          <input
            type="email"
            className="text-md h-10 w-96 rounded-md p-2 text-center text-gray-800 shadow-sm outline-none transition-all duration-200 focus:shadow-lg"
            placeholder="jankowalski@mail.com"
            {...register("email", { required: "Email is required." })}
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
            {...register("password", { required: "Password is required." })}
          />
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
        </InputRow>
        {error && <span className="text-sm text-red-600">{error}</span>}
        <div className="flex w-full items-center justify-between">
          <Link
            href="/signup"
            className="underline-offset-3 border-gray-500 text-sm font-semibold text-gray-500 hover:underline"
          >
            I don&apos;t have an account yet
          </Link>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
