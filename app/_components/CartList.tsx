"use client";

import Image from "next/image";
import { useCart } from "./CartContext";
import { CartProduct } from "../_types/types";
import Link from "next/link";

function CartList() {
  const { cart } = useCart();

  return (
    <div className="mt-4 flex flex-col gap-8 p-4">
      {cart.length > 0 &&
        cart.map((prod) => <CartItem product={prod} key={prod.id} />)}
      {cart.length === 0 && (
        <p className="text-center text-2xl leading-6 text-gray-800">
          The cart is empty :(
        </p>
      )}
    </div>
  );
}

function CartItem({ product }: { product: CartProduct }) {
  const {
    id,
    product_name: name,
    regular_price: regularPrice,
    discount,
    image,
    quantity,
  } = product;

  return (
    <div className="relative grid max-w-5xl grid-cols-[8rem_3fr] items-center justify-center gap-4 rounded-lg bg-white-second px-4 py-2">
      <Image
        src={image}
        alt={name}
        height={96}
        width={96}
        className="self-center justify-self-center rounded-md shadow-sm"
      />
      <div>
        <p className="text-lg font-semibold text-gray-700">{name}</p>
        <div className="flex items-center gap-2 text-gray-700">
          <button className="flex items-center justify-center font-bold">
            -
          </button>
          <input
            type="number"
            className="mt-1 h-6 w-6 rounded-lg px-1 py-0.5 text-center font-semibold text-gray-700 focus:outline-none"
            min="1"
            max="10"
            defaultValue={quantity}
          />
          <button className="flex items-center justify-center font-bold">
            +
          </button>
          <p className="ml-2">
            ${(regularPrice - Number(discount)) * quantity}
          </p>
        </div>
        <button className="absolute right-2 top-0 text-2xl text-gray-700">
          &times;
        </button>
        <Link
          href={`/products/${id}`}
          className="absolute bottom-2 right-2 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-100 hover:border-stone-500"
        >
          Go to product
        </Link>
      </div>
    </div>
  );
}

export default CartList;
