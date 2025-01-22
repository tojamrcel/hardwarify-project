import type { Metadata } from "next";
import CartList from "../_components/CartList";

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
        <h2 className="text-2xl font-bold text-gray-700">Summary</h2>
        <div className="my-4 flex flex-col gap-2 px-4 text-gray-500">
          <p>
            <span className="font-semibold">Products:</span> xxx$
          </p>
          <p>
            <span className="font-semibold">Shipping cost:</span> xxx$
          </p>
          <p>
            <span className="font-semibold">Total:</span> xxx$
          </p>
          <button className="my-2 w-32 rounded-lg bg-red-600 px-2 py-2 font-semibold text-stone-100 transition-colors duration-300 hover:bg-red-700">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Page;
