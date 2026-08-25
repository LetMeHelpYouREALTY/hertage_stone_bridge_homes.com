import { component$ } from "@builder.io/qwik";
import { GBP } from "~/config/gbp";

type GbpActionsProps = {
  variant?: "light" | "dark";
};

export const GbpActions = component$<GbpActionsProps>(({ variant = "light" }) => {
  const isDark = variant === "dark";
  const base =
    "inline-flex items-center justify-center px-5 py-3 rounded-lg font-semibold transition-colors text-center";
  const primary = isDark
    ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
    : "bg-blue-700 text-white hover:bg-blue-800";
  const secondary = isDark
    ? "border-2 border-white text-white hover:bg-white hover:text-blue-700"
    : "border-2 border-blue-700 text-blue-700 hover:bg-blue-50";

  return (
    <div class="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
      <a href={`tel:${GBP.telephoneTel}`} class={`${base} ${primary}`}>
        Call {GBP.telephoneDisplay}
      </a>
      <a href={GBP.smsHref} class={`${base} ${secondary}`}>
        Text {GBP.telephoneDisplay}
      </a>
      <a
        href={GBP.directionsUri}
        target="_blank"
        rel="noopener noreferrer"
        class={`${base} ${secondary}`}
      >
        Directions
      </a>
      <a
        href={GBP.reviewsUri}
        target="_blank"
        rel="noopener noreferrer"
        class={`${base} ${secondary}`}
      >
        View Google Reviews
      </a>
    </div>
  );
});
