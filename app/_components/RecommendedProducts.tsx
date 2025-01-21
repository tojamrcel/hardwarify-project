import { Product } from "../_types/types";
import RecommendedItem from "./RecommendedItem";

function RecommendedProducts({ products }: { products: Product[] }) {
  return (
    <section className="mt-10 grid grid-cols-3 gap-8">
      {products.slice(0, 3).map((product) => (
        <RecommendedItem product={product} key={product.id} />
      ))}
    </section>
  );
}

export default RecommendedProducts;
