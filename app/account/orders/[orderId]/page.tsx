import OrderStatusBadge from "@/app/_components/OrderStatusBadge";
import ProductOverview from "@/app/_components/ProductOverview";
import { getOrderDetails, getProductsByIds } from "@/app/_lib/data_service";
import { CartProduct } from "@/app/_types/types";

async function Page({ params }: { params: { orderId: string } }) {
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
      <div className="grid w-full grid-cols-[3fr_2fr] gap-8">
        <ul className="flex max-h-96 flex-col gap-2 overflow-auto px-2">
          {productItems.map((item) => (
            <li key={item.id}>
              <ProductOverview item={item} />
            </li>
          ))}
        </ul>
        <div className="ml-8 flex flex-col items-center gap-2">
          <h2 className="text-center text-lg font-semibold text-gray-700">
            Order info
          </h2>
          <p>
            Total price: <span>{totalPrice}$</span>
          </p>
          <button className="transition-color mt-2 h-12 w-28 rounded-md bg-red-600 font-semibold text-stone-100 duration-300 hover:bg-red-700">
            Cancel order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
