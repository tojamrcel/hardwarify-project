"use client";

import InputRow from "./InputRow";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { Profile } from "../_types/types";

function SettingsForm({ profile }: { profile: Profile }) {
  const { email, firstName, lastName } = profile;
  const { register, handleSubmit } = useForm<{
    first_name: string | undefined;
    last_name: string | undefined;
  }>();

  async function onSubmit(data: {
    first_name: string | undefined;
    last_name: string | undefined;
  }) {
    console.log(data);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <InputRow>
        <label className="text-lg font-semibold text-gray-700">E-mail</label>
        <input
          disabled
          defaultValue={email}
          className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-[#0e131f] dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
        />
      </InputRow>
      <InputRow>
        <label className="text-lg font-semibold text-gray-700">
          First name
        </label>
        <input
          className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-[#0e131f] dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
          {...register("first_name", {
            required: false,
          })}
          defaultValue={firstName}
        />
      </InputRow>
      <InputRow>
        <label className="text-lg font-semibold text-gray-700">Last name</label>
        <input
          className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-[#0e131f] dark:text-gray-300 dark:shadow-md focus:dark:border-red-800"
          {...register("last_name", {
            required: false,
          })}
          defaultValue={lastName}
        />
      </InputRow>
      <div className="flex w-full justify-end">
        <Button type="primary">Save</Button>
      </div>
    </form>
  );
}

export default SettingsForm;
