"use client";

import { Product } from "../_types/types";
import ProductItem from "./ProductItem";

function ProductsList({
  products,
  filter,
}: {
  products: Product[];
  filter: string[] | "all";
}) {
  return (
    <section className="grid w-full gap-4 gap-y-4 sm:w-3/4 md:grid-cols-2 lg:w-auto lg:grid-cols-4 lg:gap-x-12 xl:grid-cols-6 xl:gap-x-24">
      {filter === "all"
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : products
            .filter((prod) => filter.includes(prod.category))
            .map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
    </section>
  );
}

export default ProductsList;
