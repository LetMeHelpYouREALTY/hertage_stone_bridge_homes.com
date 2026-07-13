import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent#service",
  "name": "55+ Communities in Las Vegas for Rent",
  "description": "Expert real estate services specializing in 55+ communities for rent in Las Vegas, providing rental listings and guidance for active adult renters.",
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
  "serviceType": "55+ Community Rental Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$2,000-$6,000/month",
    "description": "55+ communities in Las Vegas for rent with active adult amenities"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are there 55+ communities in Las Vegas that allow rentals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many 55+ communities in Las Vegas allow rentals, including Sun City Summerlin, Del Webb communities, and some luxury communities, though rental policies vary by community."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical rent for 55+ community homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rent for 55+ community homes in Las Vegas typically ranges from $2,000 to $6,000 per month, depending on size, location, amenities, and community type."
      }
    },
    {
      "@type": "Question",
      "name": "Do renters get access to community amenities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, renters in 55+ communities typically have access to community amenities, though some communities may have restrictions or additional fees for renters."
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
      "name": "Communities for Rent",
      "item": "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent"
    }
  ]
};

export const metadata: Metadata = {
  title: "55+ Communities in Las Vegas for Rent | Active Adult Rental Homes - Dr. Jan Duffy",
  description: "Find 55+ communities in Las Vegas for rent with active adult rental homes, amenities, and flexible lease options. Expert guidance for renters. Call (702) 789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: { canonical: "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent" },
  other: {
    "content-type": "service-page",
    "audience": "adults-55-plus, renters",
    "location": "Las Vegas, Nevada, USA",
  },
  openGraph: {
    title: "55+ Communities in Las Vegas for Rent | Active Adult Rental Homes",
    description: "Find 55+ communities in Las Vegas for rent with active adult rental homes, amenities, and flexible lease options.",
    type: "website",
    url: "https://heritagestonebridge.com/55-and-over-communities-las-vegas-for-rent",
  },
  twitter: {
    card: "summary_large_image",
    title: "55+ Communities in Las Vegas for Rent | Active Adult Rental Homes",
    description: "Find 55+ communities in Las Vegas for rent with active adult rental homes, amenities, and flexible lease options.",
  },
};

export default function FiftyFiveAndOverCommunitiesLasVegasForRentPage() {
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
            55+ Communities in Las Vegas for Rent
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover active adult rental homes with access to community amenities, social activities, and maintenance-free living
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Find Rental Homes
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Rental Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">55+ Community Rental Market</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas offers rental opportunities in various 55+ communities, allowing you to experience active adult living before committing to purchase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rental Availability</h3>
              <p className="text-gray-600">Limited but available rental homes in established 55+ communities with owner-occupied properties</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amenity Access</h3>
              <p className="text-gray-600">Renters typically have access to community amenities, pools, fitness centers, and social activities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Terms</h3>
              <p className="text-gray-600">Various lease terms available, from short-term rentals to annual leases with renewal options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities with Rental Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Communities with Rental Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore 55+ communities in Las Vegas that offer rental opportunities for active adults.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sun City Summerlin</h3>
              <p className="text-gray-600 mb-4">Established community with occasional rental homes available from owners</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Multiple golf courses</li>
                <li>• Recreation centers</li>
                <li>• Active social scene</li>
                <li>• Mature landscaping</li>
                <li>• Established community</li>
                <li>• Owner rentals available</li>
              </ul>
              <div className="text-lg font-bold text-teal-600 mb-4">$2,500 - $4,500/month</div>
              <a href="/sun-city-summerlin-rentals" className="text-teal-600 hover:text-teal-800 font-semibold">View Rental Options →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Del Webb Communities</h3>
              <p className="text-gray-600 mb-4">Various Del Webb communities with rental homes from individual owners</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Quality construction</li>
                <li>• Active lifestyle focus</li>
                <li>• Social activities</li>
                <li>• Maintenance-free living</li>
                <li>• Various price points</li>
                <li>• Owner rental policies</li>
              </ul>
              <div className="text-lg font-bold text-teal-600 mb-4">$2,000 - $5,000/month</div>
              <a href="/del-webb-rentals" className="text-teal-600 hover:text-teal-800 font-semibold">View Del Webb Rentals →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Siena</h3>
              <p className="text-gray-600 mb-4">Luxury community with occasional rental homes from owners</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Tuscan-inspired architecture</li>
                <li>• Resort-style amenities</li>
                <li>• Wine cellar & tasting room</li>
                <li>• Gourmet dining</li>
                <li>• Spa & wellness center</li>
                <li>• Private social clubs</li>
              </ul>
              <div className="text-lg font-bold text-teal-600 mb-4">$3,500 - $6,000/month</div>
              <a href="/siena-rentals" className="text-teal-600 hover:text-teal-800 font-semibold">View Siena Rentals →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Country Club</h3>
              <p className="text-gray-600 mb-4">Exclusive golf course community with limited rental opportunities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Private golf course</li>
                <li>• Country club membership</li>
                <li>• Luxury amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive events</li>
                <li>• Limited rental availability</li>
              </ul>
              <div className="text-lg font-bold text-teal-600 mb-4">$4,000 - $8,000/month</div>
              <a href="/red-rock-country-club-rentals" className="text-teal-600 hover:text-teal-800 font-semibold">View Country Club Rentals →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">MacDonald Ranch</h3>
              <p className="text-gray-600 mb-4">Henderson luxury community with occasional rental homes</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Custom luxury homes</li>
                <li>• Golf course access</li>
                <li>• Private amenities</li>
                <li>• Mountain views</li>
                <li>• Exclusive location</li>
                <li>• High-end finishes</li>
              </ul>
              <div className="text-lg font-bold text-teal-600 mb-4">$3,000 - $7,000/month</div>
              <a href="/macdonald-ranch-rentals" className="text-teal-600 hover:text-teal-800 font-semibold">View MacDonald Ranch Rentals →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seven Hills</h3>
              <p className="text-gray-600 mb-4">Gated luxury community with limited rental opportunities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Gated community</li>
                <li>• Custom estates</li>
                <li>• Mountain views</li>
                <li>• Private amenities</li>
                <li>• Exclusive location</li>
                <li>• Luxury finishes</li>
              </ul>
              <div className="text-lg font-bold text-teal-600 mb-4">$3,500 - $8,000/month</div>
              <a href="/seven-hills-rentals" className="text-teal-600 hover:text-teal-800 font-semibold">View Seven Hills Rentals →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Considerations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Rental Considerations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding rental policies, costs, and requirements helps ensure a successful rental experience in 55+ communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rental Policies</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Age restrictions (55+ requirement)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Lease terms and renewal options
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Amenity access and restrictions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Pet policies and limitations
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Considerations</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Monthly rent and security deposits
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  HOA fees and community assessments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Utilities and maintenance costs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Application and background check fees
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
          listingStatus="For Rent"
          propertyTypes="SFR"
          priceMin={2000}
          priceMax={8000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Rental?</h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you find the ideal 55+ community rental in Las Vegas with access to amenities and active adult lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Communities for Rent"
        subtitle="Call (702) 789-6561"
        priceMin="2000"
        priceMax="8000"
      />
    </>
  );
}
