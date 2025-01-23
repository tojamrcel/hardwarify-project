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
      <h2 className="mb-2 py-2 text-center text-5xl font-bold uppercase tracking-wider text-gray-700 underline">
        BESTSELLERS
      </h2>
      <section className="mb-16">
        <HomeSection product={sortedBestsellers[0]} textPlace="left" />
        <RecommendedProducts products={sortedBestsellers.slice(1, 4)} />
      </section>

      <h2 className="mb-2 py-2 text-center text-5xl font-bold uppercase text-gray-700">
        Gaming
      </h2>
      <section className="mb-16">
        <HomeSection product={sortedGaming[0]} textPlace="right" />
        <RecommendedProducts products={sortedGaming.slice(1, 4)} />
      </section>

      <h2 className="mb-2 py-2 text-center text-5xl font-bold uppercase text-gray-700">
        Mobile devices
      </h2>
      <section className="mb-16">
        <HomeSection product={sortedMobile[0]} textPlace="left" />
        <RecommendedProducts products={sortedMobile.slice(1, 4)} />
      </section>
    </>
  );
}
