import type { Metadata } from "next";
import Filters from "../_components/Filters";
import ProductsList from "../_components/ProductsList";
import { getProducts } from "../_lib/data_service";
import SearchField from "../_components/SearchField";

export const metadata: Metadata = {
  title: "Products",
};

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ filter: string; search: string } | undefined>;
}) {
  const params = await searchParams;
  const products = await getProducts(params?.search);
  const categories = Array.from(new Set(products.map((prod) => prod.category)));
  const filter = params?.filter?.split(",") ?? "all";

  return (
    <div className="mx-auto max-w-[1300px] px-4">
      <SearchField />
      {products.length > 0 && (
        <section className="m-auto flex h-auto min-h-[80dvh] max-w-[1300px] flex-col items-center gap-8 py-8 lg:flex-row lg:items-start lg:gap-8 xl:gap-16">
          <section className="flex w-full flex-col items-center justify-self-stretch rounded-md border-2 p-2 px-6 md:w-3/4 lg:block lg:w-2/6 lg:self-stretch lg:p-6 dark:border-gray-700">
            <h2 className="text-center text-2xl font-bold text-gray-600 lg:text-left dark:text-gray-200">
              Filters
            </h2>
            <Filters categories={categories} />
          </section>
          <ProductsList products={products} filter={filter} />
        </section>
      )}
      {products.length === 0 && (
        <div className="mt-16 flex w-full justify-center text-2xl">
          <p className="text-gray-600 dark:text-gray-300">
            Unfortunately, we don&apos;t have the products you&apos;re looking
            for.
          </p>
        </div>
      )}
    </div>
  );
}

export default Page;
