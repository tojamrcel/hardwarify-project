import HomeSection from "./_components/HomeSection";

const sampleData = [
  {
    title: "iPhone 16 Pro Max",
    description: "The best iPhone ever",
    regularPrice: 1099,
    discount: 0,
    image: "telefon.png",
    category: "smartphones",
  },
  {
    title: "Samsung Galaxy S24",
    description: "The best Samsung phone",
    regularPrice: 1199,
    discount: 100,
    image: "samsung.png",
    category: "smartphones",
  },
  {
    title: "PlayStation 5 Pro",
    description: "The best PlayStation console",
    regularPrice: 699,
    discount: 30,
    image: "https://via.placeholder.com/300",
    category: "gaming",
  },
];

export default function Page() {
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
