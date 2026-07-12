import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
  description:
    "Discover Northwest Las Vegas real estate with Dr. Jan Duffy. Growing area with new construction, modern amenities, and convenient access to the Strip. Call 702-789-6561.",
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
    canonical: "https://heritagestonebridge.com/northwest-las-vegas",
  },
  openGraph: {
    title: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
    description:
      "Discover Northwest Las Vegas real estate in growing area with new construction and modern amenities.",
    type: "website",
    url: "https://heritagestonebridge.com/northwest-las-vegas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northwest Las Vegas Real Estate | Dr. Jan Duffy - Growing Communities",
    description:
      "Discover Northwest Las Vegas real estate in growing area with new construction and modern amenities.",
  },
  other: {
    "content-type": "service-area",
    audience: "families, luxury-home-buyers",
    location: "Northwest Las Vegas, Nevada, USA",
  },
};

export default function NorthwestLasVegasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Northwest Las Vegas Real Estate
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the growing Northwest Las Vegas area with new construction, modern amenities, and convenient access to the Strip
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Schedule Northwest Tour
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Northwest Las Vegas Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Northwest Las Vegas?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Northwest Las Vegas is one of the fastest-growing areas in the valley, offering new construction homes, modern amenities, and excellent value for money with convenient access to the Strip.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Construction</h3>
              <p className="text-gray-600">Modern homes with the latest features, designs, and energy-efficient systems</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Access</h3>
              <p className="text-gray-600">Easy access to the Las Vegas Strip, downtown, and major highways</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Great Value</h3>
              <p className="text-gray-600">More home for your money compared to established areas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Potential</h3>
              <p className="text-gray-600">Rapidly developing area with increasing property values</p>
            </div>
          </div>
        </div>
      </section>

      {/* Northwest Las Vegas Lifestyle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Northwest Las Vegas Lifestyle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Northwest Las Vegas offers the perfect combination of new construction, modern amenities, and convenient access to everything Las Vegas has to offer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Northwest Las Vegas?</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>New Construction:</strong> Modern homes with latest features, energy-efficient systems, and contemporary designs
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Great Value:</strong> More home for your money compared to established areas like Summerlin
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Growth Potential:</strong> Rapidly developing area with increasing property values and new amenities
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Convenient Access:</strong> Easy access to Las Vegas Strip, downtown, and major highways
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Family-Friendly:</strong> New schools, parks, and recreational facilities designed for modern living
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Northwest Las Vegas Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Population:</span>
                  <span>200,000+ residents</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Growth Rate:</span>
                  <span>Fastest growing area</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">New Communities:</span>
                  <span>10+ master-planned</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Distance to Strip:</span>
                  <span>15-25 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Schools:</span>
                  <span>New & modern facilities</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Parks:</span>
                  <span>50+ parks & trails</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Northwest Las Vegas Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Northwest Las Vegas Communities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Northwest Las Vegas's diverse neighborhoods, from master-planned communities to new construction developments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skye Canyon</h3>
              <p className="text-gray-600 mb-4">Master-planned community with outdoor recreation, parks, and modern amenities.</p>
              <a href="/skye-canyon-homes" className="text-purple-600 hover:text-purple-800 font-semibold">View Skye Canyon Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Centennial Hills</h3>
              <p className="text-gray-600 mb-4">Established community with parks, schools, and convenient shopping.</p>
              <a href="/centennial-hills-homes" className="text-purple-600 hover:text-purple-800 font-semibold">View Centennial Hills Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aliante</h3>
              <p className="text-gray-600 mb-4">Master-planned community with golf course, parks, and family amenities.</p>
              <a href="/aliante-homes" className="text-purple-600 hover:text-purple-800 font-semibold">View Aliante Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tule Springs</h3>
              <p className="text-gray-600 mb-4">New development with modern homes and community amenities.</p>
              <a href="/tule-springs-homes" className="text-purple-600 hover:text-purple-800 font-semibold">View Tule Springs Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desert Shores</h3>
              <p className="text-gray-600 mb-4">Waterfront community with lakes, parks, and recreational facilities.</p>
              <a href="/desert-shores-homes" className="text-purple-600 hover:text-purple-800 font-semibold">View Desert Shores Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">North Las Vegas</h3>
              <p className="text-gray-600 mb-4">Growing area with new construction and affordable housing options.</p>
              <a href="/north-las-vegas-homes" className="text-purple-600 hover:text-purple-800 font-semibold">View North Las Vegas Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">New Construction in Northwest Las Vegas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Northwest Las Vegas is home to numerous new construction developments offering modern homes with the latest features and designs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">New Construction Benefits</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Latest building codes and safety features
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Energy-efficient systems and appliances
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Modern floor plans and open designs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Warranty coverage on major systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  Customization options available
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Popular Builders</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Lennar - Modern homes with smart features
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Pulte Homes - Quality construction and design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  KB Home - Affordable new construction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Richmond American - Customizable floor plans
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Toll Brothers - Luxury new construction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Northwest Las Vegas Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Northwest Las Vegas Listings</h2>
            <p className="text-lg text-gray-600">Explore available homes in Northwest Las Vegas's growing communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF"
            priceMin={250000}
            priceMax={1500000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy for Northwest Las Vegas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Northwest Las Vegas Real Estate?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With comprehensive knowledge of Northwest Las Vegas's growing communities and new construction developments, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Northwest Specialist</h3>
              <p className="text-gray-600">Deep expertise in Northwest Las Vegas communities and new construction developments.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">New Construction Expert</h3>
              <p className="text-gray-600">Specialized knowledge of new construction processes and builder relationships.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">Dedicated support throughout your Northwest Las Vegas home buying journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Northwest Las Vegas Dream Home?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Northwest Las Vegas's growing communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Schedule Northwest Tour
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Northwest Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="250000"
        priceMax="1500000"
      />
    </>
  );
}
