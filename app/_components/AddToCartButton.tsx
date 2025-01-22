"use client";

import { Product } from "../_types/types";
import { useCart } from "./CartContext";

function AddToCartButton({ product }: { product: Product }) {
  const { setCart } = useCart();

  function handleAddToCart() {
    setCart((state) => [...state, product]);
  }
  return (
    <button
      onClick={handleAddToCart}
      className="rounded-md bg-red-600 px-3 py-1 font-semibold text-stone-100 transition-colors duration-150 hover:bg-red-700"
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
