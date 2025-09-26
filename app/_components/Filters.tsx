"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "../_hooks/useDebounce";
import { FiltersType } from "../_types/types";
import FiltersItem from "./FiltersItem";
import PriceFilter from "./PriceFilter";

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
      ? 5000
      : Number(searchParams.get("max"));

  const router = useRouter();
  const pathname = usePathname();
  const [filtersState, setFilters] = useState<FiltersType>({
    categories: categorySearchParams,
    brands: brandSearchParams,
    price: {
      min: minPriceSearchParams,
      max: maxPriceSearchParams,
    },
  });
  const debouncedFilters = useDebounce(filtersState, 500);

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
    if (!debouncedFilters["price"] || debouncedFilters.price.max === 0) {
      params.delete("max");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    console.log(debouncedFilters);
  }, [debouncedFilters, router, pathname]);

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label
          htmlFor="brand"
          className="ml-2 mt-2 text-xl font-semibold text-gray-600 dark:text-gray-300"
        >
          Brand
        </label>
        <div className="ml-3 mt-2 flex w-full flex-col items-center gap-1 lg:items-start">
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
      <div className="flex flex-col">
        <label
          htmlFor="category"
          className="ml-2 mt-2 text-xl font-semibold text-gray-600 dark:text-gray-300"
        >
          Category
        </label>
        <div className="ml-3 mt-2 flex w-full flex-col items-center gap-1 lg:items-start">
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
      <div className="flex flex-col">
        <label
          htmlFor="price"
          className="ml-2 mt-2 text-xl font-semibold text-gray-600 dark:text-gray-300"
        >
          Price
        </label>
        <div className="ml-3 mt-2 flex w-full flex-col items-center gap-1 lg:items-start">
          <PriceFilter
            price={
              filtersState["price"] ? filtersState.price : { min: 0, max: 5000 }
            }
            handleFilters={handlePriceFilter}
          />
        </div>
      </div>
    </form>
  );
}

export default Filters;
