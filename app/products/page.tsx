import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

function Page() {
  return (
    <section className="flex justify-center">
      <section></section>
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
