import type { Metadata } from "next";
import Image from "next/image";
import Button from "../_components/Button";
import RecommendedProducts from "../_components/RecommendedProducts";
import { getProducts } from "../_lib/data_service";
import { sortByDiscount } from "../_lib/helpers";

export const metadata: Metadata = {
  title: "Deals",
};

async function Page() {
  const products = await getProducts();
  const sortedProducts = sortByDiscount(products);
  const bestDeal = sortedProducts?.at(0);

  const {
    id,
    product_name: name,
    regular_price: regularPrice = 0,
    discount = 0,
    image = "",
  } = bestDeal || {};

  return (
    <>
      <h2 className="mb-2 py-2 text-center text-3xl font-bold uppercase tracking-wider text-red-600 underline md:text-4xl lg:text-5xl">
        HOT DEALS
      </h2>
      <section className="flex flex-col items-center rounded-lg bg-white-second py-4">
        <h3 className="text-2xl font-bold text-gray-700 md:text-3xl">{name}</h3>
        <Image
          src={image}
          alt="Samsung"
          width={384}
          height={384}
          quality={95}
          className="my-4 w-64 rounded-full md:w-72 lg:w-auto"
        />
        <div className="mb-4 flex gap-2 text-xl">
          <span className="italic text-gray-700 line-through">
            {regularPrice}$
          </span>
          <span className="text-red-600">
            {regularPrice - Number(discount)}$
          </span>
        </div>
        <Button type="primary" link={`/products/${id}`}>
          Buy now
        </Button>
      </section>
      <RecommendedProducts products={sortedProducts.slice(1, 4)} />
    </>
  );
}

export default Page;
