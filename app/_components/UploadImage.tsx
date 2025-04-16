"use client";

import { useForm } from "react-hook-form";
import { updateProfileImageAction } from "../_lib/actions";
import { UploadImage as UploadImageType } from "../_types/types";
import { useState } from "react";
import Button from "./Button";

function UploadImage() {
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UploadImageType>();

  async function onSubmit(data: UploadImageType) {
    try {
      await updateProfileImageAction(data);
    } catch (error) {
      if (error instanceof Error) setError("Image could not be uploaded.");
    } finally {
      reset();
    }
  }

  return (
    <form
      className="flex flex-col items-center gap-2 md:items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="file"
        accept="image/*"
        {...register("image", {
          required: "Please import an image.",
        })}
      />
      <Button type="secondary">Upload new image</Button>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {errors.image && !error && (
        <p className="text-sm text-red-600">{errors.image.message}</p>
      )}
    </form>
  );
}

export default UploadImage;
