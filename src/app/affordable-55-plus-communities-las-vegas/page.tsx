import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://heritagestonebridge.com/affordable-55-plus-communities-las-vegas#service",
  "name": "Affordable 55+ Communities in Las Vegas",
  "description": "Expert real estate services specializing in affordable 55+ communities in Las Vegas, helping active adults find budget-friendly retirement living options.",
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
  "serviceType": "Affordable 55+ Community Real Estate Services",
  "offers": {
    "@type": "Offer",
    "priceRange": "$300,000-$500,000",
    "description": "Affordable 55+ communities in Las Vegas with budget-friendly pricing"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the most affordable 55+ communities in Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most affordable 55+ communities in Las Vegas include Heritage at Stonebridge (starting at $464,990), Del Webb communities, and established Sun City communities with resale options under $500,000."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities are included in affordable 55+ communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Affordable 55+ communities typically include clubhouses, pools, fitness centers, social activities, maintenance services, and security features while keeping costs reasonable."
      }
    },
    {
      "@type": "Question",
      "name": "Are there financing options for affordable 55+ communities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, there are various financing options including traditional mortgages, FHA loans, VA loans, and specialized programs for active adult communities."
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
      "name": "Affordable 55+ Communities",
      "item": "https://heritagestonebridge.com/affordable-55-plus-communities-las-vegas"
    }
  ]
};

export const metadata: Metadata = {
  title: "Affordable 55+ Communities in Las Vegas | Budget-Friendly Active Adult Living - Dr. Jan Duffy",
  description: "Discover affordable 55+ communities in Las Vegas with budget-friendly active adult living options. Expert guidance for finding quality 55+ communities under $500K. Call (702) 789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: { canonical: "https://heritagestonebridge.com/affordable-55-plus-communities-las-vegas" },
  other: {
    "content-type": "service-page",
    "audience": "adults-55-plus, budget-conscious-buyers",
    "location": "Las Vegas, Nevada, USA",
  },
  openGraph: {
    title: "Affordable 55+ Communities in Las Vegas | Budget-Friendly Active Adult Living",
    description: "Discover affordable 55+ communities in Las Vegas with budget-friendly active adult living options under $500K.",
    type: "website",
    url: "https://heritagestonebridge.com/affordable-55-plus-communities-las-vegas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable 55+ Communities in Las Vegas | Budget-Friendly Active Adult Living",
    description: "Discover affordable 55+ communities in Las Vegas with budget-friendly active adult living options under $500K.",
  },
};

export default function Affordable55PlusCommunitiesLasVegasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Affordable 55+ Communities in Las Vegas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover budget-friendly active adult living options in Las Vegas with quality amenities and vibrant social scenes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors shadow-lg inline-block text-center">
              Find Affordable Communities
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Affordable Options Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Budget-Friendly 55+ Living Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas offers several affordable 55+ communities that provide quality amenities and active adult lifestyle without breaking the budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Price Range</h3>
              <p className="text-gray-600">$300,000 - $500,000 for quality 55+ communities with essential amenities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Value Features</h3>
              <p className="text-gray-600">Clubhouses, pools, fitness centers, and social activities included</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financing Options</h3>
              <p className="text-gray-600">Traditional mortgages, FHA, VA loans, and specialized programs available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Affordable Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Affordable 55+ Communities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas's most affordable active adult communities offering quality amenities at budget-friendly prices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p className="text-gray-600 mb-4">Starting at $464,990 - New construction with Lennar Everything's Included® features</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• 8,000 sq ft clubhouse</li>
                <li>• Resort-style pool & spa</li>
                <li>• Pickleball & bocce courts</li>
                <li>• Gated community</li>
              </ul>
              <a href="/homes-for-sale-stonebridge-summerlin" className="text-green-600 hover:text-green-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Del Webb Communities</h3>
              <p className="text-gray-600 mb-4">Various price points - Established communities with proven amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Golf course communities</li>
                <li>• Fitness centers</li>
                <li>• Social clubs</li>
                <li>• Maintenance-free living</li>
              </ul>
              <a href="/del-webb-las-vegas" className="text-green-600 hover:text-green-800 font-semibold">View Del Webb Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sun City Resale</h3>
              <p className="text-gray-600 mb-4">$350,000+ - Established community with mature amenities</p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Mature landscaping</li>
                <li>• Established amenities</li>
                <li>• Active social scene</li>
                <li>• Proven track record</li>
              </ul>
              <a href="/sun-city-resale-homes" className="text-green-600 hover:text-green-800 font-semibold">View Sun City Resale →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Cost-Saving Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for Finding Affordable 55+ Communities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert advice for finding quality 55+ communities that fit your budget without compromising on lifestyle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Budget Planning</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Consider total monthly costs including HOA fees
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Factor in property taxes and insurance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Look for communities with included amenities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Compare resale vs new construction value
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financing Strategies</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Explore FHA loans for lower down payments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Consider VA loans if eligible
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Look for builder incentives and promotions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Compare interest rates and terms
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
          priceMax={500000}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Affordable 55+ Community?</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you find the perfect affordable 55+ community in Las Vegas that fits your budget and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-100 transition-colors shadow-lg inline-block text-center">
              Start Your Search
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Affordable 55+ Communities"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="500000"
      />
    </>
  );
}
