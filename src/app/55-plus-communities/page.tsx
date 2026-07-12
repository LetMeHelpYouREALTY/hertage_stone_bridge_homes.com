import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

const communitiesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "55+ Communities Las Vegas | Active Adult Living",
  description:
    "Discover premier 55+ communities in Las Vegas, Summerlin, and Red Rock Canyon. Luxury active adult living with resort amenities, gated security, and mountain views.",
  url: "https://heritagestonebridge.com/55-plus-communities",
  mainEntity: {
    "@type": "ItemList",
    name: "Las Vegas 55+ Communities",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "ResidentialComplex",
          name: "Heritage at Stonebridge",
          description: "Luxury 55+ community in Summerlin West",
          url: "https://heritagestonebridge.com",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "ResidentialComplex",
          name: "Del Webb Communities",
          description: "Active adult communities throughout Las Vegas",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "ResidentialComplex",
          name: "Sun City Communities",
          description: "Premier 55+ living in Henderson and Summerlin",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://heritagestonebridge.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "55+ Communities",
        item: "https://heritagestonebridge.com/55-plus-communities",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "55+ Communities Las Vegas | Active Adult Living | Dr. Jan Duffy",
  description:
    "Discover premier 55+ communities in Las Vegas, Summerlin, and Red Rock Canyon. Luxury active adult living with resort amenities, gated security, and mountain views. Dr. Jan Duffy, your 55+ specialist.",
  openGraph: {
    title: "55+ Communities Las Vegas | Active Adult Living",
    description:
      "Discover premier 55+ communities in Las Vegas, Summerlin, and Red Rock Canyon. Luxury active adult living with resort amenities and mountain views.",
    type: "website",
    url: "https://heritagestonebridge.com/55-plus-communities",
  },
  twitter: {
    card: "summary_large_image",
    title: "55+ Communities Las Vegas | Active Adult Living",
    description:
      "Discover premier 55+ communities in Las Vegas, Summerlin, and Red Rock Canyon. Luxury active adult living with resort amenities.",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Dr. Jan Duffy" }],
  alternates: { canonical: "https://heritagestonebridge.com/55-plus-communities" },
};

export default function FiftyFivePlusCommunitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(communitiesSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              55+ Communities Las Vegas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Discover luxury active adult living in Las Vegas' premier 55+ communities.
              Resort-style amenities, gated security, and stunning mountain views await.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
              >
                Schedule Community Tour
              </a>
              <a
                href="tel:+17027896561"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center"
              >
                Call (702) 789-6561
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premier 55+ Communities in Las Vegas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Las Vegas' most prestigious active adult communities, each offering unique
              amenities and lifestyle benefits for discerning 55+ homebuyers.
            </p>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-lg text-blue-800 font-semibold">
                🏗️ <strong>New Construction 55+ Communities in Summerlin, NV:</strong> 
                Heritage at Stonebridge offers three distinct home collections from Lennar: Cromwell ($464,990-$512,990), Stirling ($675,990-$736,990), and Evander ($861,990-$910,990). Currently 15 homes available for sale.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Heritage at Stonebridge */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Heritage at Stonebridge</h3>
                  <p className="text-blue-100">Summerlin West</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">Luxury 55+ Living</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Three home collections (Cromwell, Stirling, Evander)</li>
                  <li>• 8,000 sq ft clubhouse with fitness center</li>
                  <li>• Pickleball & bocce ball courts</li>
                  <li>• Resort-style pool & heated lap pool</li>
                  <li>• Gated community with RV parking</li>
                  <li>• Walking trails & outdoor gathering areas</li>
                </ul>
                <div className="text-lg font-bold text-blue-600 mb-4">Starting from $464,990</div>
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  target="_blank"
                  rel="noopener"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Del Webb Communities */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Del Webb</h3>
                  <p className="text-green-100">Multiple Locations</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">Active Adult Lifestyle</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Golf course communities</li>
                  <li>• Fitness centers</li>
                  <li>• Social clubs</li>
                  <li>• Maintenance-free living</li>
                  <li>• Resort amenities</li>
                </ul>
                <div className="text-lg font-bold text-green-600 mb-4">Various Price Points</div>
                <a
                  href="tel:+17027896561"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors inline-block text-center"
                >
                  Call for Info
                </a>
              </div>
            </div>

            {/* Sun City Communities */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Sun City</h3>
                  <p className="text-purple-100">Henderson & Summerlin</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3">Established Communities</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Mature landscaping</li>
                  <li>• Established amenities</li>
                  <li>• Active social scene</li>
                  <li>• Golf courses</li>
                  <li>• Community events</li>
                </ul>
                <div className="text-lg font-bold text-purple-600 mb-4">Resale Opportunities</div>
                <a
                  href="tel:+17022221964"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors inline-block text-center"
                >
                  Schedule Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose 55+ Living */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 55+ Community Living?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Active adult communities offer unparalleled lifestyle benefits designed specifically
              for the 55+ demographic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance-Free</h3>
              <p className="text-gray-600">
                Enjoy your retirement without the hassle of home maintenance. Exterior care,
                landscaping, and repairs are handled for you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Like-Minded Neighbors</h3>
              <p className="text-gray-600">
                Connect with neighbors who share similar interests and life experiences. Build
                lasting friendships in your community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Resort Amenities</h3>
              <p className="text-gray-600">
                Access to pools, fitness centers, golf courses, and social clubs. Live like you're
                on vacation every day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Security & Privacy</h3>
              <p className="text-gray-600">
                Gated communities provide peace of mind with controlled access and professional
                security services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Prime Las Vegas Locations
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Las Vegas offers some of the nation's most desirable locations for 55+ living, with
                year-round sunshine, stunning mountain views, and world-class amenities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">📍</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Summerlin</h4>
                    <p className="text-gray-600">
                      Master-planned community with golf courses, shopping, and Red Rock Canyon
                      access
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">🏔️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Red Rock Canyon</h4>
                    <p className="text-gray-600">
                      Breathtaking mountain views and outdoor recreation opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">🏥</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medical Facilities</h4>
                    <p className="text-gray-600">
                      Access to world-class healthcare including Cleveland Clinic and UMC
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-3">✈️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Travel Convenience</h4>
                    <p className="text-gray-600">
                      Easy access to McCarran International Airport for visiting family
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Las Vegas Advantages</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">300+</div>
                  <div className="text-sm text-gray-600">Sunny Days</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600">0%</div>
                  <div className="text-sm text-gray-600">State Income Tax</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-purple-600">$410</div>
                  <div className="text-sm text-gray-600">Avg HOA Fee</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-600">55+</div>
                  <div className="text-sm text-gray-600">Age Requirement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about 55+ community living in Las Vegas
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is the minimum age requirement for 55+ communities?
              </h3>
              <p className="text-gray-600">
                Most 55+ communities require at least one resident to be 55 or older. Spouses or
                partners can typically be 45 or older. Some communities may allow younger residents
                under specific circumstances.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What amenities are typically included in 55+ communities?
              </h3>
              <p className="text-gray-600">
                Common amenities include clubhouses, fitness centers, swimming pools, pickleball
                courts, golf courses, walking trails, and social activity rooms. Many communities
                also offer classes, clubs, and organized events.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much do HOA fees typically cost in Las Vegas 55+ communities?
              </h3>
              <p className="text-gray-600">
                HOA fees in Las Vegas 55+ communities typically range from $200-$600 per month,
                depending on the community and amenities offered. These fees usually cover exterior
                maintenance, landscaping, and access to community amenities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Are pets allowed in 55+ communities?
              </h3>
              <p className="text-gray-600">
                Most 55+ communities are pet-friendly, though they may have restrictions on the
                number, size, or breed of pets. Service animals are typically always allowed
                regardless of community policies.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is the resale value like for homes in 55+ communities?
              </h3>
              <p className="text-gray-600">
                55+ community homes in Las Vegas have shown strong resale values due to high demand
                and limited supply. The maintenance-free lifestyle and resort amenities make these
                properties attractive to active adults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect 55+ Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let Dr. Jan Duffy help you discover the ideal active adult community for your lifestyle
            and budget. Schedule a personalized tour today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Schedule Community Tour
            </a>
            <a
              href="tel:+17022221964"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center"
            >
              Call (702) 789-6561
            </a>
          </div>

          <div className="text-blue-200 text-sm">
            <p>
              <strong>Dr. Jan Duffy</strong> - Las Vegas Real Estate Expert
            </p>
            <p>Specializing in 55+ Communities & Active Adult Living</p>
          </div>
        </div>
      </section>

      {/* 55+ Communities Listings Widget */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current 55+ Community Listings</h2>
            <p className="text-lg text-gray-600">Explore available properties in Las Vegas's premier active adult communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR"
            priceMin={400000}
            priceMax={800000}
          />
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="55+ Community Homes"
        subtitle="Call 702-789-6561"
        priceMin="400000"
        priceMax="800000"
      />

      {/* Footer */}
    </>
  );
}
