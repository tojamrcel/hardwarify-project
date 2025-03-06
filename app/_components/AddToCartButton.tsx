"use client";

import { Product } from "../_types/types";
import { useCart } from "./CartContext";
import toast from "react-hot-toast";

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
    let added: boolean = false;

    setCart((state) => {
      const alreadyInCart = state.find(
        (prod) => prod.id === cartProductItem.id,
      );

      if (alreadyInCart && product.availability >= alreadyInCart.quantity + 1) {
        added = true;
        return [
          ...state.filter((prod) => prod.id !== product.id),
          { ...cartProductItem, quantity: alreadyInCart.quantity + 1 },
        ];
      } else if (
        alreadyInCart &&
        product.availability < alreadyInCart.quantity + 1
      ) {
        return [...state];
      } else {
        added = true;
        return [...state, cartProductItem];
      }
    });

    if (added) toast.success(`${product.product_name} added to cart`);
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
