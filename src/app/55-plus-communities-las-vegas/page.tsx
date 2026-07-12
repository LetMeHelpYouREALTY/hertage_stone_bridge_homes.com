import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/55-plus-communities-las-vegas#service",
  "name": "55+ Communities in Las Vegas",
  "description": "Expert real estate services specializing in 55+ communities in Las Vegas, providing comprehensive guidance for active adult living options and lifestyle choices.",
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
  "serviceType": "55+ Community Real Estate Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$300,000-$5,000,000",
    "description": "55+ communities in Las Vegas with active adult living options"
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
        "text": "The best 55+ communities in Las Vegas include Heritage at Stonebridge, Sun City Summerlin, The Ridges, Siena, and various Del Webb communities, each offering unique amenities and lifestyle benefits."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities do 55+ communities typically offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "55+ communities typically offer clubhouses, fitness centers, pools, golf courses, social activities, maintenance services, and age-restricted living environments."
      }
    },
    {
      "@type": "Question",
      "name": "What is the age requirement for 55+ communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most 55+ communities require at least one resident to be 55 years or older, with some communities allowing younger spouses or partners."
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
      "name": "Las Vegas Communities",
      "item": "https://heritagestonebridge.com/55-plus-communities-las-vegas"
    }
  ]
};

export const metadata: Metadata = {
  title: "55+ Communities in Las Vegas | Active Adult Living Guide - Dr. Jan Duffy",
  description: "Complete guide to 55+ communities in Las Vegas with active adult living options, amenities, and lifestyle information. Expert guidance for 55+ buyers. Call (702) 789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: { canonical: "https://heritagestonebridge.com/55-plus-communities-las-vegas" },
  other: {
    "content-type": "service-page",
    "audience": "adults-55-plus, active-adults",
    "location": "Las Vegas, Nevada, USA",
  },
  openGraph: {
    title: "55+ Communities in Las Vegas | Active Adult Living Guide",
    description: "Complete guide to 55+ communities in Las Vegas with active adult living options, amenities, and lifestyle information.",
    type: "website",
    url: "https://heritagestonebridge.com/55-plus-communities-las-vegas",
  },
  twitter: {
    card: "summary_large_image",
    title: "55+ Communities in Las Vegas | Active Adult Living Guide",
    description: "Complete guide to 55+ communities in Las Vegas with active adult living options, amenities, and lifestyle information.",
  },
};

export default function FiftyFivePlusCommunitiesLasVegasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            55+ Communities in Las Vegas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the premier active adult communities offering resort-style amenities, social activities, and maintenance-free living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-100 transition-colors shadow-lg inline-block text-center">
              Explore Communities
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Las Vegas 55+ Community Landscape</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas offers a diverse selection of 55+ communities, from new construction developments to established communities with mature amenities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Construction</h3>
              <p className="text-gray-600">Modern communities like Heritage at Stonebridge with contemporary amenities and smart home technology</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Established Communities</h3>
              <p className="text-gray-600">Mature communities like Sun City Summerlin with proven amenities and established social scenes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Options</h3>
              <p className="text-gray-600">High-end communities including The Ridges and Siena with premium amenities and concierge services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured 55+ Communities in Las Vegas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's premier active adult communities offering diverse lifestyles and amenities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p className="text-gray-600 mb-4">Lennar's newest 55+ community in Summerlin with Everything's Included® features</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Three home collections</li>
                <li>• Resort-style amenities</li>
                <li>• Red Rock Canyon views</li>
                <li>• Gated community</li>
                <li>• Smart home technology</li>
                <li>• New construction</li>
              </ul>
              <div className="text-lg font-bold text-emerald-600 mb-4">Starting from $464,990</div>
              <a href="/homes-for-sale-stonebridge-summerlin" className="text-emerald-600 hover:text-emerald-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sun City Summerlin</h3>
              <p className="text-gray-600 mb-4">Established premier 55+ community with golf courses and mature amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Active social scene</li>
                <li>• Mature landscaping</li>
                <li>• Established community</li>
                <li>• Strong resale market</li>
              </ul>
              <div className="text-lg font-bold text-emerald-600 mb-4">$500,000 - $1,500,000</div>
              <a href="/sun-city-summerlin-homes" className="text-emerald-600 hover:text-emerald-800 font-semibold">View Sun City Homes →</a>
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
              <div className="text-lg font-bold text-emerald-600 mb-4">$1,000,000 - $5,000,000+</div>
              <a href="/the-ridges-summerlin" className="text-emerald-600 hover:text-emerald-800 font-semibold">View Ridges Homes →</a>
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
              <div className="text-lg font-bold text-emerald-600 mb-4">$600,000 - $2,000,000+</div>
              <a href="/siena-summerlin-homes" className="text-emerald-600 hover:text-emerald-800 font-semibold">View Siena Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Del Webb Communities</h3>
              <p className="text-gray-600 mb-4">Multiple Del Webb communities with quality construction and active lifestyle focus</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Established reputation</li>
                <li>• Quality construction</li>
                <li>• Active lifestyle focus</li>
                <li>• Social activities</li>
                <li>• Maintenance-free living</li>
                <li>• Various price points</li>
              </ul>
              <div className="text-lg font-bold text-emerald-600 mb-4">$400,000 - $1,500,000</div>
              <a href="/del-webb-las-vegas" className="text-emerald-600 hover:text-emerald-800 font-semibold">View Del Webb Homes →</a>
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
              <div className="text-lg font-bold text-emerald-600 mb-4">$800,000 - $3,000,000+</div>
              <a href="/red-rock-country-club" className="text-emerald-600 hover:text-emerald-800 font-semibold">View Country Club Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of 55+ Community Living</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of active adult community living in Las Vegas, from social connections to maintenance-free lifestyles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Social & Lifestyle Benefits</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Active social scene with clubs and activities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Like-minded neighbors and friendships
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Organized events and entertainment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                  Volunteer opportunities and community involvement
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical Benefits</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Maintenance-free living and services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Security and gated communities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Access to amenities and facilities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Age-appropriate environment and activities
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
          priceMax={5000000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect 55+ Community?</h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the ideal 55+ community in Las Vegas that matches your lifestyle, budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Communities Las Vegas"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="5000000"
      />
    </>
  );
}
