"use client";

import { Product } from "../_types/types";
import ProductItem from "./ProductItem";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <section className="grid grid-cols-5 gap-x-32 gap-y-8">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductsList;
