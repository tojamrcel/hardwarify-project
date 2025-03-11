"use client";

import { useState } from "react";
import { cancelOrderAction } from "../_lib/actions";
import Button from "./Button";

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
      <Button type="primary" onClick={handleCancelOrder}>
        Cancel order
      </Button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </>
  );
}

export default CancelOrderBtn;
