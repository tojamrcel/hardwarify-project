import { useCart } from "./CartContext";
import ProductOverview from "./ProductOverview";

function SummaryProducts() {
  const { cart } = useCart();

  return (
    <div className="flex max-h-[65%] w-full flex-col items-start justify-start gap-2 overflow-auto px-4 py-4">
      {cart.map((prod) => (
        <ProductOverview item={prod} key={prod.id} />
      ))}
    </div>
  );
}

export default SummaryProducts;
