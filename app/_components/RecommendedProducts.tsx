import Image from "next/image";
import { Product } from "../_types/types";

function RecommendedProducts({ products }: { products: Product[] }) {
  return (
    <section className="mt-10 grid grid-cols-3 gap-8">
      <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2 shadow-sm">
        <div className="flex w-full items-center justify-center">
          <Image
            src="/airpodspro.jpg"
            alt="xxx"
            width={192}
            height={192}
            className="w-1/2 rounded-md shadow-md"
          />
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
      <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2 shadow-sm">
        <div className="flex w-full items-center justify-center">
          <Image
            src="/playstation5pro.jpg"
            alt="xxx"
            width={192}
            height={192}
            className="max-h-48 w-1/2 rounded-md shadow-md"
          />
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
      <div className="grid grid-cols-2 rounded-md bg-white-second px-4 py-2 shadow-sm">
        <div className="flex w-full items-center justify-center">
          <Image
            src="/iphone16pro.jpg"
            alt="xxx"
            width={192}
            height={192}
            className="max-h-48 w-1/2 rounded-md shadow-md"
          />
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
  );
}

export default RecommendedProducts;
