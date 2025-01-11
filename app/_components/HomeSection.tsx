import Link from "next/link";
import RecommendedProducts from "./RecommendedProducts";

function HomeSection({ textPlace }: { textPlace: "left" | "right" }) {
  return (
    <>
      <section className="grid w-full grid-cols-2 place-items-center justify-center rounded-lg bg-white-second px-4 py-8">
        {textPlace === "left" && (
          <>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-center text-4xl font-bold text-stone-800">
                TEXT GOES THERE
              </h2>
              <span className="w-full text-center font-semibold">xx% off</span>
              <Link
                href="/"
                className="rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 transition-colors duration-300 hover:bg-red-700"
              >
                Buy now
              </Link>
            </div>
            <div>
              <img src="telefon.png" alt="iphone" className="max-h-96" />
            </div>
          </>
        )}
        {textPlace === "right" && (
          <>
            <div>
              <img src="telefon.png" alt="iphone" className="max-h-96" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-center text-4xl font-bold text-stone-800">
                TEXT GOES THERE
              </h2>
              <span className="w-full text-center font-semibold">xx% off</span>
              <Link
                href="/"
                className="rounded-md bg-red-600 px-4 py-2 font-semibold text-stone-100 transition-colors duration-300 hover:bg-red-700"
              >
                Buy now
              </Link>
            </div>
          </>
        )}
      </section>
      <RecommendedProducts />
    </>
  );
}

export default HomeSection;
