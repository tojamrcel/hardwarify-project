import Link from "next/link";
import { Product } from "../_types/types";
import Image from "next/image";

function ProductItem({ product }: { product: Product }) {
  const { id, product_name: name, image } = product;

  return (
    <Link href={`/products/${id}`}>
      <div className="group relative flex h-36 w-36 flex-col items-center justify-center overflow-hidden rounded-md bg-white-second shadow-sm transition-transform duration-300 hover:scale-105">
        <div className="flex items-center justify-center">
          <Image
            className="w-24 rounded-full"
            src={image}
            width={96}
            height={96}
            alt={name}
          />
        </div>
        <p className="absolute bottom-0 w-full origin-bottom scale-y-0 bg-gray-400 p-1 text-center font-semibold text-stone-100 opacity-75 transition-all duration-200 group-hover:scale-100">
          {name}
        </p>
      </div>
    </Link>
  );
}

export default ProductItem;
