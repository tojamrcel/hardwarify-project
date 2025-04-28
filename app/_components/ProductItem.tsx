import Image from "next/image";
import { Product } from "../_types/types";
import Button from "./Button";

function ProductItem({ product }: { product: Product }) {
  const {
    id,
    product_name: name,
    image,
    availability,
    regular_price: price,
    discount,
  } = product;

  return (
    <div className="relative grid grid-cols-[auto_1fr] items-center gap-4 bg-white-second shadow-sm">
      <Image
        className={`w-24 rounded-md ${availability === 0 ? "opacity-50 grayscale" : ""}`}
        src={image}
        width={96}
        height={96}
        alt={name}
      />
      <div className="flex flex-col gap-2">
        <p className="py-2 text-lg font-semibold text-gray-600">{name}</p>
        {discount ? (
          <div className="flex gap-2 font-semibold text-gray-500">
            <p className="italic line-through">${price}</p>
            <span className="text-red-600">${price - Number(discount)}</span>
          </div>
        ) : (
          <span className="py-2 font-semibold text-gray-500">{price}$</span>
        )}
      </div>
      <div className="absolute bottom-2 right-2 hidden md:block">
        <Button link={`/products/${id}`} type="primary">
          Buy now
        </Button>
      </div>
      <div className="absolute bottom-2 right-2 md:hidden">
        <Button link={`/products/${id}`} type="secondary">
          Buy now
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
