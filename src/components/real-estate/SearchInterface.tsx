"use client";

import { useEffect, useState } from "react";
import type { PropertySearchResult, SearchFilters as SearchFiltersType } from "../../types/real-estate";
import { PropertyGrid } from "./PropertyGrid";
import { SearchFilters as SearchFiltersComponent } from "./SearchFilters";
import { SortOptions } from "./SortOptions";

export interface SearchInterfaceProps {
  initialFilters?: Partial<SearchFiltersType>;
  onSearch?: (filters: SearchFiltersType) => void;
}

export function SearchInterface({ initialFilters, onSearch }: SearchInterfaceProps) {
  const [filters, setFilters] = useState<SearchFiltersType>({
    priceMin: initialFilters?.priceMin || 0,
    priceMax: initialFilters?.priceMax || 2000000,
    beds: initialFilters?.beds || 0,
    baths: initialFilters?.baths || 0,
    neighborhood: initialFilters?.neighborhood || "",
    propertyType: initialFilters?.propertyType || "all",
    status: initialFilters?.status || "for-sale",
  });

  const [sortBy, setSortBy] = useState<"price" | "beds" | "sqft" | "newest">("newest");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [searchResults, setSearchResults] = useState<PropertySearchResult>({
    listings: [],
    total: 0,
    page: 1,
    hasMore: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const performSearch = async () => {
    setIsLoading(true);

    try {
      // Simulate API call - replace with actual implementation
      const mockResults: PropertySearchResult = {
        listings: [
          {
            mls: "12345",
            price: 750000,
            beds: 3,
            baths: 2,
            sqft: 2500,
            photos: ["/api/placeholder/400/300"],
            address: {
              street: "123 Heritage Way",
              city: "Las Vegas",
              state: "NV",
              zip: "89138",
              neighborhood: "Summerlin",
            },
            agent: {
              id: "agent-123",
              name: "Sarah Johnson",
              phone: "(702) 555-0123",
              email: "DrDuffySells@HeritageStonebridge.com",
            },
            status: "for-sale",
            features: ["Gated Community", "Pool", "Golf Course Access"],
          },
        ],
        total: 1,
        page: 1,
        hasMore: false,
      };

      setSearchResults(mockResults);
      onSearch?.(filters);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults({
        listings: [],
        total: 0,
        page: 1,
        hasMore: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Debounced search effect. `performSearch` is intentionally omitted from
  // the dependency array — it's recreated on every render, and including it
  // would re-trigger the debounce timer on every render instead of only
  // when `filters`/`searchQuery` actually change.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch();
    }, 500);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, searchQuery]);

  const handleLoadMore = async () => {
    if (!searchResults.hasMore || isLoading) return;

    setIsLoading(true);

    try {
      // Simulate loading more results
      const nextPage = searchResults.page + 1;
      // In real implementation, fetch next page from API

      setSearchResults({
        ...searchResults,
        page: nextPage,
        hasMore: false, // Simulate no more results
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSortChange = (
    newSortBy: "price" | "beds" | "sqft" | "newest",
    newSortOrder: "asc" | "desc"
  ) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    performSearch();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Dream Home</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by address, neighborhood, or ZIP code..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery((e.target as HTMLInputElement).value);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            onClick={performSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <SearchFiltersComponent
            filters={filters}
            onFiltersChange={(newFilters: SearchFiltersType) => {
              setFilters(newFilters);
            }}
          />
        </div>

        {/* Results Section */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-600">
              {searchResults.total > 0 && `${searchResults.total} properties found`}
            </div>
            <SortOptions
              sortBy={sortBy}
              sortOrder={sortOrder}
              onSortChange={handleSortChange}
            />
          </div>

          <PropertyGrid
            searchResult={searchResults}
            onLoadMore={handleLoadMore}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
