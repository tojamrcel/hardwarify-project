import HomeSection from "./_components/HomeSection";
import { getBestsellers } from "./_lib/data_service";

export default async function Page() {
  const bestsellers = await getBestsellers();
  const bestsellersWithDiscount = bestsellers.map((prod) => {
    return {
      ...prod,
      discountPercent: Math.round(
        (Number(prod.discount) / prod.regular_price) * 100,
      ),
    };
  });
  const sortedProducts = bestsellersWithDiscount.sort(
    (a, b) => b.discountPercent - a.discountPercent,
  );

  return (
    <>
      <h2 className="mb-2 py-2 text-center text-5xl font-bold uppercase tracking-wider text-gray-700 underline">
        BESTSELLERS
      </h2>
      <section className="mb-16">
        <HomeSection textPlace="left" />
      </section>

      <h2 className="mb-2 py-2 text-center text-5xl font-bold uppercase text-gray-700">
        Gaming
      </h2>
      <section className="mb-16">
        <HomeSection textPlace="right" />
      </section>

      <h2 className="mb-2 py-2 text-center text-5xl font-bold uppercase text-gray-700">
        SMARTPHONES
      </h2>
      <section className="mb-16">
        <HomeSection textPlace="left" />
      </section>
    </>
  );
}
