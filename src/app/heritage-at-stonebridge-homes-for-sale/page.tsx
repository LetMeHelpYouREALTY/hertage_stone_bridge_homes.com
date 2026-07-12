import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Heritage at Stonebridge Homes for Sale | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  description: "Find Heritage at Stonebridge homes for sale in Summerlin. Expert guidance from Dr. Jan Duffy on Lennar's premier 55+ community with Everything's Included® features. Call (702) 789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale",
  },
  openGraph: {
    title: "Heritage at Stonebridge Homes for Sale | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description: "Find Heritage at Stonebridge homes for sale in Summerlin. Expert guidance from Dr. Jan Duffy on Lennar's premier 55+ community.",
    type: "website",
    url: "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage at Stonebridge Homes for Sale | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description: "Find Heritage at Stonebridge homes for sale in Summerlin. Expert guidance from Dr. Jan Duffy on Lennar's premier 55+ community.",
  },
  other: {
    "content-type": "service-page",
    audience: "adults-55-plus, heritage-stonebridge-buyers",
    location: "Heritage at Stonebridge, Summerlin, Las Vegas, Nevada, USA",
  },
};

const residentialComplexSchema = {
  "@context": "https://schema.org",
  "@type": "ResidentialComplex",
  "@id": "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale#residential-complex",
  "name": "Heritage at Stonebridge",
  "description": "Lennar's premier 55+ active adult community in Summerlin West with Everything's Included® features and Red Rock Canyon views.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Crossbridge Dr",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89138",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.1699",
    "longitude": "-115.1398"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Clubhouse",
      "value": "8,000 sq ft clubhouse with fitness center"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Pool",
      "value": "Resort-style pool and heated lap pool"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Sports Courts",
      "value": "Pickleball and bocce courts"
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Gated Community",
      "value": "Secure gated entrance with RV parking"
    }
  ],
  "numberOfUnits": "500+",
  "priceRange": "$464,990-$1,200,000",
  "developer": {
    "@type": "Organization",
    "name": "Lennar Corporation"
  },
  "ageRestriction": "55+",
  "url": "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale"
};

const agentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale#agent",
  "name": "Dr. Jan Duffy",
  "description": "Las Vegas Real Estate Expert specializing in Heritage at Stonebridge and 55+ communities",
  "telephone": "+1-702-789-6561",
  "email": "DrDuffySells@HeritageStonebridge.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Crossbridge Dr",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89138",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Las Vegas, Nevada"
  },
  "knowsAbout": "Heritage at Stonebridge, 55+ Communities, Active Adult Living, Lennar Homes",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Nevada Real Estate Division"
    },
    "identifier": "S.0197614"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What homes are currently available at Heritage at Stonebridge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Heritage at Stonebridge offers three home collections: Cromwell (starting at $464,990), Stirling, and Evander, with new construction homes featuring Lennar's Everything's Included® package."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities does Heritage at Stonebridge offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Heritage at Stonebridge features an 8,000 sq ft clubhouse, resort-style pool, heated lap pool, pickleball courts, bocce courts, fitness center, and stunning Red Rock Canyon views."
      }
    },
    {
      "@type": "Question",
      "name": "Is Heritage at Stonebridge a 55+ community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Heritage at Stonebridge is Lennar's premier 55+ active adult community in Summerlin West, designed specifically for active adults aged 55 and over."
      }
    },
    {
      "@type": "Question",
      "name": "What is Lennar's Everything's Included® package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lennar's Everything's Included® package includes premium features like granite countertops, stainless steel appliances, hardwood flooring, and smart home technology at no additional cost."
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
      "name": "Heritage at Stonebridge",
      "item": "https://heritagestonebridge.com/heritage-at-stonebridge-homes-for-sale"
    }
  ]
};

