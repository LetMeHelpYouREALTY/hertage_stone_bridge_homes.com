import type { Metadata } from "next";
import { RealScoutAdvancedSearch } from "~/components/real-estate/RealScoutAdvancedSearch";
import { RealScoutSimpleSearch } from "~/components/real-estate/RealScoutSimpleSearch";
import { RealScoutHomeValue } from "~/components/real-estate/RealScoutHomeValue";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Search Tools | Heritage at Stonebridge - Dr. Jan Duffy",
  description:
    "Search Las Vegas real estate with advanced MLS tools, home valuations, and property listings. Dr. Jan Duffy's comprehensive RealScout platform for Heritage at Stonebridge and Summerlin areas.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://heritagestonebridge.com/real-estate/",
  },
  authors: [{ name: "Dr. Jan Duffy" }],
  openGraph: {
    title: "Las Vegas Real Estate Search Tools | Heritage at Stonebridge",
    description:
      "Search Las Vegas real estate with advanced MLS tools, home valuations, and property listings. Dr. Jan Duffy's comprehensive RealScout platform.",
    type: "website",
    url: "https://heritagestonebridge.com/real-estate/",
    siteName: "Heritage at Stonebridge",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@heritage_stonebridge",
    title: "Las Vegas Real Estate Search Tools | Heritage at Stonebridge",
    description:
      "Search Las Vegas real estate with advanced MLS tools, home valuations, and property listings. Dr. Jan Duffy's comprehensive RealScout platform.",
  },
  other: {
    "geo.region": "US-NV",
    "geo.placename": "Las Vegas, Nevada",
    "geo.position": "36.1699;-115.1398",
  },
};

export default function RealEstatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate Tools & Widgets</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our comprehensive suite of RealScout widgets and property search tools designed
            for Heritage at Stonebridge and surrounding Las Vegas areas.
          </p>
        </div>
      </section>

      {/* Dynamic RealScout Content Blocks */}
      <main>
        {/* <DynamicRealScoutGrid config={realEstateContentConfig} /> */}

        {/* RealScout Widgets Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Simple Search Widget */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Property Search</h3>
              <RealScoutSimpleSearch 
                agentEncodedId="QWdlbnQtMjI1MDUw"
              />
            </div>

            {/* Advanced Search Widget */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Search</h3>
              <RealScoutAdvancedSearch
                agentEncodedId="QWdlbnQtMjI1MDUw"
              />
            </div>
          </div>

          {/* Home Value Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Home's Value</h3>
            <RealScoutHomeValue
              agentEncodedId="QWdlbnQtMjI1MDUw"
            />
          </div>

          {/* Office Listings Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Current Listings</h3>
            <RealScoutOfficeListingsWidget
              agentEncodedId="QWdlbnQtMjI1MDUw"
              sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
              listingStatus="For Sale"
              propertyTypes="SFR,MF"
              priceMin={500000}
              priceMax={1000000}
            />
          </div>
        </div>

        {/* Widget Information */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Our Real Estate Tools</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">RealScout Integration</h4>
              <p className="text-gray-700 mb-4">
                Our widgets are powered by RealScout's advanced MLS integration, providing real-time
                property data, accurate valuations, and seamless lead capture.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Real-time MLS data synchronization
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced search and filtering capabilities
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Automated lead capture and CRM integration
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Performance Optimized</h4>
              <p className="text-gray-700 mb-4">
                Built with Qwik's resumable architecture for lightning-fast loading and optimal user
                experience across all devices.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Lazy-loaded widgets for faster page loads
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mobile-responsive design
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  SEO-optimized for better search rankings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Featured Properties"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="1000000"
      />
    </>
  );
}
