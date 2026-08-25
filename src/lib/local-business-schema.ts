import { GBP } from "~/config/gbp";

export function getPostalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: GBP.streetAddress,
    addressLocality: GBP.addressLocality,
    addressRegion: GBP.addressRegion,
    postalCode: GBP.postalCode,
    addressCountry: GBP.addressCountry,
  };
}

export function getGeoCoordinates() {
  return {
    "@type": "GeoCoordinates",
    latitude: GBP.latitude,
    longitude: GBP.longitude,
  };
}

export function getOpeningHoursSpecification() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:30",
    },
  ];
}

export function getSpecialOpeningHoursSpecification() {
  return GBP.specialHours.map((entry) => ({
    "@type": "OpeningHoursSpecification",
    validFrom: entry.date,
    validThrough: entry.date,
    opens: "00:00",
    closes: "00:00",
  }));
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${GBP.url}#localbusiness`,
    name: GBP.name,
    alternateName: [...GBP.alternateName],
    description: GBP.description,
    url: GBP.url,
    telephone: GBP.telephoneSchema,
    email: GBP.email,
    image: {
      "@type": "ImageObject",
      url: "https://www.heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
      width: 400,
      height: 400,
    },
    logo: {
      "@type": "ImageObject",
      url: "https://www.heritagestonebridge.com/images/heritage-stonebridge-logo.jpg",
      width: 600,
      height: 300,
    },
    address: getPostalAddress(),
    geo: getGeoCoordinates(),
    hasMap: GBP.mapsUri,
    openingHoursSpecification: getOpeningHoursSpecification(),
    specialOpeningHoursSpecification: getSpecialOpeningHoursSpecification(),
    areaServed: GBP.areaServed.map((area) => ({
      "@type": "Place",
      name: area.name,
      "@id": `https://www.google.com/maps/place/?q=place_id:${area.placeId}`,
    })),
    amenityFeature: GBP.accessibility.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Check, Financing",
    knowsAbout: [
      "Heritage at Stonebridge",
      "Summerlin West real estate",
      "55+ active adult communities",
      "Lennar new-build homes",
      "Sun City Summerlin comparisons",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
      identifier: GBP.license,
    },
    memberOf: {
      "@type": "Organization",
      name: GBP.broker,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: GBP.telephoneSchema,
        email: GBP.email,
        areaServed: "US-NV",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: GBP.smsHref,
        telephone: GBP.telephoneSchema,
        areaServed: "US-NV",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [...GBP.sameAs],
  };
}

export const localBusinessJsonLd = JSON.stringify(getLocalBusinessSchema());
