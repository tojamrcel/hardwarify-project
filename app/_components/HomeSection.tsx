import Button from "./Button";
import Image from "next/image";
import { ProductWithDiscount } from "../_types/types";

function HomeSection({
  textPlace,
  product,
}: {
  textPlace: "left" | "right";
  product: ProductWithDiscount;
}) {
  if (!product) return;
  const {
    id,
    product_name: name,
    discountPercent,
    image,
    discount,
    regular_price: regularPrice,
  } = product;

  const finalPrice = regularPrice - Number(discount);

  return (
    <section className="grid w-full grid-cols-2 place-items-center justify-center rounded-lg bg-white-second px-4 py-8 shadow-md">
      {textPlace === "left" && (
        <>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-center text-4xl font-bold uppercase text-stone-800">
              {name}
            </h2>
            <span className="w-full text-center font-semibold">
              ${finalPrice} &mdash; {discountPercent}% off
            </span>
            <Button type="primary" link={`/products/${id}`}>
              Buy now
            </Button>
          </div>
          <div>
            <Image
              src={image}
              width={384}
              height={384}
              quality={100}
              alt={name}
              className="rounded-lg shadow-md"
            />
          </div>
        </>
      )}
      {textPlace === "right" && (
        <>
          <div>
            <Image
              src={image}
              width={384}
              height={384}
              quality={100}
              alt={name}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-center text-4xl font-bold text-stone-800">
              {name}
            </h2>
            <span className="w-full text-center font-semibold">
              ${finalPrice} &mdash; {discountPercent}% off
            </span>
            <Button type="primary" link={`/products/${id}`}>
              Buy now
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

export default HomeSection;
