import Image from "next/image";
import { ProductWithDiscount } from "../_types/types";
import Button from "./Button";

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
    <section className="grid w-full grid-cols-1 place-items-center justify-center rounded-lg bg-gray-200 py-16 shadow-md dark:bg-gray-800 md:grid-cols-2 md:gap-32 lg:gap-64">
      {textPlace === "left" && (
        <>
          <div className="flex flex-col items-center gap-2 md:justify-self-end">
            <h2 className="px-2 text-center text-5xl font-bold text-gray-700 dark:text-gray-200">
              {name}
            </h2>
            <span className="w-full text-center text-xl font-semibold dark:text-gray-200">
              ${finalPrice}
              {discountPercent ? ` — ${discountPercent}% off` : null}
            </span>
            <Button type="primary" link={`/products/${id}`}>
              Buy now
            </Button>
          </div>
          <div className="mt-4 md:mt-0 md:justify-self-start">
            <Image
              src={image}
              width={384}
              height={384}
              quality={100}
              alt={name}
              className="w-72 rounded-lg shadow-md dark:grayscale-[40%] md:w-auto"
            />
          </div>
        </>
      )}
      {textPlace === "right" && (
        <>
          <div className="mt-4 md:mt-0 md:justify-self-end">
            <Image
              src={image}
              width={384}
              height={384}
              quality={100}
              alt={name}
              className="w-72 rounded-lg shadow-md dark:grayscale-[40%] md:w-auto"
            />
          </div>
          <div className="row-start-1 flex flex-col items-center gap-2 md:row-auto md:justify-self-start">
            <h2 className="px-2 text-center text-5xl font-bold text-gray-700 dark:text-gray-200">
              {name}
            </h2>
            <span className="w-full text-center text-xl font-semibold dark:text-gray-200">
              ${finalPrice}
              {discountPercent ? ` — ${discountPercent}% off` : null}
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
