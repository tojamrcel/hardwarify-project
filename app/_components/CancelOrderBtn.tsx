"use client";

import { useState } from "react";
import { cancelOrderAction } from "../_lib/actions";

function CancelOrderBtn({ orderId }: { orderId: string }) {
  const [error, setError] = useState<string | null>(null);

  async function handleCancelOrder() {
    try {
      await cancelOrderAction(orderId);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }

  return (
    <>
      <button
        onClick={handleCancelOrder}
        className="transition-color mt-2 h-12 w-28 rounded-md bg-red-600 font-semibold text-stone-100 duration-300 hover:bg-red-700"
      >
        Cancel order
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </>
  );
}

export default CancelOrderBtn;
