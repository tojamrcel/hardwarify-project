import type { Metadata } from "next";
import { Suspense } from "react";
import Button from "../_components/Button";
import ClientPagination from "../_components/ClientPagination";
import Filters from "../_components/Filters";
import Loader from "../_components/Loader";
import ProductsList from "../_components/ProductsList";
import SearchField from "../_components/SearchField";
import { MAX_PRICE } from "../_lib/constants";
import { getBrands, getCategories, getProducts } from "../_lib/data_service";
import { FiFilter } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Products",
};

async function Page({
  searchParams,
}: {
  searchParams: Promise<
    | {
        category: string;
        brand: string;
        min: string;
        max: string;
        search: string;
        page: string;
      }
    | undefined
  >;
}) {
  const params = await searchParams;
  const page = params?.page ?? 1;
  const categoryFilter = params?.category
    ? params?.category?.split(",")
    : undefined;
  const brandFilter = params?.brand ? params?.brand?.split(",") : undefined;
  const priceFilter = {
    min: params?.min ? Number(params.min) : 0,
    max: params?.max ? Number(params.max) : MAX_PRICE,
  };
  const { data: products, count } = await getProducts(
    params?.search,
    Number(page),
    { categories: categoryFilter, brands: brandFilter, price: priceFilter },
  );

  const [categories, brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);

  return (
    <div className="mx-auto max-w-[1300px] px-4">
      <SearchField />
      <div className="flex w-full justify-between px-2 pt-4">
        <div className="lg:hidden">
          <Button type="primary">
            <FiFilter />
            Filters
          </Button>
        </div>
      </div>
      <section className="m-auto flex h-auto max-w-[1300px] flex-col items-center gap-8 py-8 pt-4 lg:flex-row lg:items-start lg:gap-8 xl:gap-16">
        <section className="flex w-full flex-col items-center justify-self-stretch rounded-md border-2 p-2 px-6 dark:border-gray-700 md:w-3/4 lg:block lg:w-2/6 lg:self-stretch lg:p-6">
          <Suspense fallback={<Loader />}>
            <Filters filters={{ categories, brands }} />
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
      {products.length > 0 && <ClientPagination productsCount={count} />}
    </div>
  );
}

export default Page;
