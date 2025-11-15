"use client";

import InputRow from "./InputRow";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { Profile } from "../_types/types";
import { useState, useTransition } from "react";
import { updateProfileAction } from "../_lib/actions";

function SettingsForm({ profile }: { profile: Profile }) {
  const { email, firstName, lastName } = profile;
  const { register, handleSubmit } = useForm<{
    first_name: string | undefined;
    last_name: string | undefined;
  }>();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(data: {
    first_name: string | undefined;
    last_name: string | undefined;
  }) {
    const { first_name, last_name } = data;

    if (typeof first_name === "string" && typeof last_name === "string")
      startTransition(async () => {
        try {
          await updateProfileAction({ first_name, last_name });
        } catch (err) {
          if (err instanceof Error && err.message)
            setError("Profile could not be updated. Try again later.");
        }
      });
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <InputRow>
        <label className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          E-mail
        </label>
        <input
          disabled
          defaultValue={email}
          className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:shadow-md focus:dark:border-red-800 dark:disabled:opacity-60"
        />
      </InputRow>
      <InputRow>
        <label className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          First name
        </label>
        <input
          className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
          {...register("first_name", {
            required: false,
          })}
          defaultValue={firstName}
        />
      </InputRow>
      <InputRow>
        <label className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          Last name
        </label>
        <input
          className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
          {...register("last_name", {
            required: false,
          })}
          defaultValue={lastName}
        />
      </InputRow>
      <div className="flex w-full items-center justify-end gap-4">
        {error && (
          <span className="text-red-600 dark:text-red-700">
            Profile could not be updated
          </span>
        )}
        <Button type="primary" disabled={isPending}>
          Save
        </Button>
      </div>
    </form>
  );
}

export default SettingsForm;
