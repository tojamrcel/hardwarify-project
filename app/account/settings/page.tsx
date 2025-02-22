import SettingsForm from "@/app/_components/SettingsForm";
import UploadImage from "@/app/_components/UploadImage";
import { getProfile } from "@/app/_lib/data_service";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function Page() {
  const session = await getServerSession();
  const userEmail = session?.user?.email;

  if (!session || !userEmail) return;
  const { email, firstName, lastName, image } = await getProfile(userEmail);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-[auto_1fr] gap-8">
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
