import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Homes for Sale in Stonebridge, Summerlin, Las Vegas NV | Dr. Jan Duffy",
  description:
    "Discover luxury homes for sale in Stonebridge, Summerlin, Las Vegas NV. Gated community with resort amenities, mountain views, and active adult living. Dr. Jan Duffy, your Stonebridge specialist.",
  openGraph: {
    title: "Homes for Sale in Stonebridge, Summerlin, Las Vegas NV | Dr. Jan Duffy",
    description:
      "Discover luxury homes for sale in Stonebridge, Summerlin, Las Vegas NV. Gated community with resort amenities, mountain views, and active adult living.",
    type: "website",
    url: "https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin",
    images: [{ url: "https://heritagestonebridge.com/images/stonebridge-homes-hero.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homes for Sale in Stonebridge, Summerlin, Las Vegas NV | Dr. Jan Duffy",
    description:
      "Discover luxury homes for sale in Stonebridge, Summerlin, Las Vegas NV. Gated community with resort amenities, mountain views, and active adult living.",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Dr. Jan Duffy" }],
  alternates: {
    canonical: "https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin",
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Homes for Sale in Stonebridge, Summerlin, Las Vegas NV",
  description:
    "Discover luxury homes for sale in Stonebridge, Summerlin, Las Vegas NV. Gated community with resort amenities, mountain views, and active adult living.",
  url: "https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin",
  image: "https://heritagestonebridge.com/images/stonebridge-homes-hero.webp",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "ResidentialComplex",
          name: "Stonebridge Community",
          url: "https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://heritagestonebridge.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Homes for Sale in Stonebridge",
      item: "https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin",
    },
  ],
};

const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy - Stonebridge Real Estate Specialist",
  description:
    "Las Vegas Real Estate Expert specializing in Stonebridge, Summerlin homes for sale. Licensed Nevada Real Estate Professional.",
  url: "https://heritagestonebridge.com/homes-for-sale-stonebridge-summerlin",
  telephone: "702-789-6561",
  email: "DrDuffySells@HeritageStonebridge.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89138",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1699",
    longitude: "-115.1398",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Las Vegas, Nevada",
    },
    {
      "@type": "City",
      name: "Summerlin, Nevada",
    },
    {
      "@type": "Place",
      name: "Stonebridge Community",
    },
  ],
  serviceType: [
    "Stonebridge Home Sales",
    "Summerlin Real Estate",
    "Luxury Home Sales",
    "Gated Community Properties",
  ],
  openingHours: "Mo-Su 08:00-20:00",
  sameAs: [
    "https://www.facebook.com/DrJanDuffyRealEstate",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.instagram.com/drjanduffylasvegas",
  ],
};

export default function HomesForSaleStonebridgeSummerlinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Homes for Sale in Stonebridge, Summerlin, Las Vegas NV
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover luxury living in Stonebridge, Summerlin's premier gated community. Three distinct home collections from Lennar with prices starting from $464,990. Currently 15 homes available for sale with resort-style amenities, mountain views, and active adult lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              View Available Homes
            </a>
            <a
              href="tel:702-789-6561"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 inline-block text-center"
            >
              Call Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Stonebridge, Summerlin?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stonebridge offers the perfect blend of luxury living, resort amenities, and prime
              Summerlin location for discerning homebuyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gated Security */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Gated Security</h3>
                <p className="text-gray-600">
                  24/7 gated access with professional security ensuring privacy and peace of mind
                  for all residents.
                </p>
              </div>
            </div>

            {/* Resort Amenities */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Resort Amenities</h3>
                <p className="text-gray-600">
                  8,000 sq ft clubhouse, resort-style pool & heated lap pool, fitness center, pickleball & bocce courts, walking trails, and RV parking for active living.
                </p>
              </div>
            </div>

            {/* Prime Location */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Prime Location</h3>
                <p className="text-gray-600">
                  Minutes from Red Rock Canyon, Downtown Summerlin, and world-class shopping and
                  dining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Stonebridge Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our curated selection of luxury homes currently available in the Stonebridge
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Cromwell Collection</h3>
                  <p className="text-blue-100">1,232 - 1,456 sq ft</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">Luxury Single-Story Living</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• 2-3 Bedrooms, 2-2.5 Bathrooms</li>
                  <li>• Open concept living spaces</li>
                  <li>• Gourmet kitchens with islands</li>
                  <li>• Private courtyards</li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">Starting from $464,990</div>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-block"
                >
                  Schedule Tour
                </a>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Stirling Collection</h3>
                  <p className="text-green-100">1,456 - 2,100 sq ft</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">Spacious Family Homes</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• 3-4 Bedrooms, 2.5-3 Bathrooms</li>
                  <li>• Great rooms with fireplaces</li>
                  <li>• Master suites with walk-in closets</li>
                  <li>• Covered patios</li>
                </ul>
                <div className="text-2xl font-bold text-green-600 mb-4">Starting from $675,990</div>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center inline-block"
                >
                  Schedule Tour
                </a>
              </div>
            </div>

            {/* Property 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Evander Collection</h3>
                  <p className="text-purple-100">2,100 - 2,873 sq ft</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">Estate-Style Living</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• 4-5 Bedrooms, 3-4 Bathrooms</li>
                  <li>• Formal dining rooms</li>
                  <li>• Home offices/studies</li>
                  <li>• Expansive outdoor living</li>
                </ul>
                <div className="text-2xl font-bold text-purple-600 mb-4">Starting from $861,990</div>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center inline-block"
                >
                  Schedule Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Prime Summerlin Location
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Stonebridge is perfectly positioned in Summerlin West, offering unparalleled access
                to Las Vegas's finest attractions and amenities.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  12 miles to Red Rock Canyon National Conservation Area
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Minutes to Downtown Summerlin shopping and dining
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Close to world-class golf courses
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Easy access to McCarran International Airport
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Nearby medical facilities and hospitals
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Community Amenities</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-2xl mb-2 block">🏊</span>
                  <p className="font-semibold">Swimming Pools</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-2xl mb-2 block">🏓</span>
                  <p className="font-semibold">Pickleball Courts</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-2xl mb-2 block">💪</span>
                  <p className="font-semibold">Fitness Center</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-2xl mb-2 block">🏠</span>
                  <p className="font-semibold">Clubhouse</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-2xl mb-2 block">🚶</span>
                  <p className="font-semibold">Walking Trails</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-2xl mb-2 block">🌳</span>
                  <p className="font-semibold">Parks & Gardens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stonebridge Market Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest market trends and property values in Stonebridge,
              Summerlin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$750K+</div>
              <p className="text-gray-600">Average Home Price</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">5.2%</div>
              <p className="text-gray-600">Year-over-Year Appreciation</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">28</div>
              <p className="text-gray-600">Days on Market Average</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about buying a home in Stonebridge, Summerlin.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                What types of homes are available in Stonebridge?
              </h3>
              <p className="text-gray-600">
                Stonebridge offers three distinct home collections: Cromwell (1,232-1,456 sq ft),
                Stirling (1,456-2,100 sq ft), and Evander (2,100-2,873 sq ft). All homes feature
                single-story living with luxury finishes and resort-style amenities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Is Stonebridge a gated community?</h3>
              <p className="text-gray-600">
                Yes, Stonebridge is a fully gated community with 24/7 security and controlled
                access. This ensures privacy and peace of mind for all residents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                What amenities are included in Stonebridge?
              </h3>
              <p className="text-gray-600">
                Residents enjoy access to a clubhouse, swimming pools, fitness center, pickleball
                courts, walking trails, parks, and gardens. The community is designed for active
                adult living with resort-style amenities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                How close is Stonebridge to Red Rock Canyon?
              </h3>
              <p className="text-gray-600">
                Stonebridge is located just 12 miles from Red Rock Canyon National Conservation
                Area, making it easy to enjoy hiking, rock climbing, and scenic drives in this
                natural wonder.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">What is the HOA fee for Stonebridge homes?</h3>
              <p className="text-gray-600">
                The HOA fee for Stonebridge homes is approximately $410 per month, which includes
                maintenance of common areas, security, and access to all community amenities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home in Stonebridge?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let Dr. Jan Duffy help you discover the perfect home in Stonebridge, Summerlin. With
            years of experience and local expertise, she'll guide you through every step of the home
            buying process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Schedule Private Tour
            </a>
            <a
              href="tel:702-789-6561"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-block text-center"
            >
              Call Dr. Jan Duffy
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-200 text-sm">
              <strong>Address:</strong> Crossbridge Dr, Las Vegas, NV 89138
              <br />
              <strong>Neighborhood:</strong> Summerlin West, Stonebridge Community
              <br />
              <strong>License:</strong> Nevada Real Estate License #S.0197614
            </p>
          </div>
        </div>
      </section>

      {/* Stonebridge Listings Widget */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Stonebridge Listings</h2>
            <p className="text-lg text-gray-600">Explore available homes in Heritage at Stonebridge community</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR"
            priceMin={600000}
            priceMax={900000}
          />
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Stonebridge Homes"
        subtitle="Call 702-789-6561"
        priceMin="600000"
        priceMax="900000"
      />
    </>
  );
}
