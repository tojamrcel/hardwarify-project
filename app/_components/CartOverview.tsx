"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import Image from "next/image";

function CartOverview() {
  const { cart } = useCart();
  console.log(cart);

  return (
    <>
      {cart.length === 0 ? (
        <span className="text-xl text-gray-700 dark:text-gray-400">
          Your cart is empty.
        </span>
      ) : (
        <Link href="/cart">
          <div className="rounded-sm border-2 p-6 transition-all duration-150 hover:border-gray-400/75 dark:border-gray-600 dark:hover:border-gray-500">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
              Total cart value:{" "}
              <span>
                {cart.reduce(
                  (acc, cur) => acc + cur.final_price * cur.quantity,
                  0,
                )}
                $
              </span>
            </h3>{" "}
            <ul className="mt-4 flex w-2/3 gap-3 overflow-clip">
              {cart.map((item) => (
                <Image
                  src={item.image}
                  alt={item.product_name}
                  key={item.id}
                  width={80}
                  height={80}
                  className="rounded-md dark:grayscale-[30%]"
                />
              ))}
            </ul>
          </div>
        </Link>
      )}
    </>
  );
}

export default CartOverview;
