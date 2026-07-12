import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Red Rock Canyon Communities | Dr. Jan Duffy - Mountain View Homes",
  description:
    "Discover luxury homes near Red Rock Canyon with Dr. Jan Duffy. Stunning mountain views, outdoor recreation, and premier communities in Las Vegas's most scenic area. Call 702-789-6561.",
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
    canonical: "https://heritagestonebridge.com/red-rock-canyon-communities",
  },
  openGraph: {
    title: "Red Rock Canyon Communities | Dr. Jan Duffy - Mountain View Homes",
    description:
      "Discover luxury homes near Red Rock Canyon with stunning mountain views and outdoor recreation opportunities.",
    type: "website",
    url: "https://heritagestonebridge.com/red-rock-canyon-communities",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Rock Canyon Communities | Dr. Jan Duffy - Mountain View Homes",
    description:
      "Discover luxury homes near Red Rock Canyon with stunning mountain views and outdoor recreation opportunities.",
  },
  other: {
    "content-type": "service-area",
    audience: "luxury-home-buyers, outdoor-enthusiasts",
    location: "Red Rock Canyon, Las Vegas, Nevada, USA",
  },
};

export default function RedRockCanyonCommunitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Red Rock Canyon Communities
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover luxury living with stunning mountain views near Red Rock Canyon National Conservation Area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-100 transition-colors shadow-lg inline-block text-center">
              Schedule Mountain Tour
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Red Rock Canyon Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Living Near Red Rock Canyon</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the natural beauty of Red Rock Canyon while enjoying luxury amenities and stunning mountain views. These premier communities offer the perfect blend of outdoor recreation and sophisticated living.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mountain Views</h3>
              <p className="text-gray-600">Breathtaking views of Red Rock Canyon and Spring Mountains from your home</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outdoor Recreation</h3>
              <p className="text-gray-600">Hiking, rock climbing, and nature trails right in your backyard</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⛳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Golf Courses</h3>
              <p className="text-gray-600">Championship golf courses with stunning mountain backdrops</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Amenities</h3>
              <p className="text-gray-600">Resort-style pools, spas, and fitness centers with mountain views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Red Rock Canyon Lifestyle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Red Rock Canyon Lifestyle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Living near Red Rock Canyon offers the ultimate combination of natural beauty, outdoor adventure, and luxury amenities in Las Vegas's most scenic area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Red Rock Canyon Area?</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Natural Beauty:</strong> Stunning red rock formations and mountain views create a unique desert landscape
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Outdoor Recreation:</strong> Hiking, rock climbing, mountain biking, and scenic drives right outside your door
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Luxury Communities:</strong> Premier neighborhoods with custom homes and resort-style amenities
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Privacy & Exclusivity:</strong> Gated communities with large lots and stunning views
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✓</span>
                  <div>
                    <strong>Convenient Access:</strong> Minutes to Summerlin amenities while maintaining natural serenity
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Red Rock Canyon Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Size:</span>
                  <span>195,819 acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Established:</span>
                  <span>1990</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Trails:</span>
                  <span>30+ hiking trails</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Elevation:</span>
                  <span>3,000-8,000 ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Distance from Vegas:</span>
                  <span>12-20 miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Annual Visitors:</span>
                  <span>3+ million</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Rock Canyon Communities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premier Red Rock Canyon Communities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover luxury communities that offer the perfect combination of natural beauty, outdoor recreation, and sophisticated amenities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage at Stonebridge</h3>
              <p className="text-gray-600 mb-4">Luxury 55+ community with stunning Red Rock Canyon views and resort-style amenities.</p>
              <a href="/homes-for-sale-stonebridge-summerlin" className="text-red-600 hover:text-red-800 font-semibold">View Stonebridge Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Ridges</h3>
              <p className="text-gray-600 mb-4">Ultra-luxury community with custom estates and exclusive golf course access.</p>
              <a href="/the-ridges-summerlin" className="text-red-600 hover:text-red-800 font-semibold">View Ridges Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Country Club</h3>
              <p className="text-gray-600 mb-4">Golf course community with luxury homes and exclusive country club membership.</p>
              <a href="/red-rock-country-club" className="text-red-600 hover:text-red-800 font-semibold">View Country Club Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mountain's Edge</h3>
              <p className="text-gray-600 mb-4">Master-planned community with mountain views and family-friendly amenities.</p>
              <a href="/mountains-edge-homes" className="text-red-600 hover:text-red-800 font-semibold">View Mountain's Edge Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inspirada</h3>
              <p className="text-gray-600 mb-4">Modern community with contemporary homes and outdoor recreation facilities.</p>
              <a href="/inspirada-homes" className="text-red-600 hover:text-red-800 font-semibold">View Inspirada Homes →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rhodes Ranch</h3>
              <p className="text-gray-600 mb-4">Golf course community with luxury homes and resort-style amenities.</p>
              <a href="/rhodes-ranch-homes" className="text-red-600 hover:text-red-800 font-semibold">View Rhodes Ranch Homes →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Outdoor Recreation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Outdoor Recreation Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Living near Red Rock Canyon means having access to world-class outdoor recreation right in your backyard.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Red Rock Canyon National Conservation Area</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Over 30 miles of hiking trails
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  World-class rock climbing routes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Scenic 13-mile scenic drive
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Wildlife viewing opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Photography and nature study
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Amenities</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Championship golf courses
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Resort-style pools and spas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Fitness centers and tennis courts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Walking and biking trails
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Community parks and open spaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Red Rock Canyon Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Red Rock Canyon Listings</h2>
            <p className="text-lg text-gray-600">Explore available homes with stunning mountain views</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR,MF"
            priceMin={500000}
            priceMax={5000000}
          />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy for Red Rock Canyon */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Dr. Jan Duffy for Red Rock Canyon Real Estate?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With deep knowledge of Red Rock Canyon communities and their unique mountain lifestyle, Dr. Jan Duffy provides expert guidance for your luxury home purchase.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mountain View Specialist</h3>
              <p className="text-gray-600">Expert knowledge of communities with the best Red Rock Canyon views and access.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outdoor Lifestyle Expert</h3>
              <p className="text-gray-600">Understanding of outdoor recreation needs and mountain community amenities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Home Specialist</h3>
              <p className="text-gray-600">Experience with high-end properties and exclusive community requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Mountain View Home?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy help you discover the perfect home with stunning Red Rock Canyon views.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-red-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-100 transition-colors shadow-lg inline-block text-center">
              Schedule Mountain Tour
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Red Rock Canyon Listings"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="5000000"
      />
    </>
  );
}
