"use client";

import { cancelOrderAction } from "../_lib/actions";

function CancelOrderBtn({ orderId }: { orderId: string }) {
  async function handleCancelOrder() {
    await cancelOrderAction(orderId);
  }

  return (
    <button
      onClick={handleCancelOrder}
      className="transition-color mt-2 h-12 w-28 rounded-md bg-red-600 font-semibold text-stone-100 duration-300 hover:bg-red-700"
    >
      Cancel order
    </button>
  );
}

export default CancelOrderBtn;
