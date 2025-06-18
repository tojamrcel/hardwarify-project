"use client";

import { Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { PRODUCTS_PER_PAGE } from "../_lib/constants";
import { gray } from "tailwindcss/colors";

function ClientPagination({ productsCount }: { productsCount: number }) {
  const params = useSearchParams();
  const pathname = usePathname();
  const [curPage, setCurPage] = useState(
    params.get("page") ? Number(params.get("page")) : 1,
  );
  const pageCount = Math.ceil(productsCount / PRODUCTS_PER_PAGE);
  const router = useRouter();

  function handleChange(_: ChangeEvent<unknown>, value: number) {
    const searchParams = new URLSearchParams(params);
    setCurPage(value);
    searchParams.set("page", value.toString());
    router.replace(`${pathname}?${searchParams.toString()}`);
  }

  useEffect(() => {
    if (Number(params?.get("page")) > pageCount) {
      setCurPage(1);
      const searchParams = new URLSearchParams(params);
      searchParams.set("page", String(1));
      router.replace(`${pathname}?${searchParams.toString()}`);
    }
  }, [pageCount, params, router, pathname]);

  return (
    <div className="my-2 flex justify-center">
      <Pagination
        count={pageCount}
        page={curPage}
        onChange={handleChange}
        sx={{
          ".MuiButtonBase-root": {
            "&": {
              color: gray[700],
            },
            ".dark &": {
              color: gray[300],
              ":hover": {
                bgcolor: gray[800],
              },
            },
          },
          ".Mui-selected": {
            bgcolor: gray[200],
          },
          ".dark & .Mui-selected": {
            bgcolor: gray[800],
          },
        }}
      />
    </div>
  );
}

export default ClientPagination;
