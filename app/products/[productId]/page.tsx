function Page() {
  return (
    <section className="mt-8 flex flex-col gap-4">
      <div className="flex items-center justify-evenly gap-8 rounded-lg bg-white-second">
        <div className="flex items-center justify-center px-4 py-2">
          <img src="../telefon.png" alt="Iphone 16 Pro" className="w-96" />
        </div>
        <div className="flex w-96 flex-col gap-4 p-4">
          <h2 className="text-4xl font-bold text-gray-700">PRODUCT NAME</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vel
            est. Officia, cumque consequatur, iste explicabo inventore
            voluptates illo quis expedita hic quibusdam eum et dolorem quia
            fugit non dolore.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="mt-1 h-6 w-6 rounded-lg px-1 py-0.5 text-center font-semibold text-gray-700 focus:outline-none"
              min="1"
              max="10"
            />
            <button className="rounded-md bg-red-600 px-2 py-1 font-semibold text-stone-100 transition-colors duration-150 hover:bg-red-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
