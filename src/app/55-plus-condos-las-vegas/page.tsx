import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/55-plus-condos-las-vegas#service",
  "name": "55+ Condos Las Vegas",
  "description": "Expert real estate services specializing in 55+ condos in Las Vegas, providing comprehensive guidance for maintenance-free living with resort amenities and prime locations.",
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
  "serviceType": "55+ Condo Real Estate Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$300,000-$2,000,000",
    "description": "55+ condos with maintenance-free living and resort amenities"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the benefits of 55+ condos in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "55+ condos in Las Vegas offer maintenance-free living, resort-style amenities, prime locations, security, social activities, and the convenience of lock-and-leave lifestyle perfect for active adults."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities do 55+ condos typically offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "55+ condos typically offer fitness centers, pools, clubhouses, social activities, maintenance services, security, concierge services, and resort-style amenities designed for active adult living."
      }
    },
    {
      "@type": "Question",
      "name": "Are 55+ condos good investments in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 55+ condos in Las Vegas are generally good investments due to strong demand from active adults, maintenance-free appeal, prime locations, and the growing 55+ demographic seeking convenient lifestyles."
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
      "name": "55+ Condos",
      "item": "https://heritagestonebridge.com/55-plus-condos-las-vegas"
    }
  ]
};

export const metadata: Metadata = {
  title: "55+ Condos Las Vegas | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  description: "Discover luxury 55+ condos in Las Vegas. Expert guidance from Dr. Jan Duffy on maintenance-free living, resort amenities, and prime locations. Call (702) 789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: { canonical: "https://heritagestonebridge.com/55-plus-condos-las-vegas" },
  other: {
    "content-type": "service-page",
    "audience": "adults-55-plus, condo-buyers",
    "location": "Las Vegas, Nevada, USA",
  },
  openGraph: {
    title: "55+ Condos Las Vegas | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description: "Discover luxury 55+ condos in Las Vegas. Expert guidance from Dr. Jan Duffy on maintenance-free living, resort amenities, and prime locations.",
    type: "website",
    url: "https://heritagestonebridge.com/55-plus-condos-las-vegas",
  },
  twitter: {
    card: "summary_large_image",
    title: "55+ Condos Las Vegas | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description: "Discover luxury 55+ condos in Las Vegas. Expert guidance from Dr. Jan Duffy on maintenance-free living, resort amenities, and prime locations.",
  },
};

export default function FiftyFivePlusCondosLasVegasPage() {
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
            55+ Condos Las Vegas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover luxury maintenance-free living in Las Vegas with resort amenities, prime locations, and active adult lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-indigo-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-100 transition-colors shadow-lg inline-block text-center">
              Explore 55+ Condos
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Condo Living Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose 55+ Condos in Las Vegas?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover the benefits of maintenance-free condo living with resort amenities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance-Free Living</h3>
              <p className="text-gray-600">No yard work, exterior maintenance, or repairs - perfect for active adults who want to travel and enjoy life</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resort Amenities</h3>
              <p className="text-gray-600">Fitness centers, pools, clubhouses, social activities, and concierge services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prime Locations</h3>
              <p className="text-gray-600">Convenient access to shopping, dining, entertainment, healthcare, and transportation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Condo Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premier 55+ Condo Communities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's finest 55+ condo communities, each offering unique amenities and lifestyle options for discerning active adults.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Martin at CityCenter</h3>
              <p className="text-gray-600 mb-4">Luxury high-rise condos with Strip views and resort amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Strip views and city lights</li>
                <li>• Resort-style amenities</li>
                <li>• Concierge services</li>
                <li>• Fitness center and spa</li>
                <li>• Rooftop pool and deck</li>
                <li>• Prime Strip location</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">$500,000 - $2,000,000+</div>
              <a href="/the-martin-citycenter" className="text-indigo-600 hover:text-indigo-800 font-semibold">View The Martin →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Turnberry Place</h3>
              <p className="text-gray-600 mb-4">Luxury condos with golf course views and resort amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Golf course views</li>
                <li>• Resort amenities</li>
                <li>• Fitness center</li>
                <li>• Pool and spa</li>
                <li>• Concierge services</li>
                <li>• Prime Summerlin location</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">$400,000 - $1,500,000</div>
              <a href="/turnberry-place" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Turnberry Place →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Signature at MGM Grand</h3>
              <p className="text-gray-600 mb-4">Luxury condos with Strip access and resort amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Strip access</li>
                <li>• Resort amenities</li>
                <li>• Fitness center</li>
                <li>• Pool and spa</li>
                <li>• Concierge services</li>
                <li>• Prime Strip location</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">$600,000 - $2,500,000+</div>
              <a href="/signature-mgm-grand" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Signature →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Residences at Mandarin Oriental</h3>
              <p className="text-gray-600 mb-4">Ultra-luxury condos with Strip views and five-star amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Strip views</li>
                <li>• Five-star amenities</li>
                <li>• Concierge services</li>
                <li>• Fitness center</li>
                <li>• Pool and spa</li>
                <li>• Prime Strip location</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">$800,000 - $5,000,000+</div>
              <a href="/mandarin-oriental-residences" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Mandarin Oriental →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Residences at Wynn</h3>
              <p className="text-gray-600 mb-4">Luxury condos with Strip views and resort amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Strip views</li>
                <li>• Resort amenities</li>
                <li>• Concierge services</li>
                <li>• Fitness center</li>
                <li>• Pool and spa</li>
                <li>• Prime Strip location</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">$700,000 - $3,000,000+</div>
              <a href="/wynn-residences" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Wynn Residences →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Residences at Bellagio</h3>
              <p className="text-gray-600 mb-4">Luxury condos with Strip views and resort amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Strip views</li>
                <li>• Resort amenities</li>
                <li>• Concierge services</li>
                <li>• Fitness center</li>
                <li>• Pool and spa</li>
                <li>• Prime Strip location</li>
              </ul>
              <div className="text-lg font-bold text-indigo-600 mb-4">$600,000 - $2,500,000+</div>
              <a href="/bellagio-residences" className="text-indigo-600 hover:text-indigo-800 font-semibold">View Bellagio Residences →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Condo Lifestyle Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The 55+ Condo Lifestyle Advantage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury, convenience, and active adult living in Las Vegas's premier 55+ condo communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maintenance-Free Benefits</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  No yard work or exterior maintenance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Lock-and-leave lifestyle for travel
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Professional management and security
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  Concierge services and amenities
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resort Amenities</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Fitness centers and wellness programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Pools, spas, and relaxation areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Social activities and community events
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Dining and entertainment options
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
          propertyTypes="Condo"
          priceMin={300000}
          priceMax={2000000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect 55+ Condo?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal condo community that matches your lifestyle, budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-indigo-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Condos Las Vegas"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
}
