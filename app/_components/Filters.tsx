"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "../_hooks/useDebounce";
import { FiltersType } from "../_types/types";
import FiltersCategoryItem from "./FiltersCategoryItem";

function Filters({ categories }: { categories: string[] }) {
  const searchParams = useSearchParams();
  const categorySearchParams =
    searchParams
      .get("category")
      ?.split(",")
      .filter((fil) => fil != "") ?? [];

  const router = useRouter();
  const pathname = usePathname();
  const [filters, setFilters] = useState<FiltersType>({
    category: categorySearchParams,
  });
  const debouncedFilters = useDebounce(filters, 500);

  function handleCategoryFilters(cat: string) {
    if (filters.category?.includes(cat)) {
      setFilters((filters) => {
        return {
          ...filters,
          category: filters["category"]
            ? [...filters.category?.filter((fil) => fil !== cat)]
            : [],
        };
      });
    } else
      setFilters((filters) => {
        return {
          ...filters,
          category: filters["category"] ? [...filters.category, cat] : [],
        };
      });
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (debouncedFilters["category"] && debouncedFilters.category.length > 0) {
      params.set("category", [...debouncedFilters.category].toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    if (
      !debouncedFilters["category"] ||
      debouncedFilters.category.length === 0
    ) {
      params.delete("category");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
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
          {categories.map((cat) => (
            <FiltersCategoryItem
              cat={cat}
              key={cat}
              filters={filters}
              handleFilters={handleCategoryFilters}
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
          {categories.map((cat) => (
            <FiltersCategoryItem
              cat={cat}
              key={cat}
              filters={filters}
              handleFilters={handleCategoryFilters}
            />
          ))}
        </div>
      </div>
    </form>
  );
}

export default Filters;
