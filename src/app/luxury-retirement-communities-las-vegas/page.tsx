import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Luxury Retirement Communities in Las Vegas | Premium Active Adult Living - Dr. Jan Duffy",
  description: "Discover luxury retirement communities in Las Vegas with premium amenities, concierge services, and upscale active adult living. Expert guidance for discerning buyers. Call (702) 789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://heritagestonebridge.com/luxury-retirement-communities-las-vegas",
  },
  openGraph: {
    title: "Luxury Retirement Communities in Las Vegas | Premium Active Adult Living",
    description: "Discover luxury retirement communities in Las Vegas with premium amenities, concierge services, and upscale active adult living.",
    type: "website",
    url: "https://heritagestonebridge.com/luxury-retirement-communities-las-vegas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Retirement Communities in Las Vegas | Premium Active Adult Living",
    description: "Discover luxury retirement communities in Las Vegas with premium amenities, concierge services, and upscale active adult living.",
  },
  other: {
    "content-type": "service-page",
    audience: "adults-55-plus, luxury-buyers, high-net-worth",
    location: "Las Vegas, Nevada, USA",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/luxury-retirement-communities-las-vegas#service",
  "name": "Luxury Retirement Communities in Las Vegas",
  "description": "Expert real estate services specializing in luxury retirement communities in Las Vegas, providing access to premium active adult living with concierge services and upscale amenities.",
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
  "serviceType": "Luxury Retirement Community Real Estate Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$800,000-$5,000,000+",
    "description": "Luxury retirement communities in Las Vegas with premium amenities and concierge services"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the most luxury retirement communities in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most luxury retirement communities in Las Vegas include The Ridges, Siena, Red Rock Country Club, and Heritage at Stonebridge, each offering premium amenities and concierge services."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities do luxury retirement communities offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luxury retirement communities typically offer concierge services, gourmet dining, spa facilities, private golf courses, wine cellars, theaters, and personalized services."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price range for luxury retirement communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Luxury retirement communities in Las Vegas typically range from $800,000 to $5,000,000+, depending on location, amenities, and home size."
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
      "name": "Luxury Retirement Communities",
      "item": "https://heritagestonebridge.com/luxury-retirement-communities-las-vegas"
    }
  ]
};

export default function LuxuryRetirementCommunitiesLasVegasPage() {
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
      <section className="relative bg-gradient-to-br from-gold-900 via-gold-800 to-gold-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Luxury Retirement Communities in Las Vegas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the pinnacle of active adult living with premium amenities, concierge services, and unparalleled luxury
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-gold-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-100 transition-colors shadow-lg inline-block text-center">
              Explore Luxury Communities
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gold-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Defines Luxury Retirement Living?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Luxury retirement communities offer the highest level of amenities, services, and lifestyle options for discerning active adults.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Concierge Services</h3>
              <p className="text-gray-600">Personalized assistance with reservations, travel planning, event coordination, and daily conveniences</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Amenities</h3>
              <p className="text-gray-600">Private golf courses, spa facilities, gourmet dining, wine cellars, theaters, and exclusive social spaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Homes</h3>
              <p className="text-gray-600">Architectural excellence, high-end finishes, smart home technology, and personalized design options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Luxury Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premier Luxury Retirement Communities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover Las Vegas's most exclusive active adult communities offering unparalleled luxury and service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Ridges</h3>
              <p className="text-gray-600 mb-4">Ultra-luxury community with custom estates, exclusive golf course access, and mountain views.</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Custom luxury homes</li>
                <li>• Exclusive golf course</li>
                <li>• Private concierge services</li>
                <li>• Mountain views</li>
                <li>• Elite social scene</li>
                <li>• Highest-end finishes</li>
              </ul>
              <div className="text-lg font-bold text-gold-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" className="text-gold-600 hover:text-gold-800 font-semibold">View The Ridges Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Siena</h3>
              <p className="text-gray-600 mb-4">Tuscan-inspired luxury community with resort amenities and sophisticated design.</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Tuscan-inspired architecture</li>
                <li>• Resort-style amenities</li>
                <li>• Wine cellar & tasting room</li>
                <li>• Gourmet dining</li>
                <li>• Spa & wellness center</li>
                <li>• Private social clubs</li>
              </ul>
              <div className="text-lg font-bold text-gold-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" className="text-gold-600 hover:text-gold-800 font-semibold">View Siena Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Country Club</h3>
              <p className="text-gray-600 mb-4">Exclusive golf course community with luxury homes and private country club membership.</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Private golf course</li>
                <li>• Country club membership</li>
                <li>• Luxury amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive events</li>
                <li>• Concierge services</li>
              </ul>
              <div className="text-lg font-bold text-gold-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" className="text-gold-600 hover:text-gold-800 font-semibold">View Country Club Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p className="text-gray-600 mb-4">Luxury new construction with Everything's Included® features and modern amenities.</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• New construction luxury</li>
                <li>• Everything's Included®</li>
                <li>• Smart home technology</li>
                <li>• Resort-style amenities</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community</li>
              </ul>
              <div className="text-lg font-bold text-gold-600 mb-4">$464,990 - $1,200,000+</div>
              <a href="/homes-for-sale-stonebridge-summerlin" className="text-gold-600 hover:text-gold-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">MacDonald Ranch</h3>
              <p className="text-gray-600 mb-4">Henderson's premier luxury community with custom homes and golf course access.</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Custom luxury homes</li>
                <li>• Golf course access</li>
                <li>• Private amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive location</li>
                <li>• High-end finishes</li>
              </ul>
              <div className="text-lg font-bold text-gold-600 mb-4">$700,000 - $2,500,000+</div>
              <a href="/macdonald-ranch-henderson" className="text-gold-600 hover:text-gold-800 font-semibold">View MacDonald Ranch Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seven Hills</h3>
              <p className="text-gray-600 mb-4">Gated luxury community with custom estates and stunning mountain views.</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Gated community</li>
                <li>• Custom estates</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Exclusive location</li>
                <li>• Luxury finishes</li>
              </ul>
              <div className="text-lg font-bold text-gold-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/seven-hills-henderson" className="text-gold-600 hover:text-gold-800 font-semibold">View Seven Hills Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Lifestyle Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Luxury Lifestyle Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the highest level of service and convenience with personalized amenities designed for discerning residents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Concierge Services</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                  Restaurant reservations and event planning
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                  Travel coordination and transportation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                  Personal shopping and delivery services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-600 rounded-full mr-3"></span>
                  Home maintenance and housekeeping
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Amenities</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Private golf courses and tennis courts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Spa facilities and wellness centers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Gourmet dining and wine cellars
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Private theaters and entertainment spaces
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
          priceMin={800000}
          priceMax={5000000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-gold-600 to-gold-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Luxury Retirement Living?</h2>
          <p className="text-lg text-gold-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover Las Vegas's most exclusive luxury retirement communities with premium amenities and concierge services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-gold-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gold-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Luxury Retirement Communities"
        subtitle="Call (702) 789-6561"
        priceMin="800000"
        priceMax="5000000"
      />
    </>
  );
}
