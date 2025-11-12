import Image from "next/image";
import Link from "next/link";
import { getProductsByIds } from "../_lib/data_service";
import { Order } from "../_types/types";
import OrderStatusBadge from "./OrderStatusBadge";

async function OrderItem({ orderItem }: { orderItem: Order }) {
  const productsIds = orderItem.items.map((item) => item.product_id);
  const products = await getProductsByIds(productsIds);

  return (
    <Link href={`/account/orders/${orderItem.id}`}>
      <li className="relative cursor-pointer rounded-sm border-2 p-4 transition-all duration-150 hover:border-gray-400/75 dark:border-gray-600 dark:hover:border-gray-500 md:p-6">
        <div className="flex flex-col-reverse gap-2 md:flex-row md:items-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 md:text-xl">
            Order #{orderItem.id}
          </h3>
          <OrderStatusBadge status={orderItem.status} />
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
                className={`rounded-sm dark:grayscale-[30%]`}
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
