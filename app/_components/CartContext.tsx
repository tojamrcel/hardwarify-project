"use client";
import { Product } from "../_types/types";
import { createContext, useContext, useState } from "react";

interface CartContextType {
  cart: Product[];
  setCart(callback: (prevCart: Product[]) => Product[]): void;
  clearCart(): void;
}

const CartContext = createContext<CartContextType | []>([]);

export function CartProvider() {
  const [cart, setCart] = useState<Product[]>([]);
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, clearCart }}
    ></CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Context was used outside the provider");

  return context;
}

export default CartContext;
