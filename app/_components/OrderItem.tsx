import Image from "next/image";
import Link from "next/link";
import { getProductsByIds } from "../_lib/data_service";
import { Order } from "../_types/types";

async function OrderItem({ orderItem }: { orderItem: Order }) {
  const productsIds = orderItem.items.map((item) => item.product_id);
  const products = await getProductsByIds(productsIds);

  return (
    <Link href={`/account/orders/${orderItem.id}`}>
      <li className="relative cursor-pointer rounded-sm border-2 p-6 transition-all duration-150 hover:border-gray-400/75 dark:border-gray-600 dark:hover:border-gray-500">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Order #{orderItem.id}
          </h3>
          {orderItem.status === "pending" && (
            <span className="text-md absolute right-6 top-6 flex w-20 justify-center rounded-md bg-green-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100 dark:bg-green-600">
              pending
            </span>
          )}
          {orderItem.status === "sent" && (
            <span className="text-md absolute right-6 top-6 flex w-20 justify-center rounded-md bg-yellow-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100 dark:bg-yellow-600">
              sent
            </span>
          )}
          {orderItem.status === "delivered" && (
            <span className="text-md absolute right-6 top-6 flex w-24 justify-center rounded-md bg-red-600 p-0.5 font-semibold uppercase tracking-tight text-stone-100 dark:bg-red-700">
              delivered
            </span>
          )}
        </div>
        <div className="mt-4 flex w-2/3 gap-3 overflow-clip">
          {orderItem.items.map((item) => {
            return (
              <Image
                src={products.find((p) => p.id === item.product_id)!.image}
                alt={
                  products.find((p) => p.id === item.product_id)!.product_name
                }
                width={80}
                height={80}
                className={`rounded-md dark:grayscale-[30%]`}
                key={item.product_id}
              />
            );
          })}
        </div>
      </li>
    </Link>
  );
}

export default OrderItem;
