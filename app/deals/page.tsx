import type { Metadata } from "next";
import Link from "next/link";
import RecommendedProducts from "../_components/RecommendedProducts";

export const metadata: Metadata = {
  title: "Deals",
};

function Page() {
  return (
    <>
      <h2 className="mb-2 py-2 text-center text-5xl font-bold uppercase tracking-wider text-red-600">
        BEST DEALS
      </h2>
      <section className="flex flex-col items-center rounded-lg bg-white-second py-4">
        <h3 className="text-3xl font-bold text-gray-700">PRODUCT NAME</h3>
        <img src="samsung.png" alt="Samsung" className="w-96" />
        <div className="flex gap-2 text-xl">
          <span className="italic text-gray-700 line-through">499$</span>
          <span className="text-red-600">399$</span>
        </div>
        <Link
          href="/"
          className="mt-4 rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 transition-colors duration-300 hover:bg-red-700"
        >
          Buy now
        </Link>
      </section>
      <RecommendedProducts />
    </>
  );
}

export default Page;
