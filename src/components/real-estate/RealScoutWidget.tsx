"use client";

import { useEffect, useState } from "react";

interface RealScoutWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
}

export function RealScoutWidget({
  agentEncodedId,
  sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
  listingStatus = "For Sale",
  propertyTypes = "SFR,MF",
  priceMin = "500000",
  priceMax = "600000",
}: RealScoutWidgetProps) {
  const [isClient, setIsClient] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsClient(true);

    if (typeof customElements === "undefined") return;

    // Simple check if element is already defined
    if (customElements.get("realscout-office-listings")) {
      setIsReady(true);
      return;
    }

    // Wait for the element to be defined
    customElements
      .whenDefined("realscout-office-listings")
      .then(() => {
        setIsReady(true);
      })
      .catch(() => {
        console.warn("RealScout widget failed to load");
      });
  }, []);

  // Only render on client side to avoid SSR issues with custom elements
  if (!isClient) {
    return (
      <div className="min-h-[400px] bg-gray-50 rounded-lg p-8">
        <div className="text-center text-gray-500">Loading property listings...</div>
      </div>
    );
  }

  return (
    <div className="min-h-[400px] bg-gray-50 rounded-lg p-8">
      {isReady ? (
        <realscout-office-listings
          agent-encoded-id={agentEncodedId}
          sort-order={sortOrder}
          listing-status={listingStatus}
          property-types={propertyTypes}
          price-min={priceMin}
          price-max={priceMax}
          class="w-full"
        />
      ) : (
        <div className="text-center text-gray-500">Loading property listings...</div>
      )}
    </div>
  );
}
