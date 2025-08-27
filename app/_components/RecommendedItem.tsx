import Image from "next/image";
import { Product } from "../_types/types";
import Button from "./Button";

function RecommendedItem({ product }: { product: Product }) {
  const {
    id,
    product_name: name,
    regular_price: regularPrice,
    discount,
    image,
  } = product;

  return (
    <div className="grid grid-cols-2 rounded-md bg-gray-200 px-4 py-2 shadow-sm dark:bg-gray-800 md:grid-cols-1 lg:grid-cols-2">
      <div className="flex w-full items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={192}
          height={192}
          className="w-1/2 rounded-md shadow-md"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-center font-bold text-gray-800 dark:text-gray-200 md:mt-2 lg:mt-0 2xl:text-xl">
          {name}
        </h3>
        {discount ? (
          <>
            <div className="flex gap-2 font-semibold xl:text-lg 2xl:gap-3">
              <span className="italic text-gray-600 line-through">
                ${regularPrice}
              </span>
              <span className="text-red-600 dark:text-red-700">
                ${regularPrice - Number(discount)}
              </span>
            </div>
          </>
        ) : (
          <span className="font-semibold xl:text-lg">
            ${regularPrice - Number(discount)}
          </span>
        )}
        <div className="mt-1">
          <Button type="secondary" link={`/products/${id}`}>
            Go to product
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RecommendedItem;
