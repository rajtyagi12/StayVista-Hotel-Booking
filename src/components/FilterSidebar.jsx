function FilterSidebar({ rating, setRating, sort, setSort }) {
  return (
    <div className="filter-sidebar">

      <h3>Filters</h3>

      <div className="filter-group">
        <label>Minimum Rating</label>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="all">All Ratings</option>
          <option value="4">4+ ⭐</option>
          <option value="4.5">4.5+ ⭐</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Sort By Price</label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

    </div>
  );
}

export default FilterSidebar;