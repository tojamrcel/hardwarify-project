"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { CartProduct } from "../_types/types";

interface CartContextType {
  cart: CartProduct[];
  setCart(callback: (prevCart: CartProduct[]) => CartProduct[]): void;
  clearCart(): void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProduct[]>([]);
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
