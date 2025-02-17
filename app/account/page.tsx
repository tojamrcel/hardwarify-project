import type { Metadata } from "next";
import { auth } from "../_lib/auth";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Account",
};

async function Page() {
  const session = await getServerSession();
  const userEmail = session?.user?.email;

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="grid grid-cols-[auto_1fr] gap-8">
        <img
          src="noimage.jpg"
          alt="Profile image"
          className="w-48 rounded-full"
        />
        <div className="flex flex-col justify-center gap-2 text-gray-600">
          <h2 className="text-2xl font-semibold">Hello John!</h2>
          <div className="flex flex-col text-lg">
            <p>{userEmail}</p>
            <p>123 123 123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
