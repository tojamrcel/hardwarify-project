import Button from "./_components/Button";
import { getBestsellers, getProductsByCategory } from "./_lib/data_service";
import { sortByDiscount, removeRepeatingProducts } from "./_lib/helpers";
import Image from "next/image";
import Hero from "./_components/Hero";
import Bestsellers from "./_components/Bestsellers";

export default async function Page() {
  const bestsellers = await getBestsellers();
  const sortedBestsellers = sortByDiscount(bestsellers);

  const gaming = await getProductsByCategory("gaming");
  const sortedGaming = removeRepeatingProducts(
    sortByDiscount(gaming),
    sortedBestsellers,
  );

  const mobile = await getProductsByCategory("mobile device");
  const sortedMobile = removeRepeatingProducts(
    sortByDiscount(mobile),
    sortedBestsellers,
  );

  return (
    <>
      <section className="mb-12">
        <Hero />
      </section>
      <section className="mx-auto mb-12 max-w-[600px] md:max-w-[800px] lg:max-w-[1600px]">
        <Bestsellers products={sortedBestsellers.slice(0, 4)} />
      </section>
      <section className="mb-12">
        <section className="mx-auto grid max-w-[1800px] place-items-center gap-8 px-4 lg:grid-cols-2">
          <div className="grid grid-cols-2 place-items-center justify-items-center gap-8 rounded-md bg-gray-200/90 px-4 py-4 shadow-sm dark:bg-gray-800 md:px-16">
            <Image
              src={sortedGaming[0].image}
              width={350}
              height={350}
              alt={sortedGaming[0].product_name}
              className="rounded-md shadow-sm dark:grayscale-[10%]"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-center text-2xl font-bold text-gray-700 dark:text-gray-300 xl:text-3xl">
                {sortedGaming[0].product_name}
              </h3>
              <span className="w-full text-center text-lg font-semibold text-gray-600 dark:text-gray-300 lg:text-xl">
                $
                {sortedGaming[0].regular_price -
                  Number(sortedGaming[0].discount)}
                {sortedGaming[0].discountPercent
                  ? ` — ${sortedGaming[0].discountPercent}% off`
                  : null}
              </span>
              <div className="flex justify-center">
                <Button type="primary" link={`/products/${sortedGaming[0].id}`}>
                  Buy now
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-center justify-items-center gap-8 rounded-md bg-gray-200/90 px-4 py-4 shadow-sm dark:bg-gray-800 md:px-16">
            <Image
              src={sortedMobile[0].image}
              width={350}
              height={350}
              alt={sortedMobile[0].product_name}
              className="rounded-md shadow-sm dark:grayscale-[10%]"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-center text-2xl font-bold text-gray-700 dark:text-gray-300 xl:text-3xl">
                {sortedMobile[0].product_name}
              </h3>
              <span className="w-full text-center text-lg font-semibold text-gray-600 dark:text-gray-300 md:text-xl">
                $
                {sortedMobile[0].regular_price -
                  Number(sortedMobile[0].discount)}
                {sortedMobile[0].discountPercent
                  ? ` — ${sortedMobile[0].discountPercent}% off`
                  : null}
              </span>
              <div className="flex justify-center">
                <Button type="primary" link={`/products/${sortedMobile[0].id}`}>
                  Buy now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
