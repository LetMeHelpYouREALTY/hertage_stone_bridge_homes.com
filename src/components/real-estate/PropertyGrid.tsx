"use client";

import { useEffect, useRef, useState } from "react";
import type { PropertySearchResult } from "../../types/real-estate";
import { PropertyCard } from "./PropertyCard";

export interface PropertyGridProps {
  searchResult: PropertySearchResult;
  onLoadMore?: () => void;
  isLoading?: boolean;
}

export function PropertyGrid({ searchResult, onLoadMore, isLoading = false }: PropertyGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [, setIsIntersecting] = useState(false);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!gridRef.current || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && onLoadMore && !isLoading) {
          onLoadMore();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    observer.observe(gridRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isLoading, onLoadMore]);

  if (searchResult.listings.length === 0 && !isLoading) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-label="No properties found"
          >
            <title>No Properties Found</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your search criteria to find more properties.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">{searchResult.total} properties found</div>
        {searchResult.total > 0 && (
          <div className="text-sm text-gray-500">
            Page {searchResult.page} of {Math.ceil(searchResult.total / 20)}
          </div>
        )}
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResult.listings.map((listing) => (
          <div key={listing.mls} className="animate-fade-in">
            <PropertyCard listing={listing} />
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Loading more properties...</p>
        </div>
      )}

      {onLoadMore && searchResult.hasMore && !isLoading && (
        <div className="text-center pt-8">
          <button
            type="button"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            onClick={onLoadMore}
          >
            Load More Properties
          </button>
        </div>
      )}

      {!searchResult.hasMore && searchResult.listings.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>You've reached the end of the results</p>
        </div>
      )}
    </div>
  );
}
