import type { Metadata } from "next";
import CartList from "../_components/CartList";
import CartSummary from "../_components/CartSummary";

export const metadata: Metadata = {
  title: "Cart",
};

function Page() {
  return (
    <section className="grid grid-cols-[1fr_20rem] gap-4">
      <div>
        <h2 className="text-4xl font-bold text-gray-700">Cart</h2>
        <CartList />
      </div>
      <div>
        <CartSummary />
      </div>
    </section>
  );
}

export default Page;
