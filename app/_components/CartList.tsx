"use client";

import Image from "next/image";

function CartList() {
  return (
    <div className="mt-4 flex flex-col gap-8 p-4">
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="relative grid max-w-5xl grid-cols-[8rem_3fr] items-center justify-center gap-4 rounded-lg bg-white-second px-4 py-2">
      <Image
        src="/airpodspro.jpg"
        alt="airpods"
        height={96}
        width={96}
        className="self-center justify-self-center rounded-md shadow-sm"
      />
      <div>
        <p className="text-lg font-semibold text-gray-700">AirPods Pro</p>
        <div className="flex items-center gap-2 text-gray-700">
          <button className="flex items-center justify-center font-bold">
            -
          </button>
          <input
            type="number"
            className="mt-1 h-6 w-6 rounded-lg px-1 py-0.5 text-center font-semibold text-gray-700 focus:outline-none"
            min="1"
            max="10"
          />
          <button className="flex items-center justify-center font-bold">
            +
          </button>
        </div>
        <button className="absolute right-2 top-0 text-2xl text-gray-700">
          &times;
        </button>
        <a
          href="#"
          className="absolute bottom-2 right-2 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-100 hover:border-stone-500"
        >
          Go to product
        </a>
      </div>
    </div>
  );
}

export default CartList;
