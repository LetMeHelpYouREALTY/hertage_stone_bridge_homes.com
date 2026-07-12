"use client";

import { useEffect, useState } from "react";

interface RealScoutStickyWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  title?: string;
  subtitle?: string;
}

export function RealScoutStickyWidget({
  agentEncodedId,
  sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
  listingStatus = "For Sale",
  propertyTypes = "SFR,MF",
  priceMin = "600000",
  priceMax = "900000",
  title = "Exclusive Listings",
  subtitle = "Schedule Private Tour",
}: RealScoutStickyWidgetProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show sticky panel after 5 seconds (reduced from 15 seconds for better visibility)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-yellow-400 overflow-hidden w-80 max-h-[600px]">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 text-gray-900">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm text-gray-800">{subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-800 hover:text-gray-600 transition-colors"
              aria-label={isExpanded ? "Collapse listings" : "Expand listings"}
            >
              <svg
                className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-300 ${
            isExpanded ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="p-4">
            <div className="text-center mb-4">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                ${parseInt(priceMin).toLocaleString()} - ${parseInt(priceMax).toLocaleString()}
              </div>
              <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
            </div>

            <div className="min-h-[300px] mb-4">
              <realscout-office-listings
                agent-encoded-id={agentEncodedId}
                sort-order={sortOrder}
                listing-status={listingStatus}
                property-types={propertyTypes}
                price-min={priceMin}
                price-max={priceMax}
                class="w-full"
              />
            </div>

            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 px-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg inline-block text-center"
            >
              Schedule Private Tour
            </a>
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -left-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
          aria-label="Close sticky panel"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
