import { Checkbox } from "@mui/material";

function FilterCategory({
  cat,
  filters,
  handleFilters,
}: {
  cat: string;
  filters: string[];
  handleFilters: (cat: string) => void;
}) {
  return (
    <div
      className="grid w-full grid-cols-[auto_1fr] items-center gap-2"
      key={cat}
    >
      <Checkbox
        color="error"
        value={cat}
        id={cat}
        name="category"
        checked={filters.includes(cat)}
        onChange={() => handleFilters(cat)}
      />
      <label
        htmlFor={cat}
        className="cursor-pointer text-left text-lg text-gray-700"
      >{`${cat.length > 3 ? cat[0].toUpperCase() + cat.slice(1) : cat.toUpperCase()}`}</label>
    </div>
  );
}

export default FilterCategory;
