"use client";

import { useEffect } from "react";

export interface RealScoutAdvancedSearchProps {
  agentEncodedId: string;
  className?: string;
}

export function RealScoutAdvancedSearch({
  agentEncodedId,
  className = "",
}: RealScoutAdvancedSearchProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Ensure RealScout script is loaded
    const checkRealScoutLoaded = () => {
      if (window.customElements?.get("realscout-advanced-search")) {
        // Widget is ready
        return true;
      }
      return false;
    };

    // Wait for RealScout to load
    const waitForRealScout = () => {
      if (checkRealScoutLoaded()) {
        return;
      }

      // Check again in 100ms
      setTimeout(waitForRealScout, 100);
    };

    waitForRealScout();
  }, [agentEncodedId]);

  return (
    <div className={`realscout-widget-container ${className || ""}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Advanced Property Search</h3>
        <p className="text-gray-600">
          Use our advanced search tools to find the perfect home with detailed filters
        </p>
      </div>

      <realscout-advanced-search
        agent-encoded-id={agentEncodedId}
        class="w-full"
      ></realscout-advanced-search>
    </div>
  );
}
