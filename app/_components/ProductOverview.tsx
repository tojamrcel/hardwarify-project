import Image from "next/image";
import { CartProduct } from "../_types/types";

function ProductOverview({ item }: { item: CartProduct }) {
  return (
    <div className="grid w-full flex-shrink-0 grid-cols-[7rem_3fr] overflow-hidden rounded-lg border-2">
      <Image src={item.image} width="96" height="96" alt={item.product_name} />
      <div className="flex h-full w-full items-center justify-between pr-4">
        <p className="font-semibold uppercase tracking-tighter text-gray-600">
          {item.product_name}
        </p>
        <div className="flex flex-col justify-center text-center font-semibold">
          <p className="text-red-600">{item.quantity}x</p>
          <p className="text-gray-600">
            {(item.regular_price - Number(item.discount)) * item.quantity}$
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
