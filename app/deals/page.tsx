import type { Metadata } from "next";
import Button from "../_components/Button";
import RecommendedProducts from "../_components/RecommendedProducts";

export const metadata: Metadata = {
  title: "Deals",
};

function Page() {
  return (
    <>
      <h2 className="mb-2 py-2 text-center text-5xl font-bold uppercase tracking-wider text-red-600 underline">
        BEST DEALS
      </h2>
      <section className="flex flex-col items-center rounded-lg bg-white-second py-4">
        <h3 className="text-3xl font-bold text-gray-700">PRODUCT NAME</h3>
        <img src="s24.jpg" alt="Samsung" className="my-4 w-96 rounded-full" />
        <div className="mb-4 flex gap-2 text-xl">
          <span className="italic text-gray-700 line-through">499$</span>
          <span className="text-red-600">399$</span>
        </div>
        <Button type="primary" link="/">
          Buy now
        </Button>
      </section>
      {/* <RecommendedProducts /> */}
    </>
  );
}

export default Page;
