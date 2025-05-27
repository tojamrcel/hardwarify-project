"use client";

import { useState } from "react";
import FilterCategory from "./FilterCategory";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

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

  function handleFilters(cat: string) {
    const params = new URLSearchParams(searchParams);

    if (filters.includes(cat)) {
      setFilters((filters) => {
        params.set(
          "filter",
          [...filters.filter((fil) => fil !== cat)].toString(),
        );
        return [...filters.filter((fil) => fil !== cat)];
      });
    } else
      setFilters((filters) => {
        params.set("filter", [...filters, cat].toString());
        return [...filters, cat];
      });

    if (params.get("filter"))
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    else router.replace(`${pathname}`, { scroll: false });
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <label
          htmlFor="category"
          className="ml-2 mt-2 text-xl font-semibold text-gray-600"
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
    </>
  );
}

export default Filters;
