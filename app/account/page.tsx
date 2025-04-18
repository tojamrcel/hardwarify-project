import type { Metadata } from "next";
import { getProfile } from "../_lib/data_service";
import Image from "next/image";
import { createClient } from "../_lib/supabase/server";

export const metadata: Metadata = {
  title: "Account",
};

async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) throw new Error("There is no user logged in.");
  const { email, firstName, image } = await getProfile(user.email);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center lg:mt-8 lg:w-auto lg:items-start lg:justify-start">
      <div className="grid grid-cols-[auto_1fr] gap-8">
        <Image
          src={image ? image : "/noimage.jpg"}
          width={192}
          height={192}
          alt="Profile image"
          className="rounded-full"
        />
        <div className="flex flex-col justify-center gap-2 text-gray-600">
          <h2 className="text-2xl font-semibold">Hello {firstName}!</h2>
          <div className="flex flex-col text-lg">
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
