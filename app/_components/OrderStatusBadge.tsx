function OrderStatusBadge({
  status,
}: {
  status: "pending" | "sent" | "delivered" | "cancelled";
}) {
  return (
    <>
      {status === "pending" && (
        <span className="text-md flex w-20 justify-center rounded-full bg-green-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100">
          pending
        </span>
      )}
      {status === "sent" && (
        <span className="text-md flex w-20 justify-center rounded-full bg-yellow-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100">
          sent
        </span>
      )}
      {status === "delivered" && (
        <span className="text-md flex w-20 justify-center rounded-full bg-red-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100">
          delivered
        </span>
      )}
      {status === "cancelled" && (
        <span className="text-md flex w-20 justify-center rounded-full bg-red-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100">
          cancelled
        </span>
      )}
    </>
  );
}

export default OrderStatusBadge;
