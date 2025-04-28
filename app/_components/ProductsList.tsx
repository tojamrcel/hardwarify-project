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
    <ul className="flex w-full flex-col gap-4 md:w-3/4">
      {filter === "all"
        ? products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : products
            .filter((prod) => filter.includes(prod.category))
            .map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
    </ul>
  );
}

export default ProductsList;
