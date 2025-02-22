"use client";

import { useForm } from "react-hook-form";
import { updateProfileImageAction } from "../_lib/actions";
import { UploadImage as UploadImageType } from "../_types/types";

function UploadImage() {
  const { register, handleSubmit } = useForm<UploadImageType>();

  async function onSubmit(data: UploadImageType) {
    const upload = await updateProfileImageAction(data);
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
    </form>
  );
}

export default UploadImage;
