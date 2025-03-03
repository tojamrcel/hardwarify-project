import { getOrderDetails } from "@/app/_lib/data_service";

async function Page({ params }: { params: { orderId: string } }) {
  const { orderId } = await params;
  const order = await getOrderDetails(orderId);
  console.log(order);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-gray-700">Order #{orderId}</h1>
      <div className="grid grid-cols-[3fr_2fr]"></div>
    </div>
  );
}

export default Page;
