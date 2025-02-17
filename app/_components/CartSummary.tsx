"use client";

import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";

const SHIPPING_COST = 15;

function CartSummary() {
  const router = useRouter();

  const { cart } = useCart();

  const productsPrice = cart.reduce(
    (acc, cur) => acc + cur.regular_price * cur.quantity,
    0,
  );

  const discount = cart.reduce(
    (acc, cur) => acc + Number(cur.discount) * cur.quantity,
    0,
  );

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-700">Summary</h2>
      <div className="my-4 flex flex-col gap-2 px-4 text-gray-500">
        <p>
          <span className="font-semibold">Products:</span>{" "}
          {cart.length ? `$${productsPrice}` : "—"}
        </p>
        <p>
          <span className="font-semibold">Shipping cost:</span>{" "}
          {cart.length ? `$${SHIPPING_COST}` : "—"}
        </p>
        <p>
          <span className="font-semibold">Discounts:</span>{" "}
          {cart.length ? `$${discount}` : "—"}
        </p>
        <p>
          <span className="font-semibold">Total:</span>{" "}
          {cart.length ? `$${productsPrice - discount + SHIPPING_COST}` : "—"}
        </p>
        <button
          disabled={Boolean(!cart.length)}
          onClick={() => router.push("/cart/checkout")}
          className="my-2 w-32 rounded-lg bg-red-600 px-2 py-2 font-semibold text-stone-100 transition-colors duration-300 hover:bg-red-700 disabled:bg-slate-300 disabled:hover:bg-slate-300"
        >
          Checkout
        </button>
      </div>
    </>
  );
}

export default CartSummary;
