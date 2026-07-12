"use client";

import { useEffect, useState } from "react";

interface RealScoutPremiumWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  title?: string;
  subtitle?: string;
}

export function RealScoutPremiumWidget({
  agentEncodedId,
  sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
  listingStatus = "For Sale",
  propertyTypes = "SFR,MF",
  priceMin = "700000",
  priceMax = "1200000",
  title = "Premium Estate Homes",
  subtitle = "Exclusive Luxury Properties",
}: RealScoutPremiumWidgetProps) {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsClient(true);

    // Wait for RealScout script to load
    const checkRealScout = () => {
      if (customElements?.get("realscout-office-listings")) {
        setIsVisible(true);
      } else {
        setTimeout(checkRealScout, 100);
      }
    };

    // Start checking after a short delay
    setTimeout(checkRealScout, 1000);

    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("[data-premium-widget]");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  if (!isClient) {
    return (
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-gray-300">{subtitle}</p>
          </div>
          <div className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-lg font-semibold mb-2">Loading Premium Estates...</div>
              <div className="text-sm">Heritage at Stonebridge</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-900" data-premium-widget>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-gray-300">{subtitle}</p>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gray-800 rounded-2xl shadow-xl border-2 border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Estate Collection</h3>
              <p className="text-gray-300">
                Ultra-luxury homes ${parseInt(priceMin).toLocaleString()} - $
                {parseInt(priceMax).toLocaleString()}
              </p>
            </div>
            <div className="p-6">
              <realscout-office-listings
                agent-encoded-id={agentEncodedId}
                sort-order={sortOrder}
                listing-status={listingStatus}
                property-types={propertyTypes}
                price-min={priceMin}
                price-max={priceMax}
                class="w-full min-h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
