import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="grid w-full grid-cols-2 place-items-center justify-center rounded-lg bg-white-second px-4 py-8">
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
      </section>
      <section className="mt-10 grid grid-cols-3 gap-8">
        <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2">
          <img src="xxx" alt="xxx" className="w-1/3" />
          <div>
            <h3>Product</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2">
          <img src="xxx" alt="xxx" className="w-1/3" />
          <div>
            <h3>Product</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2">
          <img src="xxx" alt="xxx" className="w-1/3" />
          <div>
            <h3>Product</h3>
          </div>
        </div>
      </section>
    </>
  );
}
