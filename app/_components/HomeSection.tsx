import Button from "./Button";
import RecommendedProducts from "./RecommendedProducts";

function HomeSection({ textPlace }: { textPlace: "left" | "right" }) {
  return (
    <>
      <section className="grid w-full grid-cols-2 place-items-center justify-center rounded-lg bg-white-second px-4 py-8 shadow-md">
        {textPlace === "left" && (
          <>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-center text-4xl font-bold text-stone-800">
                TEXT GOES THERE
              </h2>
              <span className="w-full text-center font-semibold">xx% off</span>
              <Button type="primary" link="/">
                Buy now
              </Button>
            </div>
            <div>
              <img
                src="iphone16pro.jpg"
                alt="iphone"
                className="max-h-96 rounded-lg shadow-md"
              />
            </div>
          </>
        )}
        {textPlace === "right" && (
          <>
            <div>
              <img
                src="playstation5pro.jpg"
                alt="iphone"
                className="max-h-96 rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-center text-4xl font-bold text-stone-800">
                TEXT GOES THERE
              </h2>
              <span className="w-full text-center font-semibold">xx% off</span>
              <Button type="primary" link="/">
                Buy now
              </Button>
            </div>
          </>
        )}
      </section>
      <RecommendedProducts />
    </>
  );
}

export default HomeSection;
