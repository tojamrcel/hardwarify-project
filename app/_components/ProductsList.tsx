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
    <section className="grid grid-cols-5 gap-x-32 gap-y-8">
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
