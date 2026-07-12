"use client";

export interface SortOptionsProps {
  sortBy: "price" | "beds" | "sqft" | "newest";
  sortOrder: "asc" | "desc";
  onSortChange: (sortBy: "price" | "beds" | "sqft" | "newest", sortOrder: "asc" | "desc") => void;
}

export function SortOptions({ sortBy, sortOrder, onSortChange }: SortOptionsProps) {
  const handleSortByChange = (newSortBy: "price" | "beds" | "sqft" | "newest") => {
    onSortChange(newSortBy, sortOrder);
  };

  const handleSortOrderToggle = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    onSortChange(sortBy, newOrder);
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700" htmlFor="sort-by">
        Sort by:
      </label>
      <select
        id="sort-by"
        value={sortBy}
        onChange={(e) => {
          handleSortByChange(
            (e.target as HTMLSelectElement).value as "price" | "beds" | "sqft" | "newest"
          );
        }}
        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="price">Price</option>
        <option value="beds">Bedrooms</option>
        <option value="sqft">Square Feet</option>
        <option value="newest">Newest</option>
      </select>
      <button
        type="button"
        className="p-1 text-gray-600 hover:text-gray-900 transition-colors"
        onClick={handleSortOrderToggle}
        title={`Sort ${sortOrder === "asc" ? "descending" : "ascending"}`}
      >
        <svg
          className={`w-4 h-4 transition-transform ${sortOrder === "desc" ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Sort Arrow</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
}
