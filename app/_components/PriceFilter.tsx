import { Slider } from "@/components/ui/slider";

function PriceFilter() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="min" className="text-gray-700">
          Minimum price
        </label>
        <p className="font-semibold text-gray-600">5000</p>
        <Slider defaultValue={[0]} step={50} max={5000} />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="max" className="text-gray-700">
          Maximum price
        </label>
        <p className="font-semibold text-gray-600">5000</p>
        <Slider defaultValue={[5000]} step={50} max={5000} />
      </div>
    </div>
  );
}

export default PriceFilter;
