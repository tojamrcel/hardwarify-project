import type { Metadata } from "next";
import ProductsList from "../_components/ProductsList";
import { getProducts } from "../_lib/data_service";
import Filters from "../_components/Filters";

export const metadata: Metadata = {
  title: "Products",
};

async function Page({
  searchParams,
}: {
  searchParams: { filter: string } | undefined;
}) {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map((prod) => prod.category)));
  const filter = searchParams?.filter ?? "all";

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
        <Filters categories={categories} />
      </section>
      <ProductsList products={products} />
    </section>
  );
}

export default Page;
