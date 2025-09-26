import { Slider } from "@/components/ui/slider";

interface PriceFilterProps {
  price: {
    min: number;
    max: number;
  };
  handleFilters: (price: { min: number; max: number }) => void;
}

function PriceFilter({ price, handleFilters }: PriceFilterProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="min" className="text-gray-700">
          Minimum price
        </label>
        <p className="font-semibold text-gray-600">{price.min}$</p>
        <Slider
          defaultValue={[0]}
          step={50}
          max={5000}
          value={[price.min]}
          onValueChange={(val) => {
            handleFilters({ min: val[0], max: price.max });
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-1">
        <label htmlFor="max" className="text-gray-700">
          Maximum price
        </label>
        <p className="font-semibold text-gray-600">{price.max}$</p>
        <Slider
          defaultValue={[5000]}
          step={50}
          min={10}
          max={5000}
          value={[price.max]}
          onValueChange={(val) =>
            handleFilters({ min: price.min, max: val[0] })
          }
        />
      </div>
    </div>
  );
}

export default PriceFilter;
