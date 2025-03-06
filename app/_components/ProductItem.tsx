import Image from "next/image";
import Link from "next/link";
import { Product } from "../_types/types";

function ProductItem({ product }: { product: Product }) {
  const { id, product_name: name, image, availability } = product;

  return (
    <Link href={`/products/${id}`}>
      <div className="group relative flex h-36 w-auto flex-col items-center justify-center overflow-hidden rounded-md bg-white-second shadow-sm transition-transform duration-300 hover:scale-105 lg:w-36">
        <div className="grid grid-cols-[1fr_2fr] items-center gap-4 px-4 lg:flex lg:justify-center">
          <Image
            className={`w-24 rounded-full ${availability === 0 ? "opacity-50 grayscale" : ""}`}
            src={image}
            width={96}
            height={96}
            alt={name}
          />
          <p className="text-lg font-semibold text-gray-700 lg:hidden">
            {name}
          </p>
        </div>
        <p className="absolute bottom-0 hidden w-full origin-bottom scale-y-0 bg-gray-400 p-1 text-center font-semibold text-stone-100 opacity-75 transition-all duration-200 group-hover:scale-100 lg:block">
          {name}
        </p>
      </div>
    </Link>
  );
}

export default ProductItem;
