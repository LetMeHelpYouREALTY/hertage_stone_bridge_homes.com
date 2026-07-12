import type { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * RealScout embeds its search/listing widgets as custom elements (Web
 * Components) loaded from an external script (see the root layout). These
 * type declarations let JSX/TSX reference the custom element tags directly,
 * e.g. `<realscout-office-listings agent-encoded-id="..." />`.
 */
declare module "react" {
  namespace JSX {
    interface RealScoutWidgetAttributes
      extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
      "agent-encoded-id"?: string;
      "sort-order"?: string;
      "listing-status"?: string;
      "property-types"?: string;
      "price-min"?: string | number;
      "price-max"?: string | number;
      class?: string;
    }

    interface IntrinsicElements {
      "realscout-office-listings": RealScoutWidgetAttributes;
      "realscout-simple-search": RealScoutWidgetAttributes;
      "realscout-advanced-search": RealScoutWidgetAttributes;
      "realscout-home-value": RealScoutWidgetAttributes;
    }
  }
}

export {};
