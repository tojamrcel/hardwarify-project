"use client";

import { useForm } from "react-hook-form";
import { updateProfileImageAction } from "../_lib/actions";
import { UploadImage as UploadImageType } from "../_types/types";
import { useState } from "react";

function UploadImage() {
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset } = useForm<UploadImageType>();

  async function onSubmit(data: UploadImageType) {
    try {
      await updateProfileImageAction(data);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      reset();
    }
  }

  return (
    <form
      className="flex flex-col items-start gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="file"
        accept="image/*"
        {...register("image", {
          required: true,
        })}
      />
      <button className="font-semibold text-gray-500 decoration-2 underline-offset-[6px] hover:underline">
        Upload new image
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}

export default UploadImage;
