import SettingsForm from "@/app/_components/SettingsForm";
import { getProfile } from "@/app/_lib/data_service";
import { createClient } from "@/app/_lib/supabase/server";

async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) throw new Error("There is no user logged in.");
  const profile = await getProfile(user.email);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
        Settings
      </h2>
      <SettingsForm profile={profile} />
    </div>
  );
}

export default Page;
