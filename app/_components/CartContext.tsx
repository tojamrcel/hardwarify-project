"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../_types/types";

interface CartContextType {
  cart: Product[];
  setCart(callback: (prevCart: Product[]) => Product[]): void;
  clearCart(): void;
}

const CartContext = createContext<CartContextType | []>([]);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, setCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("Context was used outside the provider");

  return context;
}

export default CartContext;
