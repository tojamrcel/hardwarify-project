"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "../_hooks/useDebounce";
import { FiltersType } from "../_types/types";
import FiltersItem from "./FiltersItem";
import PriceFilter from "./PriceFilter";
import { MAX_PRICE } from "../_lib/constants";
import Button from "./Button";
import { FiFilter } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface FiltersProps {
  filters: FiltersType;
}

function Filters({ filters }: FiltersProps) {
  const { brands, categories } = filters;
  const searchParams = useSearchParams();
  const categorySearchParams =
    searchParams
      .get("category")
      ?.split(",")
      .filter((fil) => fil != "") ?? [];
  const brandSearchParams =
    searchParams
      .get("brand")
      ?.split(",")
      .filter((fil) => fil != "") ?? [];
  const minPriceSearchParams = Number(searchParams.get("min"));
  const maxPriceSearchParams =
    Number(searchParams.get("max")) === 0
      ? MAX_PRICE
      : Number(searchParams.get("max"));

  const router = useRouter();
  const pathname = usePathname();
  const [filtersState, setFilters] = useState<FiltersType>({
    categories: categorySearchParams,
    brands: brandSearchParams,
    price: {
      min:
        minPriceSearchParams > maxPriceSearchParams ? 0 : minPriceSearchParams,
      max:
        maxPriceSearchParams < minPriceSearchParams
          ? MAX_PRICE
          : maxPriceSearchParams,
    },
  });
  const debouncedFilters = useDebounce(filtersState, 500);

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  function handleFilters(filterItem: string) {
    if (brands?.includes(filterItem)) {
      if (filtersState.brands?.includes(filterItem)) {
        setFilters((filters) => {
          return {
            ...filters,
            brands: filtersState["brands"]
              ? [...filtersState.brands?.filter((fil) => fil !== filterItem)]
              : [],
          };
        });
      } else
        setFilters((filters) => {
          return {
            ...filters,
            brands: filtersState["brands"]
              ? [...filtersState.brands, filterItem]
              : [],
          };
        });
    }

    if (categories?.includes(filterItem)) {
      if (filtersState.categories?.includes(filterItem)) {
        setFilters((filters) => {
          return {
            ...filters,
            categories: filtersState["categories"]
              ? [
                  ...filtersState.categories?.filter(
                    (fil) => fil !== filterItem,
                  ),
                ]
              : [],
          };
        });
      } else
        setFilters((filters) => {
          return {
            ...filters,
            categories: filtersState["categories"]
              ? [...filtersState.categories, filterItem]
              : [],
          };
        });
    }
  }

  function handlePriceFilter(price: { min: number; max: number }) {
    setFilters((filters) => {
      return { ...filters, price };
    });
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (
      debouncedFilters["categories"] &&
      debouncedFilters.categories.length > 0
    ) {
      params.set("category", [...debouncedFilters.categories].toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    if (
      !debouncedFilters["categories"] ||
      debouncedFilters.categories.length === 0
    ) {
      params.delete("category");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    if (debouncedFilters["brands"] && debouncedFilters.brands.length > 0) {
      params.set("brand", [...debouncedFilters.brands].toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    if (!debouncedFilters["brands"] || debouncedFilters.brands.length === 0) {
      params.delete("brand");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    // min price
    if (debouncedFilters["price"] && debouncedFilters.price.min !== 0) {
      params.set("min", debouncedFilters.price.min.toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    if (!debouncedFilters["price"] || debouncedFilters.price.min === 0) {
      params.delete("min");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    // max price
    if (debouncedFilters["price"] && debouncedFilters.price.max !== 0) {
      params.set("max", debouncedFilters.price.max.toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    if (
      !debouncedFilters["price"] ||
      debouncedFilters.price.max === MAX_PRICE
    ) {
      params.delete("max");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    console.log(debouncedFilters);
  }, [debouncedFilters, router, pathname]);

  return (
    <>
      <div className="flex w-full lg:hidden">
        <Button
          type="primary"
          onClick={() => setIsMobileFiltersOpen((isOpen) => !isOpen)}
        >
          <FiFilter />
          Filters
        </Button>
      </div>
      {/* MOBILE */}
      <section
        className={`fixed p-8 lg:hidden ${isMobileFiltersOpen ? "translate-x-0" : "-translate-x-[999px]"} left-0 top-0 z-[51] h-dvh w-3/4 -translate-x-[999px] bg-gray-50 shadow-md backdrop-blur-lg transition-all duration-150 dark:bg-[#0e131f] md:w-1/2`}
      >
        <div className="mb-4 flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Filters
          </h2>
          <button
            className="flex items-center justify-center text-3xl text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileFiltersOpen(false)}
          >
            <IoClose />
          </button>
        </div>
        <div className="flex h-full flex-col gap-4 overflow-auto">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="brand"
              className="text-lg font-semibold text-gray-600 dark:text-gray-300"
            >
              Brand
            </label>
            <div className="flex w-full flex-col items-center gap-1 px-2 lg:items-start">
              {brands?.map((brand) => (
                <FiltersItem
                  filterItem={brand}
                  key={brand}
                  filters={filtersState}
                  handleFilters={handleFilters}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="category"
              className="text-lg font-semibold text-gray-600 dark:text-gray-300"
            >
              Category
            </label>
            <div className="flex w-full flex-col items-center gap-1 px-2 lg:items-start">
              {categories?.map((cat) => (
                <FiltersItem
                  filterItem={cat}
                  key={cat}
                  filters={filtersState}
                  handleFilters={handleFilters}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="price"
              className="text-lg font-semibold text-gray-600 dark:text-gray-300"
            >
              Price
            </label>
            <div className="flex w-full flex-col items-center gap-1 px-2 lg:items-start">
              <PriceFilter
                price={
                  filtersState["price"]
                    ? filtersState.price
                    : { min: 0, max: MAX_PRICE }
                }
                handleFilters={handlePriceFilter}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DESKTOP */}
      <section className="hidden w-full flex-col items-center justify-self-stretch rounded-md border-2 p-2 px-6 dark:border-gray-700 md:w-3/4 lg:block lg:w-2/6 lg:self-stretch lg:p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="brand"
              className="text-xl font-semibold text-gray-600 dark:text-gray-300"
            >
              Brand
            </label>
            <div className="flex w-full flex-col items-center gap-1 px-2 lg:items-start">
              {brands?.map((brand) => (
                <FiltersItem
                  filterItem={brand}
                  key={brand}
                  filters={filtersState}
                  handleFilters={handleFilters}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="category"
              className="text-xl font-semibold text-gray-600 dark:text-gray-300"
            >
              Category
            </label>
            <div className="flex w-full flex-col items-center gap-1 px-2 lg:items-start">
              {categories?.map((cat) => (
                <FiltersItem
                  filterItem={cat}
                  key={cat}
                  filters={filtersState}
                  handleFilters={handleFilters}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="price"
              className="text-xl font-semibold text-gray-600 dark:text-gray-300"
            >
              Price
            </label>
            <div className="flex w-full flex-col items-center gap-1 px-2 lg:items-start">
              <PriceFilter
                price={
                  filtersState["price"]
                    ? filtersState.price
                    : { min: 0, max: MAX_PRICE }
                }
                handleFilters={handlePriceFilter}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filters;
