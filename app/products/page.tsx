import type { Metadata } from "next";
import ProductItem from "../_components/ProductItem";
import { getProducts } from "../_lib/data_service";
import FilterCategory from "../_components/FilterCategory";

export const metadata: Metadata = {
  title: "Products",
};

async function Page() {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map((prod) => prod.category)));

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
      <section className="grid grid-cols-5 gap-x-32 gap-y-8">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
}

export default Page;
