import type { Metadata } from "next";
import Filters from "../_components/Filters";
import ProductsList from "../_components/ProductsList";
import { getProducts } from "../_lib/data_service";

export const metadata: Metadata = {
  title: "Products",
};
// { filter: string } | undefined;
async function Page({
  searchParams,
}: {
  searchParams: Promise<{ filter: string } | undefined>;
}) {
  const params = await searchParams;
  const products = await getProducts();
  const categories = Array.from(new Set(products.map((prod) => prod.category)));
  const filter = params?.filter?.split(",") ?? "all";

  return (
    <section className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16 xl:gap-24">
      <section className="flex w-full flex-col items-center rounded-md bg-white-second p-2 px-6 shadow-md sm:w-3/4 lg:block lg:w-1/4 lg:p-6">
        <h2 className="text-center text-xl font-bold text-gray-700 lg:text-left">
          Filters
        </h2>
        <Filters categories={categories} />
      </section>
      <ProductsList products={products} filter={filter} />
    </section>
  );
}

export default Page;
