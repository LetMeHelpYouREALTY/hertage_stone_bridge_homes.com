import { component$ } from "@builder.io/qwik";
import { localBusinessJsonLd } from "~/lib/local-business-schema";

export const LocalBusinessJsonLd = component$(() => {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={localBusinessJsonLd} />
  );
});
