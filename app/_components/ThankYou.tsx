"use client";

import { useEffect } from "react";
import Button from "./Button";
import { useCart } from "./CartContext";

function ThankYou({ orderId }: { orderId: string }) {
  const { clearCart } = useCart();
  useEffect(() => clearCart());

  return (
    <div className="mt-16 flex w-full flex-col items-center justify-center gap-4">
      <h1 className="text-center text-5xl font-bold text-gray-700">
        Thank you!
      </h1>
      <p className="mb-2 text-xl text-gray-600">
        Thank you for placing the order in our shop. You can track your order in
        account page!
      </p>
      <Button type="primary" link={`/account/orders/${orderId}`}>
        Track your order
      </Button>
    </div>
  );
}

export default ThankYou;
