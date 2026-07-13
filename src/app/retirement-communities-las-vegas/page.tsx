import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Retirement Communities Las Vegas | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  description:
    "Discover premier retirement communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities, active adult living, and maintenance-free retirement. Call (702) 789-6561.",
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
    canonical: "https://heritagestonebridge.com/retirement-communities-las-vegas",
  },
  openGraph: {
    title: "Retirement Communities Las Vegas | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description:
      "Discover premier retirement communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities, active adult living, and maintenance-free retirement.",
    type: "website",
    url: "https://heritagestonebridge.com/retirement-communities-las-vegas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retirement Communities Las Vegas | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description:
      "Discover premier retirement communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities, active adult living, and maintenance-free retirement.",
  },
  other: {
    "content-type": "service-page",
    audience: "adults-55-plus, retirement-buyers",
    location: "Las Vegas, Nevada, USA",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/retirement-communities-las-vegas#service",
  "name": "Retirement Communities Las Vegas",
  "description": "Expert real estate services specializing in retirement communities in Las Vegas, providing comprehensive guidance for 55+ communities, active adult living, and maintenance-free retirement.",
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
  "serviceType": "Retirement Community Real Estate Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$400,000-$3,000,000",
    "description": "Retirement communities with maintenance-free living and resort amenities"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best retirement communities in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best retirement communities in Las Vegas include Heritage at Stonebridge (new construction), Sun City Summerlin (established), Sun City Anthem (Henderson), The Ridges (luxury), Siena (resort-style), and Red Rock Country Club (golf course community)."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities do retirement communities offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Retirement communities typically offer golf courses, clubhouses, fitness centers, pools, social activities, maintenance services, security, and resort-style amenities designed for active adult living."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Las Vegas for retirement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las Vegas offers no state income tax, year-round sunshine, world-class entertainment, excellent healthcare, outdoor recreation, and a variety of retirement communities with resort amenities and active adult lifestyles."
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
      "name": "Retirement Communities",
      "item": "https://heritagestonebridge.com/retirement-communities-las-vegas"
    }
  ]
};

export default function RetirementCommunitiesLasVegasPage() {
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
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Retirement Communities Las Vegas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover premier 55+ retirement communities with resort amenities, maintenance-free living, and active adult lifestyles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-orange-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-100 transition-colors shadow-lg inline-block text-center">
              Explore Retirement Communities
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Las Vegas Retirement Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Las Vegas for Retirement?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of retirees discover why Las Vegas offers the perfect retirement destination with tax benefits, sunshine, and world-class amenities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">No State Income Tax</h3>
              <p className="text-gray-600">Keep more of your retirement income with Nevada's tax-friendly environment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Year-Round Sunshine</h3>
              <p className="text-gray-600">Enjoy 300+ days of sunshine with mild winters and perfect outdoor weather</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">World-Class Amenities</h3>
              <p className="text-gray-600">Access to entertainment, dining, healthcare, and recreational activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Retirement Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premier Retirement Communities in Las Vegas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's finest retirement communities, each offering unique amenities and lifestyle options for discerning 55+ buyers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p className="text-gray-600 mb-4">Lennar's newest 55+ community with Everything's Included® features and resort amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Three home collections</li>
                <li>• 8,000 sq ft clubhouse</li>
                <li>• Resort-style pool</li>
                <li>• Pickleball & bocce courts</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community</li>
              </ul>
              <div className="text-lg font-bold text-orange-600 mb-4">Starting from $464,990</div>
              <a href="/heritage-at-stonebridge-homes-for-sale" className="text-orange-600 hover:text-orange-800 font-semibold">View Heritage at Stonebridge →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sun City Summerlin</h3>
              <p className="text-gray-600 mb-4">Established premier 55+ community with multiple golf courses and mature amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Extensive social clubs</li>
                <li>• Mature landscaping</li>
                <li>• Established community</li>
                <li>• Strong resale market</li>
              </ul>
              <div className="text-lg font-bold text-orange-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" className="text-orange-600 hover:text-orange-800 font-semibold">View Sun City Summerlin →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sun City Anthem</h3>
              <p className="text-gray-600 mb-4">Henderson's premier 55+ community with golf courses and vibrant social scene</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Active social scene</li>
                <li>• Mature landscaping</li>
                <li>• Established community</li>
                <li>• Strong resale market</li>
              </ul>
              <div className="text-lg font-bold text-orange-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-anthem" className="text-orange-600 hover:text-orange-800 font-semibold">View Sun City Anthem →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Ridges</h3>
              <p className="text-gray-600 mb-4">Ultra-luxury community with custom estates and exclusive golf course access</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Custom luxury homes</li>
                <li>• Exclusive golf course</li>
                <li>• Private amenities</li>
                <li>• Mountain views</li>
                <li>• Elite social scene</li>
                <li>• Highest-end finishes</li>
              </ul>
              <div className="text-lg font-bold text-orange-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" className="text-orange-600 hover:text-orange-800 font-semibold">View The Ridges →</a>
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
              <div className="text-lg font-bold text-orange-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" className="text-orange-600 hover:text-orange-800 font-semibold">View Siena →</a>
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
              <div className="text-lg font-bold text-orange-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" className="text-orange-600 hover:text-orange-800 font-semibold">View Country Club →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Lifestyle Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Las Vegas Retirement Lifestyle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury amenities, outdoor recreation, and maintenance-free living in Las Vegas's premier retirement communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdoor Recreation</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Red Rock Canyon hiking and rock climbing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Lake Mead water sports and fishing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Championship golf courses
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  Year-round outdoor activities
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Entertainment & Culture</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  World-class shows and entertainment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Fine dining and culinary experiences
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Museums and cultural attractions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Shopping and retail therapy
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
          priceMax={3000000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Retirement Community?</h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal retirement community that matches your lifestyle, budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-orange-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Retirement Communities Las Vegas"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="3000000"
      />
    </>
  );
}
