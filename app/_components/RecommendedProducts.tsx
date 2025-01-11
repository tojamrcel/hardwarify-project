function RecommendedProducts() {
  return (
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
  );
}

export default RecommendedProducts;
