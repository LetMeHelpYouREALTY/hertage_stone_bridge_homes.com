import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Best 55+ Communities in Las Vegas | Top-Rated Active Adult Living - Dr. Jan Duffy",
  description: "Discover the best 55+ communities in Las Vegas with top-rated amenities, locations, and lifestyle options. Expert rankings and reviews of premier active adult communities. Call (702) 789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://heritagestonebridge.com/best-55-plus-communities-las-vegas",
  },
  openGraph: {
    title: "Best 55+ Communities in Las Vegas | Top-Rated Active Adult Living",
    description: "Discover the best 55+ communities in Las Vegas with top-rated amenities, locations, and lifestyle options.",
    type: "website",
    url: "https://heritagestonebridge.com/best-55-plus-communities-las-vegas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best 55+ Communities in Las Vegas | Top-Rated Active Adult Living",
    description: "Discover the best 55+ communities in Las Vegas with top-rated amenities, locations, and lifestyle options.",
  },
  other: {
    "content-type": "service-page",
    audience: "adults-55-plus, luxury-buyers",
    location: "Las Vegas, Nevada, USA",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/best-55-plus-communities-las-vegas#service",
  "name": "Best 55+ Communities in Las Vegas",
  "description": "Expert real estate services specializing in the best 55+ communities in Las Vegas, providing comprehensive rankings and reviews of top-rated active adult communities.",
  "provider": {
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "telephone": "+1-702-789-6561",
    "email": "DrDuffySells@HeritageStonebridge.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Las Vegas, Nevada"
  },
  "serviceType": "Best 55+ Community Real Estate Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$400,000-$2,000,000",
    "description": "Best 55+ communities in Las Vegas with top-rated amenities and locations"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best 55+ communities in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best 55+ communities in Las Vegas include Heritage at Stonebridge, Sun City Summerlin, The Ridges, Siena, and Del Webb communities, each offering unique amenities and lifestyle benefits."
      }
    },
    {
      "@type": "Question",
      "name": "What makes a 55+ community the best?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best 55+ communities feature excellent amenities, prime locations, active social scenes, quality construction, reasonable HOA fees, and strong resale values."
      }
    },
    {
      "@type": "Question",
      "name": "How do I choose between the best 55+ communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consider your budget, desired amenities, location preferences, social activities, maintenance requirements, and long-term investment potential when choosing between top 55+ communities."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://heritagestonebridge.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "55+ Communities",
      "item": "https://heritagestonebridge.com/55-plus-communities"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best 55+ Communities",
      "item": "https://heritagestonebridge.com/best-55-plus-communities-las-vegas"
    }
  ]
};

export default function Best55PlusCommunitiesLasVegasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Best 55+ Communities in Las Vegas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the top-rated active adult communities with premier amenities, prime locations, and exceptional lifestyle options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Explore Top Communities
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Ranking Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Rank the Best 55+ Communities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive evaluation considers amenities, location, value, lifestyle, and resident satisfaction to identify Las Vegas's premier active adult communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amenities & Facilities</h3>
              <p className="text-gray-600">Quality and variety of recreational facilities, clubhouses, fitness centers, and social spaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Location & Access</h3>
              <p className="text-gray-600">Proximity to shopping, dining, healthcare, entertainment, and transportation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Value & Investment</h3>
              <p className="text-gray-600">Price-to-value ratio, HOA fees, resale potential, and overall cost of living</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top-Rated Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top-Rated 55+ Communities in Las Vegas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on comprehensive analysis of amenities, location, value, and resident satisfaction.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* #1 Heritage at Stonebridge */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold text-lg mr-4">
                  #1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Heritage at Stonebridge</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">Lennar's premier 55+ community in Summerlin with Everything's Included® features and stunning Red Rock Canyon views.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Three home collections (Cromwell, Stirling, Evander)</li>
                    <li>• 8,000 sq ft clubhouse with fitness center</li>
                    <li>• Resort-style pool & heated lap pool</li>
                    <li>• Pickleball & bocce courts</li>
                    <li>• Gated community with RV parking</li>
                    <li>• Smart home technology included</li>
                  </ul>
                  <div className="text-lg font-bold text-purple-600 mb-4">Starting from $464,990</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Why It's #1</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ New construction with modern amenities</li>
                    <li>✓ Prime Summerlin location</li>
                    <li>✓ Red Rock Canyon views</li>
                    <li>✓ Lennar Everything's Included®</li>
                    <li>✓ Excellent value proposition</li>
                    <li>✓ Strong resale potential</li>
                  </ul>
                </div>
              </div>
              <a href="/homes-for-sale-stonebridge-summerlin" className="text-purple-600 hover:text-purple-800 font-semibold">View Heritage at Stonebridge Homes →</a>
            </div>

            {/* #2 Sun City Summerlin */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                  #2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sun City Summerlin</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">Established premier 55+ community with mature amenities, golf courses, and vibrant social scene.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Multiple golf courses</li>
                    <li>• Recreation centers and pools</li>
                    <li>• Extensive social clubs</li>
                    <li>• Mature landscaping</li>
                    <li>• Established community</li>
                    <li>• Strong resale market</li>
                  </ul>
                  <div className="text-lg font-bold text-purple-600 mb-4">$500,000 - $1,500,000</div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Why It's #2</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Established reputation</li>
                    <li>✓ Multiple golf courses</li>
                    <li>✓ Extensive amenities</li>
                    <li>✓ Active social scene</li>
                    <li>✓ Prime Summerlin location</li>
                    <li>✓ Proven track record</li>
                  </ul>
                </div>
              </div>
              <a href="/sun-city-summerlin-homes" className="text-purple-600 hover:text-purple-800 font-semibold">View Sun City Summerlin Homes →</a>
            </div>

            {/* #3 The Ridges */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full font-bold text-lg mr-4">
                  #3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Ridges</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-4">Ultra-luxury 55+ community with custom estates, exclusive golf course access, and mountain views.</p>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Custom luxury homes</li>
                    <li>• Exclusive golf course</li>
                    <li>• Mountain views</li>
                    <li>• Private amenities</li>
                    <li>• Elite social scene</li>
                    <li>• Highest-end finishes</li>
                  </ul>
                  <div className="text-lg font-bold text-purple-600 mb-4">$1,000,000 - $5,000,000+</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Why It's #3</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Ultra-luxury positioning</li>
                    <li>✓ Exclusive golf access</li>
                    <li>✓ Custom home options</li>
                    <li>✓ Stunning mountain views</li>
                    <li>✓ Elite amenities</li>
                    <li>✓ Prestigious address</li>
                  </ul>
                </div>
              </div>
              <a href="/the-ridges-summerlin" className="text-purple-600 hover:text-purple-800 font-semibold">View The Ridges Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Comparison Guide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare the top 55+ communities based on key factors to find the perfect match for your lifestyle and budget.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-purple-100">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Community</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Price Range</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Amenities</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Location</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Heritage at Stonebridge</td>
                  <td className="px-6 py-4 text-gray-600">$464,990+</td>
                  <td className="px-6 py-4 text-gray-600">Resort-style pool, clubhouse, courts</td>
                  <td className="px-6 py-4 text-gray-600">Summerlin West</td>
                  <td className="px-6 py-4 text-gray-600">New construction buyers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Sun City Summerlin</td>
                  <td className="px-6 py-4 text-gray-600">$500,000+</td>
                  <td className="px-6 py-4 text-gray-600">Golf courses, recreation centers</td>
                  <td className="px-6 py-4 text-gray-600">Summerlin</td>
                  <td className="px-6 py-4 text-gray-600">Golf enthusiasts</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">The Ridges</td>
                  <td className="px-6 py-4 text-gray-600">$1,000,000+</td>
                  <td className="px-6 py-4 text-gray-600">Exclusive golf, luxury amenities</td>
                  <td className="px-6 py-4 text-gray-600">Summerlin</td>
                  <td className="px-6 py-4 text-gray-600">Luxury buyers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Siena</td>
                  <td className="px-6 py-4 text-gray-600">$600,000+</td>
                  <td className="px-6 py-4 text-gray-600">Tuscan-inspired, resort amenities</td>
                  <td className="px-6 py-4 text-gray-600">Summerlin</td>
                  <td className="px-6 py-4 text-gray-600">Style-conscious buyers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RealScout Widgets */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <RealScoutOfficeListingsWidget
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
          listingStatus="For Sale"
          propertyTypes="SFR"
          priceMin={400000}
          priceMax={2000000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect 55+ Community?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you choose from the best 55+ communities in Las Vegas based on your lifestyle, budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Best 55+ Communities"
        subtitle="Call (702) 789-6561"
        priceMin="400000"
        priceMax="2000000"
      />
    </>
  );
}
