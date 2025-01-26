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
    <div className="flex items-center gap-3" key={cat}>
      <input
        type="checkbox"
        name="category"
        value={cat}
        onChange={() => handleFilters(cat)}
        checked={filters.includes(cat)}
      />
      <p className="text-md text-gray-700">{`${cat.length > 3 ? cat[0].toUpperCase() + cat.slice(1) : cat.toUpperCase()}`}</p>
    </div>
  );
}

export default FilterCategory;
