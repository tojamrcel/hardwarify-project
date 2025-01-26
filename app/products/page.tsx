import type { Metadata } from "next";
import FilterCategory from "../_components/FilterCategory";
import ProductsList from "../_components/ProductsList";
import { getProducts } from "../_lib/data_service";

export const metadata: Metadata = {
  title: "Products",
};

async function Page({
  searchparams,
}: {
  searchparams: { filter: string } | undefined;
}) {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map((prod) => prod.category)));
  const filter = searchparams?.filter ?? "all";

  return (
    <section className="flex justify-center gap-24">
      <section className="w-1/4 rounded-md bg-white-second p-6 px-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-700">Filters</h2>
        <label
          htmlFor="category"
          className="ml-2 text-lg font-semibold text-gray-700"
        >
          Category
        </label>
        <div className="ml-3 mt-1 flex w-full flex-col gap-2">
          {categories.map((cat) => (
            <FilterCategory cat={cat} key={cat} />
          ))}
        </div>
      </section>
      <ProductsList products={products} />
    </section>
  );
}

export default Page;
