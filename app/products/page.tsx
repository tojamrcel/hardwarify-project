import type { Metadata } from "next";
import Filters from "../_components/Filters";
import ProductsList from "../_components/ProductsList";
import { getProducts } from "../_lib/data_service";
import { HiSearch } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Products",
};

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
    <>
      <div className="mt-8 hidden w-full justify-center">
        <div className="relative flex h-10 w-1/2 items-center justify-center">
          <input
            type="text"
            className="transition-full h-10 w-full rounded-full border-2 border-transparent bg-gray-100 px-4 pl-10 text-gray-600 shadow-md duration-200 placeholder:italic focus:border-red-700 focus:outline-none"
            placeholder="Search for products..."
          />
          <div className="absolute left-4 text-gray-500">
            <HiSearch />
          </div>
        </div>
      </div>
      <section className="m-auto flex h-auto min-h-[80dvh] max-w-[1300px] flex-col gap-8 px-4 py-8 lg:flex-row lg:gap-16 xl:gap-24">
        <section className="flex w-full flex-col items-center justify-self-stretch rounded-md border-2 p-2 px-6 md:w-3/4 lg:block lg:w-2/6 lg:self-stretch lg:p-6">
          <h2 className="text-center text-2xl font-bold text-gray-600 lg:text-left">
            Filters
          </h2>
          <Filters categories={categories} />
        </section>
        <ProductsList products={products} filter={filter} />
      </section>
    </>
  );
}

export default Page;
