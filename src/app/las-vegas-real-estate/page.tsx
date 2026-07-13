import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
  description: "Expert Las Vegas real estate services by Dr. Jan Duffy. Specializing in 55+ communities, luxury homes, and active adult living in Summerlin, Henderson, and Northwest Las Vegas. Call 702-789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://heritagestonebridge.com/las-vegas-real-estate",
  },
  openGraph: {
    title: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
    description: "Expert Las Vegas real estate services specializing in 55+ communities and luxury homes. Serving Summerlin, Henderson, and Northwest Las Vegas.",
    type: "website",
    url: "https://heritagestonebridge.com/las-vegas-real-estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Real Estate | Dr. Jan Duffy - 55+ Communities Specialist",
    description: "Expert Las Vegas real estate services specializing in 55+ communities and luxury homes. Serving Summerlin, Henderson, and Northwest Las Vegas.",
  },
  other: {
    "content-type": "service-area",
    audience: "adults-55-plus, luxury-home-buyers",
    location: "Las Vegas, Nevada, USA",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://heritagestonebridge.com/las-vegas-real-estate#localbusiness",
  "name": "Heritage at Stonebridge - Las Vegas Real Estate",
  "description": "Premier Heritage at Stonebridge real estate services in Las Vegas. Expert knowledge of Las Vegas market trends, pricing, and neighborhood insights with comprehensive coverage of all Las Vegas areas.",
  "image": {
    "@type": "ImageObject",
    "url": "https://heritagestonebridge.com/images/las-vegas-real-estate.jpg",
    "width": 1200,
    "height": 630
  },
  "telephone": "+1-702-789-6561",
  "email": "DrDuffySells@HeritageStonebridge.com",
  "url": "https://heritagestonebridge.com/las-vegas-real-estate",
  "address": {
    "@type": "PostalAddress",
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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday", 
      "opens": "By Appointment",
      "closes": "By Appointment"
    }
  ],
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "geoRadius": "50000"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "Place",
      "name": "Las Vegas Strip",
      "containedInPlace": {
        "@type": "City",
        "name": "Las Vegas"
      }
    },
    {
      "@type": "Place",
      "name": "Downtown Las Vegas",
      "containedInPlace": {
        "@type": "City",
        "name": "Las Vegas"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Las Vegas Real Estate Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Las Vegas Home Buying",
          "description": "Expert guidance for buying homes throughout Las Vegas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Las Vegas Home Selling",
          "description": "Professional home selling services in Las Vegas market"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Las Vegas Investment Properties",
          "description": "Investment property analysis and acquisition services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Las Vegas Luxury Homes",
          "description": "Specialized services for luxury properties in Las Vegas"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/DrJanDuffyRealEstate",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.instagram.com/drjanduffylasvegas"
  ],
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
      "name": "What areas of Las Vegas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dr. Jan Duffy serves all areas of Las Vegas including the Strip, Downtown, Summerlin, Henderson, Northwest Las Vegas, and Red Rock Canyon areas with comprehensive real estate services."
      }
    },
    {
      "@type": "Question",
      "name": "What types of properties are available in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Vegas offers diverse property types including single-family homes, condos, townhomes, luxury estates, investment properties, and 55+ communities like Heritage at Stonebridge."
      }
    },
    {
      "@type": "Question",
      "name": "How is the Las Vegas real estate market performing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Las Vegas real estate market continues to show strong growth with increasing property values, low inventory, and high demand across all price ranges and neighborhoods."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Las Vegas a good place to invest in real estate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Vegas offers strong investment opportunities due to its growing population, tourism industry, no state income tax, diverse economy, and continued development and infrastructure improvements."
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
      "name": "Las Vegas Real Estate",
      "item": "https://heritagestonebridge.com/las-vegas-real-estate"
    }
  ]
};

export default function LasVegasRealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Las Vegas Real Estate
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert real estate services specializing in 55+ communities, luxury homes, and active adult living throughout Las Vegas Valley
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Consultation
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Las Vegas Service Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy provides comprehensive real estate services across the Las Vegas Valley, with specialized expertise in 55+ communities and luxury properties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Summerlin</h3>
              <p className="text-gray-600 mb-4">Premier master-planned community with luxury homes, golf courses, and resort-style amenities.</p>
              <a href="/summerlin-homes" className="text-blue-600 hover:text-blue-800 font-semibold">Explore Summerlin Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Henderson</h3>
              <p className="text-gray-600 mb-4">Family-friendly community with excellent schools, parks, and diverse housing options.</p>
              <a href="/henderson-real-estate" className="text-blue-600 hover:text-blue-800 font-semibold">Explore Henderson Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Northwest Las Vegas</h3>
              <p className="text-gray-600 mb-4">Growing area with new construction, modern amenities, and convenient access to the Strip.</p>
              <a href="/northwest-las-vegas" className="text-blue-600 hover:text-blue-800 font-semibold">Explore Northwest Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon</h3>
              <p className="text-gray-600 mb-4">Stunning mountain views and luxury communities near Red Rock Canyon National Conservation Area.</p>
              <a href="/red-rock-canyon-communities" className="text-blue-600 hover:text-blue-800 font-semibold">Explore Red Rock Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Boulder City</h3>
              <p className="text-gray-600 mb-4">Historic community near Lake Mead with small-town charm and outdoor recreation.</p>
              <a href="/boulder-city-homes" className="text-blue-600 hover:text-blue-800 font-semibold">Explore Boulder City Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Las Vegas Strip Area</h3>
              <p className="text-gray-600 mb-4">High-rise condos and luxury properties in the heart of Las Vegas entertainment district.</p>
              <a href="/las-vegas-condos" className="text-blue-600 hover:text-blue-800 font-semibold">Explore Strip Condos →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Las Vegas Real Estate Market Overview</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Las Vegas real estate market continues to show strong growth with increasing property values, low inventory, and high demand across all price ranges and neighborhoods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Market Growth</h3>
              <p className="text-gray-600">Las Vegas property values have shown consistent growth, driven by population increases and economic diversification.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Opportunities</h3>
              <p className="text-gray-600">Strong rental market, no state income tax, and growing tourism industry create excellent investment potential.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diverse Options</h3>
              <p className="text-gray-600">From luxury estates to 55+ communities, Las Vegas offers properties for every lifestyle and budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 55+ Communities Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">55+ Communities in Las Vegas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas offers some of the finest active adult communities in the Southwest, featuring resort-style amenities, golf courses, and vibrant social scenes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular 55+ Communities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Heritage at Stonebridge - Summerlin
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Sun City Summerlin
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Siena - Summerlin
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  The Ridges - Summerlin
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Del Webb communities
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Amenities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Championship golf courses
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Resort-style pools and spas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Fitness centers and tennis courts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Clubhouses and social activities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  24/7 security and gated access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Las Vegas Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Las Vegas Listings</h2>
            <p className="text-lg text-gray-600">Explore available properties across the Las Vegas Valley</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF,CND"
            priceMin={300000}
            priceMax={2000000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Las Vegas Real Estate?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With deep local knowledge and specialized expertise in 55+ communities, Dr. Jan Duffy provides unmatched service throughout the Las Vegas Valley.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">55+ Community Specialist</h3>
              <p className="text-gray-600">Deep expertise in active adult communities, understanding unique needs and lifestyle preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Market Expert</h3>
              <p className="text-gray-600">Comprehensive knowledge of Las Vegas neighborhoods, market trends, and property values.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Dedicated support throughout the entire buying or selling process with attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Las Vegas Dream Home?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you navigate the Las Vegas real estate market and find the perfect home in your ideal community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Consultation
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
}
