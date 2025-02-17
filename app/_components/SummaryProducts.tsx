import SummaryProductItem from "./SummaryProductItem";

function SummaryProducts() {
  return (
    <div className="flex max-h-[65%] w-full flex-col items-start justify-start gap-2 overflow-auto px-4 py-4">
      <SummaryProductItem />
    </div>
  );
}

export default SummaryProducts;
