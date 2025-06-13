import HomeSection from "./_components/HomeSection";
import RecommendedProducts from "./_components/RecommendedProducts";
import { getBestsellers, getProductsByCategory } from "./_lib/data_service";
import { sortByDiscount, removeRepeatingProducts } from "./_lib/helpers";

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
        <HomeSection product={sortedBestsellers[0]} textPlace="left" />
        <div className="px-2">
          <RecommendedProducts products={sortedBestsellers.slice(1, 4)} />
        </div>
      </section>

      <h2 className="py-2 text-center text-4xl font-extrabold uppercase text-gray-700 md:font-bold lg:text-5xl dark:text-gray-200">
        Gaming
      </h2>
      <section className="mb-16">
        <HomeSection product={sortedGaming[0]} textPlace="right" />
        <div className="px-2">
          <RecommendedProducts products={sortedGaming.slice(1, 4)} />
        </div>
      </section>

      <h2 className="py-2 text-center text-4xl font-extrabold uppercase text-gray-700 md:font-bold lg:text-5xl dark:text-gray-200">
        Mobile devices
      </h2>
      <section className="mb-16">
        <HomeSection product={sortedMobile[0]} textPlace="left" />
        <div className="px-2">
          <RecommendedProducts products={sortedMobile.slice(1, 4)} />
        </div>
      </section>
    </>
  );
}
