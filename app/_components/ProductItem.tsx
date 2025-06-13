import Image from "next/image";
import { Product } from "../_types/types";
import Button from "./Button";

function ProductItem({ product }: { product: Product }) {
  const {
    id,
    product_name: name,
    image,
    availability,
    regular_price: price,
    discount,
  } = product;

  return (
    <div className="relative grid h-32 grid-cols-[auto_1fr] items-center gap-4 rounded-md border-2 dark:border-gray-600">
      <Image
        className={`h-full rounded-md ${availability === 0 ? "opacity-50 grayscale-[100%]" : "dark:grayscale-[30%]"}`}
        src={image}
        width={125}
        height={125}
        alt={name}
      />
      <div className="flex flex-col gap-2">
        <p className="py-2 text-lg font-semibold text-gray-600 dark:text-gray-200">
          {name}
        </p>
        {discount ? (
          <div className="flex gap-2 font-semibold text-gray-500 dark:text-gray-600">
            <p className="italic line-through">${price}</p>
            <span className="text-red-600 dark:text-red-700">
              ${price - Number(discount)}
            </span>
          </div>
        ) : (
          <span className="py-2 font-semibold text-gray-500 dark:text-gray-600">
            {price}$
          </span>
        )}
      </div>
      <div className="absolute bottom-2 right-2 hidden md:block">
        <Button link={`/products/${id}`} type="primary">
          Buy now
        </Button>
      </div>
      <div className="absolute bottom-2 right-2 md:hidden">
        <Button link={`/products/${id}`} type="secondary">
          Buy now
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
