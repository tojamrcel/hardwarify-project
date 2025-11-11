function OrderStatusBadge({
  status,
}: {
  status: "pending" | "sent" | "delivered";
}) {
  return (
    <>
      {status === "pending" && (
        <span className="text-md flex w-20 justify-center rounded-md bg-green-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100 dark:bg-green-600">
          pending
        </span>
      )}
      {status === "sent" && (
        <span className="text-md flex w-20 justify-center rounded-md bg-yellow-500 p-0.5 font-semibold uppercase tracking-tight text-stone-100 dark:bg-yellow-600">
          sent
        </span>
      )}
      {status === "delivered" && (
        <span className="text-md flex w-24 justify-center rounded-md bg-red-600 p-0.5 font-semibold uppercase tracking-tight text-stone-100 dark:bg-red-700">
          delivered
        </span>
      )}
    </>
  );
}

export default OrderStatusBadge;
