import SettingsForm from "@/app/_components/SettingsForm";
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
  const { email, firstName, lastName, image } = await getProfile(user.email);

  return (
    <div className="flex flex-col items-center justify-center gap-6 md:mt-8">
      <div className="grid gap-8 md:grid-cols-[auto_1fr]">
        <Image
          src={image ? image : "/noimage.jpg"}
          width={144}
          height={144}
          className="rounded-full"
          alt="Profile image"
        />
        <div className="flex flex-col justify-center gap-2 text-gray-600">
          <h2 className="text-2xl font-semibold">
            {firstName} {lastName}
          </h2>
          <div className="text-md flex flex-col items-start">
            <UploadImage />
          </div>
        </div>
      </div>
      <SettingsForm email={email} />
    </div>
  );
}

export default Page;
