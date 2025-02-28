import Image from "next/image";
import { Order } from "../_types/types";

function OrderItem({ orderItem }: { orderItem: Order }) {
  return (
    <li className="relative cursor-default rounded-lg bg-white-second p-4 shadow-md transition-transform duration-300 hover:scale-[1.01]">
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-semibold text-gray-700">
          Order #{orderItem.id}
        </h3>
        {orderItem.status === "pending" && (
          <span className="text-md flex rounded-full bg-green-500 p-0.5 px-1.5 font-semibold uppercase tracking-tight text-stone-100">
            pending
          </span>
        )}
        {orderItem.status === "sent" && (
          <span className="text-md flex rounded-full bg-yellow-500 p-0.5 px-1.5 font-semibold uppercase tracking-tight text-stone-100">
            sent
          </span>
        )}

        {/*  <span className="text-md flex rounded-full bg-red-500 p-0.5 px-1.5 font-semibold uppercase tracking-tight text-stone-100">
            delivered
          </span> */}
      </div>
      <div className="mt-2 flex gap-3">
        <Image
          src="/person.jpg"
          alt=""
          width={80}
          height={80}
          className="rounded-md"
        />
        <Image
          src="/person.jpg"
          alt=""
          width={80}
          height={80}
          className="rounded-md"
        />
        <Image
          src="/person.jpg"
          alt=""
          width={80}
          height={80}
          className="rounded-md"
        />
      </div>
      <button className="absolute bottom-3 right-5 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-300 hover:border-stone-500">
        Go to order
      </button>
    </li>
  );
}

export default OrderItem;
