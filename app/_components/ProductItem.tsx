"use client";

import Image from "next/image";
import { Product } from "../_types/types";
import Button from "./Button";
import AddToCartButton from "./AddToCartButton";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function ProductItem({ product }: { product: Product }) {
  const {
    id,
    product_name: name,
    image,
    availability,
    regular_price: price,
    discount,
  } = product;

  const router = useRouter();
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div
      onClick={(ev) => {
        if (ref.current === ev.target) return;

        router.push(`/products/${id}`);
      }}
      className="relative grid h-auto cursor-pointer grid-cols-[auto_1fr] items-center gap-4 rounded-md border-2 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-600"
    >
      <div className="p-2">
        <Image
          className={`h-32 w-32 rounded-md md:h-44 md:w-44 ${availability === 0 ? "opacity-50 grayscale-[100%]" : "dark:grayscale-[30%]"}`}
          src={image}
          width={176}
          height={176}
          alt={name}
          quality={50}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="py-2 font-semibold text-gray-600 md:text-xl dark:text-gray-200">
          {name}
        </p>
        <ul className="text-gray-500">
          <li>✅ 24-month warranty</li>
          <li>🚀 Free express shipping</li>
        </ul>
      </div>
      <div className="absolute bottom-2 right-2 hidden flex-col items-center justify-center gap-2 md:flex">
        {discount ? (
          <div className="flex gap-2 text-xl font-semibold text-gray-500 dark:text-gray-600">
            <p className="italic line-through">${price}</p>
            <span className="text-red-600 dark:text-red-700">
              ${price - Number(discount)}
            </span>
          </div>
        ) : (
          <span className="py-2 text-xl font-semibold text-gray-500 dark:text-gray-600">
            {price}$
          </span>
        )}
        <AddToCartButton
          product={product}
          disabled={availability <= 0}
          ref={ref}
        />
      </div>
      <div className="absolute bottom-2 right-2 md:hidden">
        <Button type="secondary">Buy now</Button>
      </div>
    </div>
  );
}

export default ProductItem;
