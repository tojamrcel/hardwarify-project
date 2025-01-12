import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
};

function Page() {
  return (
    <section className="grid grid-cols-[1fr_20rem] gap-4">
      <div>
        <h2 className="text-4xl font-bold text-gray-700">Cart</h2>
        <div className="flex flex-col gap-4 p-4">
          <div className="relative grid max-w-5xl grid-cols-[8rem_3fr] items-center justify-center gap-4 rounded-lg bg-white-second px-4 py-2">
            <img
              src="airpods.png"
              alt="airpods"
              className="h-24 w-24 self-center justify-self-center"
            />
            <div>
              <p className="text-lg font-semibold text-gray-700">AirPods Pro</p>
              <div className="flex items-center gap-2 text-gray-700">
                <button className="flex items-center justify-center font-bold">
                  -
                </button>
                <input
                  type="number"
                  className="mt-1 h-6 w-6 rounded-lg px-1 py-0.5 text-center font-semibold text-gray-700 focus:outline-none"
                  min="1"
                  max="10"
                />
                <button className="flex items-center justify-center font-bold">
                  +
                </button>
              </div>
              <button className="absolute right-2 top-0 text-2xl text-gray-700">
                &times;
              </button>
              <a
                href="#"
                className="absolute bottom-2 right-3 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-100 hover:border-stone-500"
              >
                Go to product
              </a>
            </div>
          </div>
        </div>
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
