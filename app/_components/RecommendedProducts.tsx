import { Product } from "../_types/types";
import RecommendedItem from "./RecommendedItem";

function RecommendedProducts({ products }: { products: Product[] }) {
  return (
    <section className="mt-10 grid gap-8 md:grid-cols-4">
      {products.slice(0, 4).map((product) => (
        <RecommendedItem product={product} key={product.id} />
      ))}
    </section>
  );
}

export default RecommendedProducts;
