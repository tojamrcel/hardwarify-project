"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";

function SearchField() {
  const params = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>(
    () => params.get("search") ?? "",
  );
  const router = useRouter();
  const pathname = usePathname();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value.trimEnd());
  }

  useEffect(() => {
    if (searchValue.length > 0) {
      const searchParams = new URLSearchParams(params);
      searchParams.set("search", searchValue);
      router.replace(`${pathname}?${searchParams.toString()}`, {
        scroll: false,
      });
    } else {
      const searchParams = new URLSearchParams(params);
      searchParams.delete("search");
      router.replace(`${pathname}?${searchParams.toString()}`, {
        scroll: false,
      });
    }
  }, [searchValue, pathname, router, params]);

  return (
    <div className="mt-8 flex w-full justify-center">
      <div className="relative flex h-10 w-1/2 items-center justify-center">
        <input
          type="text"
          className="h-10 w-full rounded-full border-2 border-transparent bg-gray-100 px-4 pl-10 text-gray-600 shadow-md duration-200 placeholder:italic focus:border-red-700 focus:outline-none dark:bg-gray-700 dark:text-gray-300"
          placeholder="Search for products..."
          onChange={onChange}
          value={searchValue}
        />
        <div className="absolute left-4 text-gray-500">
          <HiSearch />
        </div>
      </div>
    </div>
  );
}

export default SearchField;
