import type { Metadata } from "next";
import { getLastUserOrder, getProfile } from "../_lib/data_service";
import { createClient } from "../_lib/supabase/server";
import Button from "../_components/Button";
import OrderItem from "../_components/OrderItem";

export const metadata: Metadata = {
  title: "Account",
};

async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) throw new Error("There is no user logged in.");
  const { firstName, lastName } = await getProfile(user.email);
  const lastOrder = await getLastUserOrder();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-300">
        Hello {firstName} {lastName}!
      </h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Your last order
        </h2>
        <OrderItem orderItem={lastOrder} />
        <div>
          <Button type="secondary" link="/account/orders">
            See all orders.
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Your cart
        </h2>
        <div className="rounded-sm border-2 p-8 py-16"></div>
      </div>
    </div>
  );
}

export default Page;
