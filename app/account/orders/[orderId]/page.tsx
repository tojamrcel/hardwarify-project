import CancelOrderBtn from "@/app/_components/CancelOrderBtn";
import OrderStatusBadge from "@/app/_components/OrderStatusBadge";
import ProductOverview from "@/app/_components/ProductOverview";
import { SHIPPING_COST } from "@/app/_lib/constants";
import { getOrderDetails, getProductsByIds } from "@/app/_lib/data_service";
import { CartProduct } from "@/app/_types/types";

async function Page({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  const {
    total_price: totalPrice,
    items,
    status,
  } = await getOrderDetails(orderId);
  const ids = items.map((it) => it.product_id);
  const products = await getProductsByIds(ids);
  const productItems: CartProduct[] = products.map((prod) => {
    return {
      ...prod,
      quantity: items.find((it) => it.product_id === prod.id)!.quantity,
    };
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold text-gray-700">
          Order #{orderId}
        </h1>
        <OrderStatusBadge status={status} />
      </div>
      <div className="grid w-full items-center gap-8 md:grid-cols-[3fr_2fr]">
        <ul className="flex max-h-96 flex-col gap-2 overflow-auto px-2">
          {productItems.map((item) => (
            <li key={item.id}>
              <ProductOverview item={item} />
            </li>
          ))}
        </ul>
        <div className="ml-8 flex flex-col items-center justify-center gap-2 rounded-lg border-2 py-2">
          <h2 className="text-center text-lg font-semibold text-gray-700">
            Order info
          </h2>
          <p className="font-semibold text-gray-600">
            Products:{" "}
            <span className="font-normal">{totalPrice - SHIPPING_COST}$</span>
          </p>
          <p className="font-semibold text-gray-600">
            Shipping cost: <span className="font-normal">{SHIPPING_COST}$</span>
          </p>
          <p className="font-semibold text-gray-600">
            Total price: <span className="font-normal">{totalPrice}$</span>
          </p>
          {status === "pending" && <CancelOrderBtn orderId={orderId} />}
        </div>
      </div>
    </div>
  );
}

export default Page;
