import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/active-adult-lifestyle-communities#service",
  "name": "Active Adult Lifestyle Communities",
  "description": "Expert real estate services specializing in active adult lifestyle communities in Las Vegas, providing comprehensive guidance for 55+ communities with resort amenities, social activities, and maintenance-free living.",
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
  "serviceType": "Active Adult Lifestyle Community Real Estate Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$400,000-$3,000,000",
    "description": "Active adult lifestyle communities with resort amenities"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What defines an active adult lifestyle community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active adult lifestyle communities are age-restricted communities (typically 55+) that offer resort-style amenities, social activities, maintenance-free living, and a focus on active, healthy lifestyles for residents."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities do active adult lifestyle communities offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active adult lifestyle communities typically offer fitness centers, pools, golf courses, clubhouses, social activities, maintenance services, security, and resort-style amenities designed for active adult living."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose an active adult lifestyle community?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active adult lifestyle communities offer maintenance-free living, social opportunities, resort amenities, security, and a focus on healthy, active lifestyles perfect for adults 55+ seeking an engaging community environment."
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
      "name": "Active Adult Lifestyle",
      "item": "https://heritagestonebridge.com/active-adult-lifestyle-communities"
    }
  ]
};

export const metadata: Metadata = {
  title: "Active Adult Lifestyle Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
  description: "Discover active adult lifestyle communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities with resort amenities, social activities, and maintenance-free living. Call (702) 789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: { canonical: "https://heritagestonebridge.com/active-adult-lifestyle-communities" },
  other: {
    "content-type": "service-page",
    "audience": "adults-55-plus, lifestyle-buyers",
    "location": "Las Vegas, Nevada, USA",
  },
  openGraph: {
    title: "Active Adult Lifestyle Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description: "Discover active adult lifestyle communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities with resort amenities, social activities, and maintenance-free living.",
    type: "website",
    url: "https://heritagestonebridge.com/active-adult-lifestyle-communities",
  },
  twitter: {
    card: "summary_large_image",
    title: "Active Adult Lifestyle Communities | Dr. Jan Duffy | Las Vegas Real Estate Expert",
    description: "Discover active adult lifestyle communities in Las Vegas. Expert guidance from Dr. Jan Duffy on 55+ communities with resort amenities, social activities, and maintenance-free living.",
  },
};

export default function ActiveAdultLifestyleCommunitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Active Adult Lifestyle Communities
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover vibrant 55+ communities designed for active adults with resort amenities, social activities, and maintenance-free living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Explore Lifestyle Communities
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Active Adult Lifestyle Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Active Adult Lifestyle Communities?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As Las Vegas's leading 55+ community expert, I've helped hundreds of active adults discover the benefits of lifestyle-focused communities designed for healthy, engaging living.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resort-Style Amenities</h3>
              <p className="text-gray-600">Fitness centers, pools, golf courses, clubhouses, and spa facilities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Activities</h3>
              <p className="text-gray-600">Clubs, events, classes, and activities designed for active adult engagement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance-Free Living</h3>
              <p className="text-gray-600">No yard work, exterior maintenance, or repairs - focus on enjoying life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lifestyle Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premier Active Adult Lifestyle Communities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's finest active adult lifestyle communities, each offering unique amenities and lifestyle options for discerning 55+ buyers.
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
              <div className="text-lg font-bold text-teal-600 mb-4">Starting from $464,990</div>
              <a href="/heritage-at-stonebridge-homes-for-sale" className="text-teal-600 hover:text-teal-800 font-semibold">View Heritage at Stonebridge →</a>
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
              <div className="text-lg font-bold text-teal-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" className="text-teal-600 hover:text-teal-800 font-semibold">View Sun City Summerlin →</a>
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
              <div className="text-lg font-bold text-teal-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-anthem" className="text-teal-600 hover:text-teal-800 font-semibold">View Sun City Anthem →</a>
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
              <div className="text-lg font-bold text-teal-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" className="text-teal-600 hover:text-teal-800 font-semibold">View The Ridges →</a>
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
              <div className="text-lg font-bold text-teal-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" className="text-teal-600 hover:text-teal-800 font-semibold">View Siena →</a>
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
              <div className="text-lg font-bold text-teal-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" className="text-teal-600 hover:text-teal-800 font-semibold">View Country Club →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Active Adult Lifestyle Advantage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury amenities, social engagement, and maintenance-free living in Las Vegas's premier active adult lifestyle communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health & Wellness</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  State-of-the-art fitness centers and wellness programs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Pools, spas, and relaxation areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Walking trails and outdoor recreation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Health and wellness classes
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Engagement</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Clubs and interest groups
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Community events and activities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Educational classes and workshops
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Travel and excursion groups
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
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Active Adult Lifestyle Community?</h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            As Las Vegas's premier 55+ community specialist, I'll help you discover the ideal active adult lifestyle community that matches your interests, budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call Dr. Jan (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Active Adult Lifestyle Communities"
        subtitle="Call Dr. Jan (702) 789-6561"
        priceMin="400000"
        priceMax="3000000"
      />
    </>
  );
}
