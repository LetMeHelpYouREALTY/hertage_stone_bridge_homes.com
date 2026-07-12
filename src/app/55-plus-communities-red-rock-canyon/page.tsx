import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ResidentialComplex",
  name: "Heritage at Stonebridge",
  description:
    "Premier 55+ active adult community in Summerlin West, Las Vegas, featuring luxury homes and resort-style amenities near Red Rock Canyon.",
  url: "https://heritagestonebridge.com/55-plus-communities-red-rock-canyon",
  image: "https://heritagestonebridge.com/images/heritage-stonebridge-hero.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Crossbridge Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89138",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1699",
    longitude: "-115.3338",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Gated Community",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Clubhouse",
      value: "8,000 sq ft",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Pickleball Courts",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Swimming Pool",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Fitness Center",
      value: true,
    },
  ],
  numberOfUnits: 421,
  occupancyType: "55+ Active Adult",
  developer: {
    "@type": "Organization",
    name: "Lennar Corporation",
  },
  openingDate: "2025",
  areaServed: {
    "@type": "City",
    name: "Las Vegas, Nevada",
  },
};

export const metadata: Metadata = {
  title: "55+ Communities Red Rock Canyon Las Vegas | Active Adult Living",
  description:
    "Discover luxury 55+ communities near Red Rock Canyon in Las Vegas. Active adult living with golf, amenities, and stunning desert views. Dr. Jan Duffy, your 55+ specialist.",
  openGraph: {
    title: "55+ Communities Red Rock Canyon Las Vegas | Active Adult Living",
    description:
      "Discover luxury 55+ communities near Red Rock Canyon in Las Vegas. Active adult living with golf, amenities, and stunning desert views.",
    type: "website",
    url: "https://heritagestonebridge.com/55-plus-communities-red-rock-canyon",
    images: [{ url: "https://heritagestonebridge.com/images/heritage-stonebridge-hero.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "55+ Communities Red Rock Canyon Las Vegas | Active Adult Living",
    description:
      "Discover luxury 55+ communities near Red Rock Canyon in Las Vegas. Active adult living with golf, amenities, and stunning desert views.",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Dr. Jan Duffy" }],
  alternates: { canonical: "https://heritagestonebridge.com/55-plus-communities-red-rock-canyon" },
};

export default function FiftyFivePlusCommunitiesRedRockCanyonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premier 55+ Communities Near Red Rock Canyon Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover luxury active adult living at Heritage at Stonebridge, Summerlin's most
              prestigious 55+ community. Experience resort-style amenities, gated security, and
              breathtaking Red Rock Canyon views.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
              >
                Schedule Your Private Tour Today
              </a>
              <a
                href="tel:+17022221964"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center"
              >
                Call (702) 789-6561
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">421</div>
              <div className="text-sm">Luxury Homes</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50</div>
              <div className="text-sm">Acres</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">55+</div>
              <div className="text-sm">Active Adult</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2025</div>
              <div className="text-sm">Completion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Heritage at Stonebridge is Las Vegas's Top-Rated 55+ Community
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Heritage at Stonebridge represents the pinnacle of luxury 55+ living in Las Vegas.
                As one of the most sought-after active adult communities near Red Rock Canyon, our
                gated community offers an unparalleled lifestyle for discerning homeowners.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">421 Luxury Homes</h3>
                    <p className="text-gray-600">
                      Three distinct collections: Cromwell, Stirling, and Evander
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Gated Security</h3>
                    <p className="text-gray-600">
                      24/7 security with controlled access and professional monitoring
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Resort-Style Amenities</h3>
                    <p className="text-gray-600">
                      8,000 sq ft clubhouse, pickleball courts, pools, and fitness center
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/heritage-stonebridge-community-overview.webp"
                alt="Heritage at Stonebridge 55+ community overview showing luxury homes and amenities"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold">Luxury Living Awaits</h3>
                <p className="text-sm">Experience the finest in active adult community living</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unmatched Location: Minutes from Red Rock Canyon & Downtown Summerlin
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Heritage at Stonebridge's prime location in Summerlin West offers the perfect balance
              of natural beauty and urban convenience, making it one of the most desirable 55+
              communities near Red Rock Canyon Las Vegas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Red Rock Canyon</h3>
              <p className="text-gray-600 mb-4">
                Just 15 minutes to world-famous Red Rock Canyon National Conservation Area
              </p>
              <div className="text-sm text-blue-600 font-medium">Distance: 12 miles</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown Summerlin</h3>
              <p className="text-gray-600 mb-4">
                Premium shopping, dining, and entertainment at Downtown Summerlin
              </p>
              <div className="text-sm text-green-600 font-medium">Distance: 8 miles</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Facilities</h3>
              <p className="text-gray-600 mb-4">
                Multiple hospitals and medical centers within 10 minutes
              </p>
              <div className="text-sm text-purple-600 font-medium">Distance: 5-10 miles</div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Heritage at Stonebridge Location Map
              </h3>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.1234567890!2d-115.3338!3d36.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c1234567890%3A0x1234567890abcdef!2sHeritage%20at%20Stonebridge%2C%20Las%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Heritage at Stonebridge Location Map"
                ></iframe>
              </div>
              <div className="mt-4 text-center text-gray-600">
                <p>
                  <strong>Address:</strong> Crossbridge Dr, Las Vegas, NV 89138
                </p>
                <p>
                  <strong>Neighborhood:</strong> Summerlin West, Stonebridge Village
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Collections Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Three Distinct Home Collections: Cromwell, Stirling & Evander
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Heritage at Stonebridge offers three carefully designed home collections, each
              tailored to different lifestyles and preferences. From intimate single-story designs
              to spacious luxury estates, find your perfect 55+ home for sale in Summerlin.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cromwell Collection */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <img
                src="/images/cromwell-collection-heritage-stonebridge.webp"
                alt="Cromwell Collection Heritage at Stonebridge floor plans"
                className="w-full h-48 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cromwell Collection</h3>
              <p className="text-gray-700 mb-4">
                Perfect for those seeking intimate, low-maintenance living with modern amenities and
                efficient use of space.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Square Feet:</span>
                  <span className="font-semibold">1,400 - 1,800 sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms:</span>
                  <span className="font-semibold">2 - 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms:</span>
                  <span className="font-semibold">2 - 2.5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Price:</span>
                  <span className="font-bold text-blue-600">$650,000</span>
                </div>
              </div>
              <a
                href="/floor-plans/cromwell"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-block"
              >
                View Cromwell Floor Plans
              </a>
            </div>

            {/* Stirling Collection */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg border-2 border-blue-200">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <img
                src="/images/stirling-collection-heritage-stonebridge.webp"
                alt="Stirling Collection Heritage at Stonebridge luxury homes"
                className="w-full h-48 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stirling Collection</h3>
              <p className="text-gray-700 mb-4">
                The perfect balance of space and luxury, featuring open-concept designs and premium
                finishes throughout.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Square Feet:</span>
                  <span className="font-semibold">1,800 - 2,400 sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms:</span>
                  <span className="font-semibold">3 - 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms:</span>
                  <span className="font-semibold">2.5 - 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Price:</span>
                  <span className="font-bold text-blue-600">$750,000</span>
                </div>
              </div>
              <a
                href="/floor-plans/stirling"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-block"
              >
                View Stirling Floor Plans
              </a>
            </div>

            {/* Evander Collection */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
              <img
                src="/images/evander-collection-heritage-stonebridge.webp"
                alt="Evander Collection Heritage at Stonebridge luxury estates"
                className="w-full h-48 object-cover rounded-lg mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evander Collection</h3>
              <p className="text-gray-700 mb-4">
                Ultimate luxury living with expansive layouts, premium features, and uncompromising
                attention to detail.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Square Feet:</span>
                  <span className="font-semibold">2,400 - 3,200 sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms:</span>
                  <span className="font-semibold">3 - 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms:</span>
                  <span className="font-semibold">3 - 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Starting Price:</span>
                  <span className="font-bold text-blue-600">$850,000</span>
                </div>
              </div>
              <a
                href="/floor-plans/evander"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-block"
              >
                View Evander Floor Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Lifestyle Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Resort-Style Amenities & Active Adult Lifestyle
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience the ultimate in gated 55+ communities with amenities designed to enhance
              your active adult lifestyle. From fitness and recreation to social gatherings,
              Heritage at Stonebridge offers everything you need for vibrant living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8,000 Sq Ft Clubhouse</h3>
              <p className="text-gray-600">
                Spacious gathering areas, meeting rooms, and event spaces for community activities
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pickleball Courts</h3>
              <p className="text-gray-600">
                Multiple courts for America's fastest-growing sport among active adults
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resort-Style Pool</h3>
              <p className="text-gray-600">
                Heated pool with cabanas, spa, and poolside relaxation areas
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fitness Center</h3>
              <p className="text-gray-600">State-of-the-art equipment and group fitness classes</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Library & Game Room</h3>
              <p className="text-gray-600">
                Quiet reading spaces and entertainment areas for socializing
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Security</h3>
              <p className="text-gray-600">Gated entrance with professional security monitoring</p>
            </div>
          </div>

          {/* Lifestyle Activities */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Active Adult Lifestyle Programs
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Fitness & Wellness</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Morning yoga and meditation classes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Water aerobics in the heated pool
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Personal training sessions available
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Walking clubs and hiking groups
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Social & Cultural</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Book clubs and discussion groups
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Cooking classes and wine tastings
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Art workshops and craft sessions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Community events and holiday celebrations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Value Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Smart Investment: Summerlin Property Values & Market Trends
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Heritage at Stonebridge represents not just a lifestyle choice, but a smart real
              estate investment in one of Las Vegas's most desirable and stable markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Summerlin Real Estate Market Performance
              </h3>
              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Strong Appreciation</h4>
                  <p className="text-gray-700 mb-2">
                    Summerlin properties have shown consistent appreciation over the past decade:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 15% average annual appreciation (2019-2024)</li>
                    <li>• 8% year-over-year growth in 2024</li>
                    <li>• Strong demand from California retirees</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">55+ Community Premium</h4>
                  <p className="text-gray-700 mb-2">
                    Active adult communities command premium pricing:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 12% higher resale values vs. traditional homes</li>
                    <li>• Lower maintenance costs and HOA management</li>
                    <li>• Consistent demand from aging population</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Location Advantages</h4>
                  <p className="text-gray-700 mb-2">
                    Heritage at Stonebridge's location offers unique benefits:
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Proximity to Red Rock Canyon increases desirability</li>
                    <li>• Summerlin West continues to develop and appreciate</li>
                    <li>• Limited inventory in gated 55+ communities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">HOA & Financial Information</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Monthly HOA Fee:</span>
                    <span className="font-semibold text-gray-900">$285</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Master Association:</span>
                    <span className="font-semibold text-gray-900">$125</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Total Monthly:</span>
                    <span className="font-bold text-blue-600 text-lg">$410</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Property Tax Rate:</span>
                    <span className="font-semibold text-gray-900">~1.1%</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">What's Included in HOA:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Exterior maintenance and landscaping</li>
                    <li>• Clubhouse and amenity access</li>
                    <li>• Security and gated access</li>
                    <li>• Common area utilities</li>
                    <li>• Reserve fund for future improvements</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Investment Benefits</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-white p-4 rounded-lg shadow">
                    <div className="text-2xl font-bold text-green-600 mb-1">Low Risk</div>
                    <div className="text-sm text-gray-600">Stable market</div>
                  </div>
                  <div className="text-center bg-white p-4 rounded-lg shadow">
                    <div className="text-2xl font-bold text-blue-600 mb-1">High Demand</div>
                    <div className="text-sm text-gray-600">Limited inventory</div>
                  </div>
                  <div className="text-center bg-white p-4 rounded-lg shadow">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Tax Benefits</div>
                    <div className="text-sm text-gray-600">Nevada advantages</div>
                  </div>
                  <div className="text-center bg-white p-4 rounded-lg shadow">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">Lifestyle</div>
                    <div className="text-sm text-gray-600">Premium amenities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your New Neighborhood: Stonebridge Village & Summerlin West
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Heritage at Stonebridge is perfectly positioned within Stonebridge Village, offering
              easy access to world-class amenities, entertainment, and services that make Summerlin
              West one of Las Vegas's most sought-after areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Parks & Recreation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Red Rock Canyon National Conservation Area
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Summerlin Trail System (50+ miles)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Angel Park Golf Club
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Stonebridge Village Park
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Shopping & Dining</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Downtown Summerlin (Premium shopping)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Red Rock Casino Resort & Spa
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Trader Joe's & Whole Foods
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Fine dining restaurants
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Facilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Summerlin Hospital Medical Center
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Cleveland Clinic Lou Ruvo Center
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Multiple urgent care centers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Specialist medical offices
                </li>
              </ul>
            </div>
          </div>

          {/* Transportation & Accessibility */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Transportation & Accessibility
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Airport Access</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">McCarran International Airport:</span>
                    <span className="font-semibold">25 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Private Aviation:</span>
                    <span className="font-semibold">Henderson Executive Airport</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Highway Access</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">I-215 Beltway:</span>
                    <span className="font-semibold">5 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">US-95:</span>
                    <span className="font-semibold">10 minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About Heritage at Stonebridge
            </h2>
            <p className="text-lg text-gray-700">
              Get answers to the most common questions about our 55+ community near Red Rock Canyon.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is the minimum age for Heritage at Stonebridge?
              </h3>
              <p className="text-gray-700">
                Heritage at Stonebridge is designed for active adults aged 55 and older. At least
                one resident in each household must be 55 or older, while spouses or partners can be
                45 or older. This age restriction ensures a community of like-minded individuals
                seeking an active adult lifestyle.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much do homes cost at Heritage at Stonebridge?
              </h3>
              <p className="text-gray-700 mb-3">
                Home prices at Heritage at Stonebridge vary by collection and floor plan:
              </p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>
                  • <strong>Cromwell Collection:</strong> Starting from $650,000
                </li>
                <li>
                  • <strong>Stirling Collection:</strong> Starting from $750,000
                </li>
                <li>
                  • <strong>Evander Collection:</strong> Starting from $850,000
                </li>
              </ul>
              <p className="text-gray-700 mt-3">
                Prices include premium finishes, energy-efficient features, and access to all
                community amenities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What amenities are included in Heritage at Stonebridge?
              </h3>
              <p className="text-gray-700 mb-3">
                Residents enjoy access to a comprehensive suite of resort-style amenities:
              </p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• 8,000 sq ft clubhouse with meeting rooms and event spaces</li>
                <li>• Multiple pickleball courts</li>
                <li>• Resort-style heated pool with cabanas and spa</li>
                <li>• State-of-the-art fitness center</li>
                <li>• Library and game room</li>
                <li>• 24/7 gated security</li>
                <li>• Landscaped common areas and walking paths</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Is Heritage at Stonebridge a gated community?
              </h3>
              <p className="text-gray-700">
                Yes, Heritage at Stonebridge is a fully gated community with controlled access and
                24/7 security monitoring. The gated entrance provides residents with peace of mind
                and ensures that only authorized visitors can enter the community. Professional
                security services monitor the community around the clock.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is the HOA fee and what does it include?
              </h3>
              <p className="text-gray-700 mb-3">The total monthly HOA fee is $410, which includes:</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Community HOA: $285/month</li>
                <li>• Master Association: $125/month</li>
              </ul>
              <p className="text-gray-700 mt-3">
                This fee covers exterior maintenance, landscaping, clubhouse access, security,
                common area utilities, and reserve funds for future improvements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How close is Heritage at Stonebridge to Red Rock Canyon?
              </h3>
              <p className="text-gray-700">
                Heritage at Stonebridge is located just 12 miles (approximately 15 minutes) from Red
                Rock Canyon National Conservation Area. This proximity allows residents to easily
                enjoy hiking, rock climbing, scenic drives, and the natural beauty of one of
                Nevada's most iconic landscapes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                When will Heritage at Stonebridge be completed?
              </h3>
              <p className="text-gray-700">
                Heritage at Stonebridge is scheduled for completion in 2025. The community will
                feature 421 luxury homes across 50 acres, with construction progressing in phases.
                Early buyers can secure their preferred lot locations and customize their homes with
                premium finishes and upgrades.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What builder is constructing Heritage at Stonebridge?
              </h3>
              <p className="text-gray-700">
                Heritage at Stonebridge is being developed by Lennar Corporation, one of America's
                leading homebuilders with over 65 years of experience. Lennar is known for quality
                construction, innovative floor plans, and comprehensive warranties. Their
                "Everything's Included" approach means premium features come standard with every
                home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Luxury 55+ Living Near Red Rock Canyon?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the waitlist for Heritage at Stonebridge and be among the first to experience
            Summerlin's most prestigious active adult community. Limited homes available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Schedule Your Private Tour Today
            </a>
            <a
              href="tel:+17022221964"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center"
            >
              Call (702) 789-6561
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Limited</div>
              <div className="text-sm text-blue-100">Homes Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2025</div>
              <div className="text-sm text-blue-100">Move-In Ready</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">55+</div>
              <div className="text-sm text-blue-100">Active Adult</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-200 text-sm">
              <strong>Address:</strong> Crossbridge Dr, Las Vegas, NV 89138
              <br />
              <strong>Neighborhood:</strong> Summerlin West, Stonebridge Village
              <br />
              <strong>Developer:</strong> Lennar Corporation
            </p>
          </div>
        </div>
      </section>

      {/* Red Rock Canyon 55+ Communities Listings Widget */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Red Rock Canyon 55+ Community Listings</h2>
            <p className="text-lg text-gray-600">Explore available properties in Las Vegas's premier Red Rock Canyon active adult communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR"
            priceMin={500000}
            priceMax={1200000}
          />
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Red Rock Canyon 55+ Communities"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="1200000"
      />
    </>
  );
}
