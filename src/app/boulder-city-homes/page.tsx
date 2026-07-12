import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Boulder City Homes for Sale | Dr. Jan Duffy - Historic Community Near Lake Mead",
  description: "Discover Boulder City homes for sale with Dr. Jan Duffy. Historic community near Lake Mead with small-town charm, outdoor recreation, and unique character. Call 702-789-6561.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://heritagestonebridge.com/boulder-city-homes",
  },
  openGraph: {
    title: "Boulder City Homes for Sale | Dr. Jan Duffy - Historic Community Near Lake Mead",
    description: "Discover Boulder City homes for sale in historic community near Lake Mead with small-town charm and outdoor recreation.",
    type: "website",
    url: "https://heritagestonebridge.com/boulder-city-homes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boulder City Homes for Sale | Dr. Jan Duffy - Historic Community Near Lake Mead",
    description: "Discover Boulder City homes for sale in historic community near Lake Mead with small-town charm and outdoor recreation.",
  },
  other: {
    "content-type": "service-area",
    audience: "outdoor-enthusiasts, historic-home-buyers",
    location: "Boulder City, Nevada, USA",
  },
};

export default function BoulderCityHomesPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Boulder City Homes for Sale
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover historic Boulder City, a charming community near Lake Mead with small-town character and outdoor recreation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Schedule Boulder City Tour
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Boulder City Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Boulder City?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Boulder City offers a unique blend of historic charm, outdoor recreation, and small-town community feel, all while being just 30 minutes from Las Vegas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Historic Charm</h3>
              <p className="text-gray-600">Historic downtown district with unique shops, restaurants, and architecture</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏞️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lake Mead Access</h3>
              <p className="text-gray-600">Direct access to Lake Mead National Recreation Area for water sports</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small Town Feel</h3>
              <p className="text-gray-600">Close-knit community with friendly neighbors and local events</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Access</h3>
              <p className="text-gray-600">Just 30 minutes from Las Vegas Strip and McCarran Airport</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boulder City Lifestyle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Boulder City Lifestyle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Boulder City offers a unique small-town atmosphere with historic charm, outdoor recreation, and convenient access to Las Vegas amenities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Boulder City?</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Historic Charm:</strong> Founded in 1931 for Hoover Dam workers, rich history and unique character
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Lake Mead Access:</strong> Direct access to Lake Mead National Recreation Area for water sports
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Small Town Feel:</strong> Close-knit community with friendly neighbors and local events
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>No Gaming:</strong> Unique in Nevada - no casinos, creating a family-friendly environment
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Easy Access:</strong> Just 30 minutes from Las Vegas Strip and McCarran Airport
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Boulder City Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Population:</span>
                  <span>15,000+ residents</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Founded:</span>
                  <span>1931</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Size:</span>
                  <span>208 square miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Elevation:</span>
                  <span>2,500 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Distance to Vegas:</span>
                  <span>30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Special Feature:</span>
                  <span>No gaming allowed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boulder City Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Boulder City Neighborhoods</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore Boulder City's diverse neighborhoods, from historic downtown to newer developments with mountain views.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Historic Downtown</h3>
              <p className="text-gray-600 mb-4">Charming historic district with unique shops, restaurants, and original Hoover Dam worker homes.</p>
              <a href="/boulder-city-downtown" className="text-teal-600 hover:text-teal-800 font-semibold">View Downtown Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eldorado Valley</h3>
              <p className="text-gray-600 mb-4">Newer development with modern homes and mountain views.</p>
              <a href="/eldorado-valley-homes" className="text-teal-600 hover:text-teal-800 font-semibold">View Eldorado Valley Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lake Mead Estates</h3>
              <p className="text-gray-600 mb-4">Luxury homes with lake views and private boat access.</p>
              <a href="/lake-mead-estates" className="text-teal-600 hover:text-teal-800 font-semibold">View Lake Mead Estates →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sunrise Hills</h3>
              <p className="text-gray-600 mb-4">Established neighborhood with mature trees and mountain views.</p>
              <a href="/sunrise-hills-homes" className="text-teal-600 hover:text-teal-800 font-semibold">View Sunrise Hills Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Boulder Creek Golf Course</h3>
              <p className="text-gray-600 mb-4">Golf course community with luxury homes and resort amenities.</p>
              <a href="/boulder-creek-golf" className="text-teal-600 hover:text-teal-800 font-semibold">View Golf Course Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Desert Hills</h3>
              <p className="text-gray-600 mb-4">Custom homes with desert landscaping and mountain views.</p>
              <a href="/desert-hills-homes" className="text-teal-600 hover:text-teal-800 font-semibold">View Desert Hills Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Outdoor Recreation in Boulder City</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Boulder City is a paradise for outdoor enthusiasts, with easy access to Lake Mead, hiking trails, and recreational activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lake Mead Recreation</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Boating and water sports
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Fishing for bass, catfish, and stripers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Swimming and beach access
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Kayaking and paddleboarding
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                  Scenic lake cruises
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hiking & Outdoor Activities</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  River Mountains Loop Trail
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Historic Railroad Trail
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Gold Strike Hot Springs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Mountain biking trails
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Rock climbing opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Boulder City Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Boulder City Listings</h2>
            <p className="text-lg text-gray-600">Explore available homes in Boulder City's charming communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF"
            priceMin={200000}
            priceMax={1500000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy for Boulder City */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Boulder City Real Estate?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With deep knowledge of Boulder City's unique character, historic properties, and outdoor recreation opportunities, Dr. Jan Duffy provides expert guidance for your home purchase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Historic Property Specialist</h3>
              <p className="text-gray-600">Expert knowledge of Boulder City's historic homes and unique character properties.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏞️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outdoor Recreation Expert</h3>
              <p className="text-gray-600">Understanding of Lake Mead access, hiking trails, and recreational amenities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Knowledge</h3>
              <p className="text-gray-600">Deep understanding of Boulder City's small-town charm and local amenities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Boulder City Dream Home?</h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home in Boulder City's historic and charming community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-teal-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition-colors shadow-lg inline-block text-center">
              Schedule Boulder City Tour
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
        title="Boulder City Listings"
        subtitle="Call 702-789-6561"
        priceMin="200000"
        priceMax="1500000"
      />
    </>
  );
}
