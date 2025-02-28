import OrderItem from "@/app/_components/OrderItem";
import { getUserOrders } from "@/app/_lib/data_service";

async function Page() {
  const orders = (await getUserOrders()).filter(
    (order) => order.status === "delivered",
  );

  return (
    <ul className="flex flex-col gap-4">
      {orders.map((order) => (
        <OrderItem orderItem={order} key={order.id} />
      ))}
    </ul>
  );
}

export default Page;
