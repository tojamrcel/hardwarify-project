import Button from "@/app/_components/Button";
import { getProfile } from "@/app/_lib/data_service";
import { createClient } from "@/app/_lib/supabase/server";

async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) throw new Error("There is no user logged in.");
  const { firstName, lastName, image } = await getProfile(user.email);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
        Settings
      </h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-gray-700">E-mail</label>
          <input className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-[#0e131f] dark:text-gray-300 dark:shadow-md focus:dark:border-red-800" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-gray-700">
            First name
          </label>
          <input className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-[#0e131f] dark:text-gray-300 dark:shadow-md focus:dark:border-red-800" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold text-gray-700">
            Last name
          </label>
          <input className="h-10 w-full rounded-md border-2 px-4 text-gray-600 transition-colors duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:border-gray-700 dark:bg-[#0e131f] dark:text-gray-300 dark:shadow-md focus:dark:border-red-800" />
        </div>
        <div className="flex w-full justify-end">
          <Button type="primary">Save</Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
