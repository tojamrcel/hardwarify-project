import Image from "next/image";
import { Order } from "../_types/types";
import { getProductsByIds } from "../_lib/data_service";

async function OrderItem({ orderItem }: { orderItem: Order }) {
  const productsIds = orderItem.items.map((item) => item.product_id);
  const products = await getProductsByIds(productsIds);

  return (
    <li className="relative cursor-default rounded-lg bg-white-second p-4 shadow-md transition-transform duration-300 hover:scale-[1.01]">
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Order #{orderItem.id}
        </h3>
        {orderItem.status === "pending" && (
          <span className="text-md flex w-20 justify-center rounded-full bg-green-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100">
            pending
          </span>
        )}
        {orderItem.status === "sent" && (
          <span className="text-md flex w-20 justify-center rounded-full bg-yellow-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100">
            sent
          </span>
        )}
        {orderItem.status === "delivered" && (
          <span className="text-md flex w-20 justify-center rounded-full bg-red-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100">
            delivered
          </span>
        )}
      </div>
      <div className="mt-2 flex gap-3">
        {orderItem.items.map((item) => (
          <Image
            src={products.find((p) => p.id === item.product_id)!.image}
            alt={products.find((p) => p.id === item.product_id)!.product_name}
            width={80}
            height={80}
            className="rounded-md"
            key={item.product_id}
          />
        ))}
      </div>
      <button className="absolute bottom-3 right-5 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-300 hover:border-stone-500">
        Go to order
      </button>
    </li>
  );
}

export default OrderItem;
