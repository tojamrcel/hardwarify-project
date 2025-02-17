function SummaryProductItem() {
  return (
    <div className="grid w-full flex-shrink-0 grid-cols-[8rem_3fr] overflow-hidden rounded-lg bg-white-second">
      <img src="/person.jpg" width="96" height="96" alt="" className="" />
      <div className="flex h-full w-full items-center justify-between pr-4">
        <p className="font-semibold uppercase tracking-tighter text-gray-600">
          product name
        </p>
        <div className="flex flex-col justify-center text-center font-semibold">
          <p className="text-red-600">2x</p>
          <p className="text-gray-600">399$</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryProductItem;
