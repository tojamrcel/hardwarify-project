import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
};

function Page() {
  return (
    <section className="grid-cols-2">
      <h1 className="text-4xl font-bold text-gray-700">Cart</h1>
      <div className="p-4">
        <div className="grid max-w-5xl grid-cols-[8rem_3fr] items-center justify-center gap-4 rounded-lg bg-white-second px-4 py-2">
          <img
            src="airpods.png"
            alt="airpods"
            className="h-24 w-24 self-center justify-self-center"
          />
          <div>
            <p className="text-lg font-semibold text-gray-700">AirPods Pro</p>
            <input
              type="number"
              className="mt-1 h-6 w-6 rounded-lg px-1 py-0.5 text-center font-semibold text-gray-700 focus:outline-none"
              min="1"
              max="10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
