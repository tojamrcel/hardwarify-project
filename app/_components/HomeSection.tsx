import Link from "next/link";

type productData = {
  name: string;
  description: string;
  regularPrice: number;
  discount: number;
  img: string;
};

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
      <section className="mt-10 grid grid-cols-3 gap-8">
        <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2">
          <div className="flex w-full items-center justify-center">
            <img src="airpods.png" alt="xxx" className="max-h-48 w-1/2" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-stone-800">Product</h3>
            <span className="font-semibold">$300</span>
            <a
              href="#"
              className="mt-1 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-100 hover:border-stone-500"
            >
              Go to product
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2">
          <div className="flex w-full items-center justify-center">
            <img src="airpods.png" alt="xxx" className="max-h-48 w-1/2" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-stone-800">Product</h3>
            <span className="font-semibold">$300</span>
            <a
              href="#"
              className="mt-1 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-100 hover:border-stone-500"
            >
              Go to product
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2">
          <div className="flex w-full items-center justify-center">
            <img src="airpods.png" alt="xxx" className="max-h-48 w-1/2" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-stone-800">Product</h3>
            <span className="font-semibold">$300</span>
            <a
              href="#"
              className="mt-1 border-b-2 border-transparent px-0.5 pb-[-0.25rem] pt-1 font-semibold text-stone-500 transition-colors duration-100 hover:border-stone-500"
            >
              Go to product
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSection;
