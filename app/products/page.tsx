import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

function Page() {
  return (
    <section className="flex justify-center gap-24">
      <section className="rounded-md bg-white-second p-8 px-10">
        <h2 className="text-xl font-bold text-gray-700">Filters</h2>
        <label
          htmlFor="category"
          className="ml-2 text-lg font-semibold text-gray-700"
        >
          Category
        </label>
        <div className="ml-3 flex flex-col">
          <div className="flex items-center gap-3">
            <input type="checkbox" name="category" value="smartphones" />
            <p className="text-md text-gray-700">Smartphones</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-5 gap-32">
        <a href="#">
          <div className="group relative flex h-36 w-36 flex-col items-center justify-center overflow-hidden rounded-md bg-white-second transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center">
              <img className="w-20" src="airpods.png" alt="airpods" />
            </div>
            <p className="absolute bottom-0 w-full origin-bottom scale-y-0 bg-gray-400 p-1 text-center font-semibold text-stone-100 transition-all duration-200 group-hover:scale-100">
              AirPods Pro
            </p>
          </div>
        </a>
      </section>
    </section>
  );
}

export default Page;
