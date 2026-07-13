"use client";

import { useState } from "react";
import type { SearchFilters as SearchFiltersType } from "../../types/real-estate";

export interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
}

export function SearchFilters({ filters, onFiltersChange }: SearchFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilter = (key: keyof SearchFiltersType, value: string | number) => {
    const newFilters = { ...filters, [key]: value };
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters: SearchFiltersType = {
      priceMin: 0,
      priceMax: 2000000,
      beds: 0,
      baths: 0,
      neighborhood: "",
      propertyType: "all",
      status: "for-sale",
    };
    onFiltersChange(clearedFilters);
  };

  const propertyTypes = [
    { value: "all", label: "All Types" },
    { value: "house", label: "Single Family" },
    { value: "condo", label: "Condo" },
    { value: "townhouse", label: "Townhouse" },
  ];

  const statusOptions = [
    { value: "for-sale", label: "For Sale" },
    { value: "pending", label: "Pending" },
    { value: "sold", label: "Sold" },
    { value: "all", label: "All Status" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Search Filters</h3>
          <button
            type="button"
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            aria-expanded={isExpanded}
            aria-label="Toggle filters"
          >
            <svg
              className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="Toggle filters"
            >
              <title>Toggle Filters</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`p-4 space-y-6 ${isExpanded ? "block" : "hidden"}`}>
        {/* Price Range */}
        <div className="space-y-2">
          <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">
            Price Range
          </label>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label htmlFor="price-min" className="sr-only">
                Minimum Price
              </label>
              <input
                id="price-min"
                type="range"
                min="0"
                max="2000000"
                step="25000"
                value={filters.priceMin}
                onChange={(e) => {
                  updateFilter("priceMin", parseInt((e.target as HTMLInputElement).value, 10));
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="price-max" className="sr-only">
                Maximum Price
              </label>
              <input
                id="price-max"
                type="range"
                min="0"
                max="2000000"
                step="25000"
                value={filters.priceMax}
                onChange={(e) => {
                  updateFilter("priceMax", parseInt((e.target as HTMLInputElement).value, 10));
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.priceMin.toLocaleString()}</span>
            <span>${filters.priceMax.toLocaleString()}</span>
          </div>
        </div>

        {/* Bedrooms */}
        <div className="space-y-2">
          <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
            Bedrooms
          </label>
          <select
            id="bedrooms"
            value={filters.beds}
            onChange={(e) => {
              updateFilter("beds", parseInt((e.target as HTMLSelectElement).value, 10));
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={0}>Any</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5+</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
            Bathrooms
          </label>
          <select
            id="bathrooms"
            value={filters.baths}
            onChange={(e) => {
              updateFilter("baths", parseInt((e.target as HTMLSelectElement).value, 10));
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={0}>Any</option>
            <option value={1}>1+</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
            <option value={5}>5+</option>
          </select>
        </div>

        {/* Property Type */}
        <fieldset className="space-y-2">
          <legend className="block text-sm font-medium text-gray-700">Property Type</legend>
          <div className="space-y-2">
            {propertyTypes.map((type) => (
              <label key={type.value} className="flex items-center">
                <input
                  type="radio"
                  name="propertyType"
                  value={type.value}
                  checked={filters.propertyType === type.value}
                  onChange={() => {
                    updateFilter("propertyType", type.value);
                  }}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{type.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Status */}
        <fieldset className="space-y-2">
          <legend className="block text-sm font-medium text-gray-700">Status</legend>
          <div className="space-y-2">
            {statusOptions.map((status) => (
              <label key={status.value} className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value={status.value}
                  checked={filters.status === status.value}
                  onChange={() => {
                    updateFilter("status", status.value);
                  }}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{status.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Neighborhood */}
        <div className="space-y-2">
          <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700">
            Neighborhood
          </label>
          <select
            id="neighborhood"
            value={filters.neighborhood}
            onChange={(e) => {
              updateFilter("neighborhood", (e.target as HTMLSelectElement).value);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Neighborhoods</option>
            <option value="downtown">Downtown</option>
            <option value="summerlin">Summerlin</option>
            <option value="henderson">Henderson</option>
            <option value="green-valley">Green Valley</option>
            <option value="anthem">Anthem</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-between pt-4 border-t border-gray-200">
          <button
            type="button"
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={clearFilters}
          >
            Clear All
          </button>
          <button
            type="button"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => {
              setIsExpanded(false);
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
