import UploadImage from "@/app/_components/UploadImage";
import { getProfile } from "@/app/_lib/data_service";
import { createClient } from "@/app/_lib/supabase/server";
import Image from "next/image";

async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) throw new Error("There is no user logged in.");
  const { firstName, lastName, image } = await getProfile(user.email);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center lg:mt-8 lg:w-auto lg:items-start lg:justify-start">
      <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-[auto_1fr]">
        <Image
          src={image ? image : "/noimage.jpg"}
          width={196}
          height={196}
          className="rounded-full"
          alt="Profile image"
        />
        <div className="flex flex-col items-center justify-center gap-2 text-gray-600 md:items-start">
          <h2 className="text-4xl font-semibold">
            {firstName} {lastName}
          </h2>
          <div className="text-md flex flex-col items-start">
            <UploadImage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
