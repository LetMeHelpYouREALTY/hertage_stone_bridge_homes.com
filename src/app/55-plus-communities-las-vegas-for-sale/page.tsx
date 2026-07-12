import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/55-plus-communities-las-vegas-for-sale#service",
  "name": "55+ Communities in Las Vegas for Sale",
  "description": "Expert real estate services specializing in 55+ communities for sale in Las Vegas, providing current listings, pricing, and availability information for active adult home buyers.",
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
  "serviceType": "55+ Community Real Estate Sales Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$300,000-$2,000,000",
    "description": "55+ communities in Las Vegas for sale with current listings and pricing"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What 55+ communities are currently for sale in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Currently available 55+ communities in Las Vegas include Heritage at Stonebridge (new construction), Sun City Summerlin (resale), The Ridges, Siena, and various Del Webb communities with homes for sale."
      }
    },
    {
      "@type": "Question",
      "name": "What is the price range for 55+ communities in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "55+ communities in Las Vegas range from $300,000 for resale homes to $2,000,000+ for luxury custom estates, with most new construction starting around $464,990."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find the best 55+ community for sale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consider your budget, desired amenities, location preferences, lifestyle needs, and work with an experienced agent who specializes in 55+ communities to find the best match."
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
      "name": "Communities for Sale",
      "item": "https://heritagestonebridge.com/55-plus-communities-las-vegas-for-sale"
    }
  ]
};

export const metadata: Metadata = {
  title: "55+ Communities in Las Vegas for Sale | Active Adult Homes Available - Dr. Jan Duffy",
  description: "Browse 55+ communities in Las Vegas for sale with current listings, pricing, and availability. Expert guidance for active adult home buyers. Call (702) 789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: { canonical: "https://heritagestonebridge.com/55-plus-communities-las-vegas-for-sale" },
  other: {
    "content-type": "service-page",
    "audience": "adults-55-plus, home-buyers",
    "location": "Las Vegas, Nevada, USA",
  },
  openGraph: {
    title: "55+ Communities in Las Vegas for Sale | Active Adult Homes Available",
    description: "Browse 55+ communities in Las Vegas for sale with current listings, pricing, and availability.",
    type: "website",
    url: "https://heritagestonebridge.com/55-plus-communities-las-vegas-for-sale",
  },
  twitter: {
    card: "summary_large_image",
    title: "55+ Communities in Las Vegas for Sale | Active Adult Homes Available",
    description: "Browse 55+ communities in Las Vegas for sale with current listings, pricing, and availability.",
  },
};

export default function FiftyFivePlusCommunitiesLasVegasForSalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            55+ Communities in Las Vegas for Sale
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Browse current listings of active adult communities with available homes, pricing, and detailed information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-indigo-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-100 transition-colors shadow-lg inline-block text-center">
              View Current Listings
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Current Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current 55+ Community Market</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas offers a diverse selection of 55+ communities with homes currently available for sale across various price ranges and locations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Construction</h3>
              <p className="text-gray-600">Heritage at Stonebridge and other new developments with modern amenities and contemporary designs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resale Market</h3>
              <p className="text-gray-600">Established communities like Sun City Summerlin with mature amenities and proven track records</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Options</h3>
              <p className="text-gray-600">High-end communities including The Ridges and Siena with premium amenities and custom homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Communities with Homes Currently Available</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore 55+ communities in Las Vegas that currently have homes for sale, from new construction to resale options.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p className="text-gray-600 mb-4">New construction 55+ community with Lennar Everything's Included® features</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Three home collections available</li>
                <li>• Starting from $464,990</li>
                <li>• Resort-style amenities</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community</li>
                <li>• Smart home technology</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">New Construction Available</div>
              <a href="/homes-for-sale-stonebridge-summerlin" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Available Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sun City Summerlin</h3>
              <p className="text-gray-600 mb-4">Established community with resale homes and mature amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Active social scene</li>
                <li>• Mature landscaping</li>
                <li>• Established community</li>
                <li>• Strong resale market</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">Resale Homes Available</div>
              <a href="/sun-city-summerlin-homes" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Resale Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Ridges</h3>
              <p className="text-gray-600 mb-4">Ultra-luxury community with custom estates and exclusive amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Custom luxury homes</li>
                <li>• Exclusive golf course</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Elite social scene</li>
                <li>• Highest-end finishes</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">Luxury Estates Available</div>
              <a href="/the-ridges-summerlin" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Luxury Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Siena</h3>
              <p className="text-gray-600 mb-4">Tuscan-inspired community with resort amenities and sophisticated design</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Tuscan-inspired architecture</li>
                <li>• Resort-style amenities</li>
                <li>• Wine cellar & tasting room</li>
                <li>• Gourmet dining</li>
                <li>• Spa & wellness center</li>
                <li>• Private social clubs</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">Resort-Style Homes Available</div>
              <a href="/siena-summerlin-homes" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Siena Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Del Webb Communities</h3>
              <p className="text-gray-600 mb-4">Multiple Del Webb communities with homes available across Las Vegas</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Established reputation</li>
                <li>• Quality construction</li>
                <li>• Active lifestyle focus</li>
                <li>• Social activities</li>
                <li>• Maintenance-free living</li>
                <li>• Various price points</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">Multiple Communities Available</div>
              <a href="/del-webb-las-vegas" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Del Webb Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Country Club</h3>
              <p className="text-gray-600 mb-4">Exclusive golf course community with luxury homes and private membership</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Private golf course</li>
                <li>• Country club membership</li>
                <li>• Luxury amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive events</li>
                <li>• Concierge services</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">Golf Course Homes Available</div>
              <a href="/red-rock-country-club" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Country Club Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Buying Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Buy in a 55+ Community</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the buying process for 55+ communities helps ensure a smooth transaction and successful purchase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-Purchase Steps</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Research communities and amenities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Get pre-approved for financing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Visit communities and model homes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Review HOA documents and fees
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Purchase Process</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Make an offer and negotiate terms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Complete inspections and appraisals
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Finalize financing and closing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Move in and enjoy your new home
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
          priceMin={300000}
          priceMax={2000000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect 55+ Community?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you find the ideal 55+ community in Las Vegas with homes currently available for sale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-indigo-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Communities for Sale"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
}