export default function HeritageAtStonebridgeHomesForSalePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialComplexSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
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
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Heritage at Stonebridge Homes for Sale
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover Lennar's premier 55+ community in Summerlin West with Everything's Included® features and stunning Red Rock Canyon views
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-100 transition-colors shadow-lg inline-block text-center">
              View Available Homes
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Current Market Insight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Heritage at Stonebridge Market Update</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's premier 55+ community specialist, I'm seeing unprecedented demand for Heritage at Stonebridge homes. Here's what you need to know about today's market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Current Pricing</h3>
              <p className="text-gray-600">Starting from $464,990 for Cromwell collection homes with Everything's Included® features</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Market Demand</h3>
              <p className="text-gray-600">High demand with limited inventory - homes selling quickly in this premier location</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Potential</h3>
              <p className="text-gray-600">Strong appreciation potential in Summerlin West with Red Rock Canyon proximity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Collections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Heritage at Stonebridge Home Collections</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from three distinct home collections, each designed with active adult living in mind and featuring Lennar's Everything's Included® package.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cromwell Collection</h3>
              <p className="text-gray-600 mb-4">Starting at $464,990 - Perfect for active adults seeking modern comfort</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• 1,500-2,000 sq ft single-story homes</li>
                <li>• Open concept living areas</li>
                <li>• Master suite with walk-in closet</li>
                <li>• Covered patio or lanai</li>
                <li>• 2-car garage</li>
                <li>• Everything's Included® features</li>
              </ul>
              <div className="text-lg font-bold text-red-600 mb-4">Starting from $464,990</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stirling Collection</h3>
              <p className="text-gray-600 mb-4">Mid-range pricing - Enhanced features and larger layouts</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• 1,800-2,400 sq ft single-story homes</li>
                <li>• Expanded living spaces</li>
                <li>• Upgraded finishes</li>
                <li>• Larger master suite</li>
                <li>• Extended covered outdoor living</li>
                <li>• Premium Everything's Included®</li>
              </ul>
              <div className="text-lg font-bold text-red-600 mb-4">Mid-range pricing</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evander Collection</h3>
              <p className="text-gray-600 mb-4">Premium pricing - Luxury features and maximum space</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• 2,200-2,800 sq ft single-story homes</li>
                <li>• Spacious great rooms</li>
                <li>• Luxury master suite</li>
                <li>• Gourmet kitchen</li>
                <li>• Large covered patio</li>
                <li>• Premium Everything's Included®</li>
              </ul>
              <div className="text-lg font-bold text-red-600 mb-4">Premium pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything's Included Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lennar's Everything's Included® Package</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Heritage at Stonebridge homes come with Lennar's Everything's Included® package, providing premium features at no additional cost.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kitchen & Living Features</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Granite countertops throughout
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Stainless steel appliances
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Hardwood flooring in main areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Upgraded lighting fixtures
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Home Technology</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Smart thermostat included
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Smart door locks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Smart garage door opener
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Smart home security system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Heritage at Stonebridge Amenities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience resort-style living with world-class amenities designed for active adults in the heart of Summerlin West.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">8,000 Sq Ft Clubhouse</h3>
              <p className="text-gray-600">State-of-the-art clubhouse with fitness center, social spaces, and meeting rooms</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resort-Style Pool</h3>
              <p className="text-gray-600">Main pool and heated lap pool for year-round swimming and relaxation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sports Courts</h3>
              <p className="text-gray-600">Pickleball and bocce courts for active recreation and social activities</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon Views</h3>
              <p className="text-gray-600">Stunning mountain views of Red Rock Canyon National Conservation Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Heritage at Stonebridge */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Heritage at Stonebridge?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults find their perfect home. Here's why Heritage at Stonebridge stands out.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prime Summerlin Location</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Minutes from Red Rock Canyon National Conservation Area
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Close to Downtown Summerlin shopping and dining
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Easy access to Las Vegas Strip and McCarran Airport
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  World-class healthcare facilities nearby
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Active Adult Lifestyle</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Age-restricted community for 55+ residents
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Maintenance-free living with HOA services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Social activities and community events
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Gated community with security and privacy
                </li>
              </ul>
            </div>
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
          priceMax={1500000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Heritage at Stonebridge Home?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you find the perfect Heritage at Stonebridge home with Lennar's Everything's Included® features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Heritage at Stonebridge Homes"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="1500000"
      />
    </>
  );
}
