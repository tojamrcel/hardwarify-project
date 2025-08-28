import Button from "./_components/Button";
import RecommendedProducts from "./_components/RecommendedProducts";
import { getBestsellers, getProductsByCategory } from "./_lib/data_service";
import { sortByDiscount, removeRepeatingProducts } from "./_lib/helpers";
import heroimg from "../public/hero.jpg";
import Image from "next/image";

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
      <section className="mb-16">
        <section className="flex justify-center bg-gray-200/90 dark:bg-gray-800">
          <div className="grid w-full max-w-[1600px] grid-cols-1 place-items-center justify-center bg-gray-200/90 py-16 md:grid-cols-[1fr_1fr] md:gap-32">
            <div className="flex flex-col items-center gap-2 md:justify-self-end">
              <h2 className="px-2 text-center text-7xl font-bold text-gray-700 dark:text-gray-200">
                SAVE UP TO 50%
              </h2>
              <span className="w-full text-center text-2xl text-gray-600 dark:text-gray-300">
                Limited time offers on best-selling items
              </span>
              <Button type="primary" link="/products">
                SEE OFFER
              </Button>
            </div>
            <div className="mt-4 md:mt-0 md:justify-self-start">
              <Image
                src={heroimg}
                width={400}
                height={400}
                placeholder="blur"
                alt="nintendo console"
                className="rounded-lg shadow-md dark:grayscale-[40%] md:w-auto"
              />
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-[1600px] px-8">
          <RecommendedProducts products={sortedBestsellers.slice(0, 4)} />
        </div>
      </section>
    </>
  );
}
