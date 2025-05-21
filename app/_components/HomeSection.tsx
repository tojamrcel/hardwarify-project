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
    <section className="grid w-full grid-cols-1 place-items-center justify-center rounded-lg bg-white-second px-4 py-8 shadow-md md:grid-cols-2">
      {textPlace === "left" && (
        <>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-center text-4xl font-bold text-gray-700">
              {name}
            </h2>
            <span className="w-full text-center font-semibold">
              ${finalPrice}
              {discountPercent ? ` — ${discountPercent}% off` : null}
            </span>
            <Button type="primary" link={`/products/${id}`}>
              Buy now
            </Button>
          </div>
          <div className="mt-4 md:mt-0">
            <Image
              src={image}
              width={384}
              height={384}
              quality={100}
              alt={name}
              className="w-72 rounded-lg shadow-md md:w-auto"
            />
          </div>
        </>
      )}
      {textPlace === "right" && (
        <>
          <div className="mt-4 md:mt-0">
            <Image
              src={image}
              width={384}
              height={384}
              quality={100}
              alt={name}
              className="w-72 rounded-lg shadow-md md:w-auto"
            />
          </div>
          <div className="row-start-1 flex flex-col items-center gap-2 md:row-auto">
            <h2 className="text-center text-4xl font-bold text-gray-700">
              {name}
            </h2>
            <span className="w-full text-center font-semibold">
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
