import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Summerlin 55+ Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  description:
    "Discover premier 55+ communities in Summerlin Las Vegas. Expert guidance from Dr. Jan Duffy on Heritage at Stonebridge, Sun City, and luxury active adult living. Call (702) 789-6561.",
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
    canonical: "https://heritagestonebridge.com/summerlin-55-plus-communities",
  },
  openGraph: {
    title: "Summerlin 55+ Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description:
      "Discover premier 55+ communities in Summerlin Las Vegas. Expert guidance from Dr. Jan Duffy on Heritage at Stonebridge, Sun City, and luxury active adult living.",
    type: "website",
    url: "https://heritagestonebridge.com/summerlin-55-plus-communities",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summerlin 55+ Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description:
      "Discover premier 55+ communities in Summerlin Las Vegas. Expert guidance from Dr. Jan Duffy on Heritage at Stonebridge, Sun City, and luxury active adult living.",
  },
  other: {
    "content-type": "service-page",
    audience: "adults-55-plus, summerlin-buyers",
    location: "Summerlin, Las Vegas, Nevada, USA",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/summerlin-55-plus-communities#service",
  "name": "Summerlin 55+ Communities",
  "description": "Expert real estate services specializing in 55+ communities in Summerlin Las Vegas, providing comprehensive guidance for active adult living in premier master-planned communities.",
  "provider": {
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "telephone": "+1-702-789-6561",
    "email": "DrDuffySells@HeritageStonebridge.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Summerlin, Las Vegas, Nevada"
  },
  "serviceType": "Summerlin 55+ Community Real Estate Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$400,000-$5,000,000",
    "description": "Summerlin 55+ communities with luxury amenities and golf courses"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best 55+ communities in Summerlin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best 55+ communities in Summerlin include Heritage at Stonebridge (new construction), Sun City Summerlin (established), The Ridges (luxury), Siena (resort-style), and Red Rock Country Club (golf course community)."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Summerlin for 55+ living?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Summerlin offers master-planned community amenities, championship golf courses, Red Rock Canyon access, world-class healthcare, Downtown Summerlin shopping, and a safe, well-maintained environment perfect for active adults."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities do Summerlin 55+ communities offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Summerlin 55+ communities typically offer golf courses, clubhouses, fitness centers, pools, social activities, maintenance services, and access to Red Rock Canyon recreation and Downtown Summerlin amenities."
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
      "name": "Summerlin Communities",
      "item": "https://heritagestonebridge.com/summerlin-55-plus-communities"
    }
  ]
};

export default function Summerlin55PlusCommunitiesPage() {
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
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Summerlin 55+ Communities
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover Las Vegas's premier active adult communities in Summerlin with championship golf courses, Red Rock Canyon views, and luxury amenities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors shadow-lg inline-block text-center">
              Explore Summerlin Communities
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Summerlin Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Summerlin is Perfect for 55+ Living</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover why Summerlin offers the ultimate active adult lifestyle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Master-Planned Excellence</h3>
              <p className="text-gray-600">Thoughtfully designed communities with parks, trails, and world-class amenities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Championship Golf</h3>
              <p className="text-gray-600">Multiple golf courses including TPC Las Vegas and Red Rock Country Club</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon Access</h3>
              <p className="text-gray-600">Minutes from hiking, rock climbing, and scenic drives in Red Rock Canyon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Summerlin Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premier 55+ Communities in Summerlin</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Summerlin's finest active adult communities, each offering unique amenities and lifestyle options for discerning 55+ buyers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p className="text-gray-600 mb-4">Lennar's newest 55+ community in Summerlin West with Everything's Included® features</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Three home collections (Cromwell, Stirling, Evander)</li>
                <li>• 8,000 sq ft clubhouse with fitness center</li>
                <li>• Resort-style pool & heated lap pool</li>
                <li>• Pickleball & bocce courts</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community with RV parking</li>
              </ul>
              <div className="text-lg font-bold text-green-600 mb-4">Starting from $464,990</div>
              <a href="/heritage-at-stonebridge-homes-for-sale" className="text-green-600 hover:text-green-800 font-semibold">View Heritage at Stonebridge →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sun City Summerlin</h3>
              <p className="text-gray-600 mb-4">Established premier 55+ community with multiple golf courses and mature amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Multiple championship golf courses</li>
                <li>• Recreation centers and pools</li>
                <li>• Extensive social clubs</li>
                <li>• Mature landscaping</li>
                <li>• Established community</li>
                <li>• Strong resale market</li>
              </ul>
              <div className="text-lg font-bold text-green-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" className="text-green-600 hover:text-green-800 font-semibold">View Sun City Summerlin →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Ridges</h3>
              <p className="text-gray-600 mb-4">Ultra-luxury community with custom estates and exclusive golf course access</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Custom luxury homes</li>
                <li>• Exclusive golf course</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Elite social scene</li>
                <li>• Highest-end finishes</li>
              </ul>
              <div className="text-lg font-bold text-green-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" className="text-green-600 hover:text-green-800 font-semibold">View The Ridges →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Siena</h3>
              <p className="text-gray-600 mb-4">Tuscan-inspired luxury community with resort amenities and sophisticated design</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Tuscan-inspired architecture</li>
                <li>• Resort-style amenities</li>
                <li>• Wine cellar & tasting room</li>
                <li>• Gourmet dining</li>
                <li>• Spa & wellness center</li>
                <li>• Private social clubs</li>
              </ul>
              <div className="text-lg font-bold text-green-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" className="text-green-600 hover:text-green-800 font-semibold">View Siena →</a>
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
              <div className="text-lg font-bold text-green-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" className="text-green-600 hover:text-green-800 font-semibold">View Country Club →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Arbors</h3>
              <p className="text-gray-600 mb-4">Family-friendly community with parks, trails, and excellent schools</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Parks and trails</li>
                <li>• Excellent schools</li>
                <li>• Family amenities</li>
                <li>• Community events</li>
                <li>• Safe environment</li>
                <li>• Convenient location</li>
              </ul>
              <div className="text-lg font-bold text-green-600 mb-4">$400,000 - $1,200,000</div>
              <a href="/the-arbors-summerlin" className="text-green-600 hover:text-green-800 font-semibold">View The Arbors →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Lifestyle Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Summerlin 55+ Lifestyle Advantage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Living in Summerlin's 55+ communities means enjoying the perfect blend of luxury amenities, natural beauty, and active adult living.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recreation & Amenities</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Championship golf courses and country clubs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Red Rock Canyon hiking and outdoor recreation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Downtown Summerlin shopping and dining
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  World-class healthcare and medical facilities
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Benefits</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Master-planned community with thoughtful design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Safe, well-maintained neighborhoods
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Active social scene and community events
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Convenient access to Las Vegas Strip
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
          priceMax={5000000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Summerlin 55+ Community?</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal Summerlin community that matches your lifestyle, budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Summerlin 55+ Communities"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="5000000"
      />
    </>
  );
}
