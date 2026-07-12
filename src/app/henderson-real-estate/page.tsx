import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Henderson Real Estate | Dr. Jan Duffy - Family-Friendly Communities",
  description: "Discover Henderson real estate with Dr. Jan Duffy. Family-friendly community with excellent schools, parks, and diverse housing options. Call 702-789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://heritagestonebridge.com/henderson-real-estate",
  },
  openGraph: {
    title: "Henderson Real Estate | Dr. Jan Duffy - Family-Friendly Communities",
    description: "Discover Henderson real estate in family-friendly community with excellent schools and diverse housing options.",
    type: "website",
    url: "https://heritagestonebridge.com/henderson-real-estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henderson Real Estate | Dr. Jan Duffy - Family-Friendly Communities",
    description: "Discover Henderson real estate in family-friendly community with excellent schools and diverse housing options.",
  },
  other: {
    "content-type": "service-area",
    audience: "families, luxury-home-buyers",
    location: "Henderson, Nevada, USA",
  },
};

export default function HendersonRealEstatePage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Henderson Real Estate
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover family-friendly living in Henderson, Nevada's second-largest city with excellent schools, parks, and diverse housing options
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Henderson Tour
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Henderson Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Henderson?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Henderson offers the perfect blend of suburban charm and urban convenience, with excellent schools, beautiful parks, and diverse housing options for every lifestyle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellent Schools</h3>
              <p className="text-gray-600">Top-rated public and private schools with strong academic programs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Beautiful Parks</h3>
              <p className="text-gray-600">Numerous parks, trails, and recreational facilities throughout the city</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shopping & Dining</h3>
              <p className="text-gray-600">Galleria at Sunset, The District, and diverse dining options</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-gray-600">St. Rose Dominican Hospital and Henderson Hospital for quality care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Lifestyle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Henderson Lifestyle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Henderson offers the perfect blend of suburban charm, excellent schools, and convenient access to Las Vegas amenities, making it ideal for families and active adults.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Henderson?</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Family-Friendly:</strong> Top-rated schools and safe neighborhoods perfect for families
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Outdoor Recreation:</strong> Lake Mead, Sloan Canyon, and numerous parks and trails
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Economic Growth:</strong> Strong job market with major employers and business parks
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Cultural Attractions:</strong> Henderson Events Plaza, museums, and performing arts
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Convenient Location:</strong> 20 minutes to Las Vegas Strip and McCarran Airport
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Henderson Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Population:</span>
                  <span>320,000+ residents</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Founded:</span>
                  <span>1953</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Size:</span>
                  <span>108 square miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Schools:</span>
                  <span>40+ public schools</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Parks:</span>
                  <span>60+ parks and trails</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Distance to Strip:</span>
                  <span>20 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Henderson Communities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Henderson's diverse neighborhoods, from master-planned communities to established areas with unique character and amenities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Green Valley</h3>
              <p className="text-gray-600 mb-4">Established community with mature trees, parks, and excellent schools.</p>
              <a href="/green-valley-henderson" className="text-blue-600 hover:text-blue-800 font-semibold">View Green Valley Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Anthem</h3>
              <p className="text-gray-600 mb-4">Master-planned community with golf courses, parks, and resort amenities.</p>
              <a href="/anthem-henderson" className="text-blue-600 hover:text-blue-800 font-semibold">View Anthem Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">MacDonald Ranch</h3>
              <p className="text-gray-600 mb-4">Luxury community with custom homes and golf course access.</p>
              <a href="/macdonald-ranch-henderson" className="text-blue-600 hover:text-blue-800 font-semibold">View MacDonald Ranch Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seven Hills</h3>
              <p className="text-gray-600 mb-4">Gated community with luxury homes and mountain views.</p>
              <a href="/seven-hills-henderson" className="text-blue-600 hover:text-blue-800 font-semibold">View Seven Hills Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inspirada</h3>
              <p className="text-gray-600 mb-4">Modern master-planned community with contemporary homes and amenities.</p>
              <a href="/inspirada-henderson" className="text-blue-600 hover:text-blue-800 font-semibold">View Inspirada Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sun City Anthem</h3>
              <p className="text-gray-600 mb-4">Premier 55+ community with golf courses and resort-style amenities.</p>
              <a href="/sun-city-anthem" className="text-blue-600 hover:text-blue-800 font-semibold">View Sun City Anthem Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 55+ Communities in Henderson */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">55+ Active Adult Communities in Henderson</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Henderson offers several premier active adult communities designed for the 55+ lifestyle, featuring resort-style amenities and vibrant social scenes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sun City Anthem</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Multiple golf courses and driving ranges
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Recreation centers with pools and spas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Arts and crafts studios
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Social clubs and activities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Healthcare facilities on-site
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Other 55+ Communities</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Solera at Anthem - Luxury active adult living
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Regency at Seven Hills - Gated community
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Heritage at Inspirada - Modern 55+ living
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Del Webb communities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Various age-restricted neighborhoods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Henderson Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Henderson Listings</h2>
            <p className="text-lg text-gray-600">Explore available homes in Henderson's diverse communities</p>
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

      {/* Why Choose Dr. Jan Duffy for Henderson */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Henderson Real Estate?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With comprehensive knowledge of Henderson's communities and specialized expertise in 55+ active adult living, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Henderson Specialist</h3>
              <p className="text-gray-600">Deep expertise in Henderson's neighborhoods, schools, and community amenities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">55+ Community Expert</h3>
              <p className="text-gray-600">Specialized knowledge of active adult communities and their unique requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Dedicated support throughout your Henderson home buying or selling journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Henderson Dream Home?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Henderson's family-friendly community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Schedule Henderson Tour
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
        title="Henderson Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
}
