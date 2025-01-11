import type { Metadata } from "next";
import ProductItem from "../_components/ProductItem";

export const metadata: Metadata = {
  title: "Products",
};

function Page() {
  return (
    <section className="flex justify-center gap-24">
      <section className="rounded-md bg-white-second p-8 px-10">
        <h2 className="text-xl font-bold text-gray-700">Filters</h2>
        <label
          htmlFor="category"
          className="ml-2 text-lg font-semibold text-gray-700"
        >
          Category
        </label>
        <div className="ml-3 mt-1 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <input type="checkbox" name="category" value="smartphones" />
            <p className="text-md text-gray-700">Smartphones</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="category" value="headphones" />
            <p className="text-md text-gray-700">Headphones</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="category" value="pc-gear" />
            <p className="text-md text-gray-700">Gear</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" name="category" value="gaming" />
            <p className="text-md text-gray-700">Gaming</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-5 gap-x-32 gap-y-8">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </section>
    </section>
  );
}

export default Page;
