"use client";

import { useEffect, useState } from "react";
import FilterCategory from "./FilterCategory";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebounce } from "../_hooks/useDebounce";

function Filters({ categories }: { categories: string[] }) {
  const searchParams = useSearchParams();
  const stateSearchParams =
    searchParams
      .get("filter")
      ?.split(",")
      .filter((fil) => fil != "") ?? [];
  const router = useRouter();
  const pathname = usePathname();
  const [filters, setFilters] = useState<string[]>(stateSearchParams);
  const debouncedFilters = useDebounce(filters, 500);

  function handleFilters(cat: string) {
    if (filters.includes(cat)) {
      setFilters((filters) => {
        return [...filters.filter((fil) => fil !== cat)];
      });
    } else
      setFilters((filters) => {
        return [...filters, cat];
      });
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (debouncedFilters.length > 0) {
      params.set("filter", [...debouncedFilters].toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    if (debouncedFilters.length === 0) {
      params.delete("filter");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [debouncedFilters, router, pathname]);

  return (
    <form>
      <div className="flex items-center gap-2">
        <label
          htmlFor="category"
          className="ml-2 mt-2 text-xl font-semibold text-gray-600 dark:text-gray-300"
        >
          Category
        </label>
      </div>
      <div className="ml-3 mt-2 flex w-full flex-col items-center gap-1 lg:items-start">
        {categories.map((cat) => (
          <FilterCategory
            cat={cat}
            key={cat}
            filters={filters}
            handleFilters={handleFilters}
          />
        ))}
      </div>
    </form>
  );
}

export default Filters;
