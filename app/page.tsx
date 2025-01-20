import HomeSection from "./_components/HomeSection";

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
