import { Checkbox } from "@mui/material";
import colors from "tailwindcss/colors";
import { red } from "@mui/material/colors";

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
        color="primary"
        value={cat}
        id={cat}
        name="category"
        checked={filters.includes(cat)}
        onChange={() => handleFilters(cat)}
        sx={{
          ".dark &": { color: colors.gray["600"] },
          ".dark &.Mui-checked": {
            color: red[700],
          },
        }}
      />
      <label
        htmlFor={cat}
        className="cursor-pointer text-left text-lg text-gray-700 dark:text-gray-200"
      >{`${cat.length > 3 ? cat[0].toUpperCase() + cat.slice(1) : cat.toUpperCase()}`}</label>
    </div>
  );
}

export default FilterCategory;
