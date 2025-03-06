import Image from "next/image";
import { Product } from "../_types/types";
import Link from "next/link";

function RecommendedItem({ product }: { product: Product }) {
  const {
    id,
    product_name: name,
    regular_price: regularPrice,
    discount,
    image,
  } = product;

  return (
    <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2 shadow-sm md:grid-cols-1 lg:grid-cols-2">
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
        <h3 className="text-center font-bold text-stone-800 md:mt-2 lg:mt-0">
          {name}
        </h3>
        {discount ? (
          <>
            <div className="flex gap-2 font-semibold">
              <span className="italic line-through">${regularPrice}</span>
              <span className="text-red-600">
                ${regularPrice - Number(discount)}
              </span>
            </div>
          </>
        ) : (
          <span className="font-semibold">
            ${regularPrice - Number(discount)}
          </span>
        )}
        <Link
          href={`/products/${id}`}
          className="mt-1 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-100 hover:border-stone-500"
        >
          Go to product
        </Link>
      </div>
    </div>
  );
}

export default RecommendedItem;
