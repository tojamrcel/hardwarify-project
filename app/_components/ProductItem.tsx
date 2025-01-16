function ProductItem() {
  return (
    <a href="#">
      <div className="group relative flex h-36 w-36 flex-col items-center justify-center overflow-hidden rounded-md bg-white-second shadow-sm transition-transform duration-300 hover:scale-105">
        <div className="flex items-center justify-center">
          <img className="w-24 rounded-full" src="s24.jpg" alt="s24" />
        </div>
        <p className="absolute bottom-0 w-full origin-bottom scale-y-0 bg-gray-400 p-1 text-center font-semibold text-stone-100 opacity-75 transition-all duration-200 group-hover:scale-100">
          AirPods Pro
        </p>
      </div>
    </a>
  );
}

export default ProductItem;
