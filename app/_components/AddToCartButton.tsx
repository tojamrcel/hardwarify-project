"use client";

import { Product } from "../_types/types";
import { useCart } from "./CartContext";

function AddToCartButton({
  product,
  disabled,
}: {
  product: Product;
  disabled: boolean;
}) {
  const { setCart } = useCart();

  function handleAddToCart() {
    if (disabled) return;

    const cartProductItem = { ...product, quantity: 1 };

    setCart((state) => {
      const alreadyInCart = state.find(
        (prod) => prod.id === cartProductItem.id,
      );

      if (alreadyInCart && product.availability >= alreadyInCart.quantity + 1)
        return [
          ...state.filter((prod) => prod.id !== product.id),
          { ...cartProductItem, quantity: alreadyInCart.quantity + 1 },
        ];
      else if (
        alreadyInCart &&
        product.availability < alreadyInCart.quantity + 1
      ) {
        return [...state];
      } else return [...state, cartProductItem];
    });
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={disabled}
      className="rounded-md bg-red-600 px-5 py-3 font-semibold text-stone-100 transition-colors duration-150 hover:bg-red-700 disabled:bg-slate-300 md:px-3 md:py-1"
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
