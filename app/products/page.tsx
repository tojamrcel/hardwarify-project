import type { Metadata } from "next";
import Filters from "../_components/Filters";
import ProductsList from "../_components/ProductsList";
import { getCategories, getProducts } from "../_lib/data_service";
import SearchField from "../_components/SearchField";
import ClientPagination from "../_components/ClientPagination";
import { Suspense } from "react";
import Loader from "../_components/Loader";

export const metadata: Metadata = {
  title: "Products",
};

async function Page({
  searchParams,
}: {
  searchParams: Promise<
    { filter: string; search: string; page: string } | undefined
  >;
}) {
  const params = await searchParams;
  const page = params?.page ?? 1;
  const filter = params?.filter ? params?.filter?.split(",") : undefined;
  const { data: products, count } = await getProducts(
    params?.search,
    Number(page),
    filter,
  );
  const categories = await getCategories();

  return (
    <div className="mx-auto max-w-[1300px] px-4">
      <SearchField />
      <section className="m-auto flex h-auto min-h-[80dvh] max-w-[1300px] flex-col items-center gap-8 py-8 lg:flex-row lg:items-start lg:gap-8 xl:gap-16">
        <section className="flex w-full flex-col items-center justify-self-stretch rounded-md border-2 p-2 px-6 dark:border-gray-700 md:w-3/4 lg:block lg:w-2/6 lg:self-stretch lg:p-6">
          <h2 className="text-center text-2xl font-bold text-gray-600 dark:text-gray-200 lg:text-left">
            Filters
          </h2>
          <Suspense fallback={<Loader />}>
            <Filters categories={categories} />
          </Suspense>
        </section>
        <Suspense fallback={<Loader />}>
          {products.length > 0 ? (
            <ProductsList products={products} />
          ) : (
            <div className="mt-16 flex w-full justify-center text-2xl md:w-3/4">
              <p className="text-gray-600 dark:text-gray-300">
                Unfortunately, we don&apos;t have the products you&apos;re
                looking for.
              </p>
            </div>
          )}
        </Suspense>
      </section>
      {/* {products.length > 0 && <ClientPagination productsCount={count} />} */}
    </div>
  );
}

export default Page;
