/**
 * Canonical Google Business Profile data for this site.
 * Verified from the live GBP location on 2026-08-25.
 *
 * Business: Heritage Stonebridge | Homes By Dr. Jan Duffy
 * Location resource: locations/12019967458497048247
 * Place ID: ChIJOdHQ97m_yIARlY1CLNq9RSY
 *
 * Friday hours note: the GBP listing currently stores Friday as 9:00 AM
 * through 6:00 AM Saturday (overnight). That is treated as a listing typo.
 * Site hours use Friday 9:00 AM–6:00 PM to match Monday–Thursday.
 */

export const GBP = {
  name: "Heritage Stonebridge | Homes By Dr. Jan Duffy",
  alternateName: [
    "Heritage at Stonebridge",
    "Homes By Dr. Jan Duffy",
    "Dr. Jan Duffy Real Estate",
  ],
  category: "Real estate agent",
  description:
    "Your local guide to Heritage at Stonebridge — Lennar's guard-gated 55+ community in Summerlin West (89138). Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties (NV License S.0197614.LLC), helps buyers and sellers with resale and new-build homes, HOA questions, and fair comparisons to Sun City Summerlin and other Summerlin active-adult neighborhoods.\n\nDownsizing, relocating to Las Vegas, or selling inside Heritage? Get MLS-backed pricing, private tours, and straightforward advice.",
  telephoneDisplay: "(702) 789-6561",
  telephoneTel: "+17027896561",
  telephoneSchema: "+1-702-789-6561",
  smsHref: "sms:+17027896561",
  email: "DrDuffySells@HeritageStonebridge.com",
  url: "https://www.heritagestonebridge.com/",
  license: "S.0197614.LLC",
  broker: "Berkshire Hathaway HomeServices Nevada Properties",
  streetAddress: "Crossbridge Dr",
  addressLocality: "Las Vegas",
  addressRegion: "NV",
  postalCode: "89138",
  addressCountry: "US",
  addressDisplay: "Crossbridge Dr, Las Vegas, NV 89138",
  latitude: 36.1647738,
  longitude: -115.3710848,
  geoPosition: "36.1647738;-115.3710848",
  placeId: "ChIJOdHQ97m_yIARlY1CLNq9RSY",
  mapsCid: "2757819091577376149",
  mapsUri: "https://maps.google.com/maps?cid=2757819091577376149",
  mapsEmbedUri:
    "https://www.google.com/maps?q=36.1647738,-115.3710848&z=15&output=embed",
  reviewsUri:
    "https://search.google.com/local/reviews?placeid=ChIJOdHQ97m_yIARlY1CLNq9RSY",
  writeReviewUri:
    "https://search.google.com/local/writereview?placeid=ChIJOdHQ97m_yIARlY1CLNq9RSY",
  directionsUri:
    "https://www.google.com/maps/dir/?api=1&destination=Crossbridge+Dr,+Las+Vegas,+NV+89138&destination_place_id=ChIJOdHQ97m_yIARlY1CLNq9RSY",
  hoursCompact: "Mon–Fri: 9:00 AM–6:00 PM | Sat: 10:00 AM–4:30 PM | Sun: Closed",
  hoursLines: [
    { days: "Monday–Friday", hours: "9:00 AM–6:00 PM" },
    { days: "Saturday", hours: "10:00 AM–4:30 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  specialHours: [
    {
      date: "2026-07-03",
      label: "4th of July (Observed)",
      closed: true,
    },
    {
      date: "2026-07-04",
      label: "4th of July",
      closed: true,
    },
  ],
  areaServed: [
    {
      name: "Las Vegas, NV 89138",
      placeId: "ChIJia0XHDy-yIARCN_51GXLqB4",
    },
    {
      name: "Summerlin West, Las Vegas, NV",
      placeId: "ChIJ29Dxkz6-yIARO689Q1vCQn4",
    },
  ],
  accessibility: [
    "Wheelchair accessible parking lot",
    "Wheelchair accessible entrance",
  ],
  sameAs: [
    "https://www.facebook.com/DrJanDuffyRealEstate",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.instagram.com/drjanduffylasvegas",
    "https://maps.google.com/maps?cid=2757819091577376149",
  ],
} as const;

export type GbpConfig = typeof GBP;
