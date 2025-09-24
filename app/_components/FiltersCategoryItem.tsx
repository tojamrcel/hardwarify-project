import { Checkbox } from "./Checkbox";
import { FiltersType } from "../_types/types";

function FiltersCategoryItem({
  cat,
  filters,
  handleFilters,
}: {
  cat: string;
  filters: FiltersType;
  handleFilters: (cat: string) => void;
}) {
  return (
    <div
      className="grid w-full grid-cols-[auto_1fr] items-center gap-4"
      key={cat}
    >
      <Checkbox
        id={cat}
        name="category"
        checked={filters.category?.includes(cat)}
        onCheckedChange={() => handleFilters(cat)}
      />
      <label
        htmlFor={cat}
        className="cursor-pointer text-left text-lg text-gray-700 dark:text-gray-300"
      >{`${cat.length > 3 ? cat[0].toUpperCase() + cat.slice(1) : cat.toUpperCase()}`}</label>
    </div>
  );
}

export default FiltersCategoryItem;
