"use client";

import { useEffect } from "react";

export interface RealScoutHomeValueProps {
  agentEncodedId: string;
  className?: string;
}

export function RealScoutHomeValue({
  agentEncodedId,
  className = "",
}: RealScoutHomeValueProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Ensure RealScout script is loaded
    const checkRealScoutLoaded = () => {
      if (window.customElements?.get("realscout-home-value")) {
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
      if (typeof window !== "undefined") {
        setTimeout(waitForRealScout, 100);
      }
    };

    waitForRealScout();
  }, [agentEncodedId]);

  return (
    <div className={`realscout-widget-container ${className || ""}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">What's Your Home Worth?</h3>
        <p className="text-gray-600">
          Get an instant home valuation and market analysis for your property
        </p>
      </div>

      <realscout-home-value
        agent-encoded-id={agentEncodedId}
        class="w-full"
      ></realscout-home-value>
    </div>
  );
}
