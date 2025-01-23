"use client";

import { useCart } from "./CartContext";

function CartSummary() {
  const { cart } = useCart();

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-700">Summary</h2>
      <div className="my-4 flex flex-col gap-2 px-4 text-gray-500">
        <p>
          <span className="font-semibold">Products:</span>{" "}
          {cart.length ? `$xxx` : "—"}
        </p>
        <p>
          <span className="font-semibold">Shipping cost:</span>{" "}
          {cart.length ? `$xxx` : "—"}
        </p>
        <p>
          <span className="font-semibold">Total:</span>{" "}
          {cart.length ? `$xxx` : "—"}
        </p>
        <button
          disabled={Boolean(!cart.length)}
          className="my-2 w-32 rounded-lg bg-red-600 px-2 py-2 font-semibold text-stone-100 transition-colors duration-300 hover:bg-red-700 disabled:bg-slate-300 disabled:hover:bg-slate-300"
        >
          Checkout
        </button>
      </div>
    </>
  );
}

export default CartSummary;
