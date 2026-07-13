import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Blog & Market Insights | Dr. Jan Duffy",
  description: "Expert Las Vegas real estate insights, market analysis, and community guides by Dr. Jan Duffy. Stay informed about 55+ communities, luxury homes, and active adult living trends.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://heritagestonebridge.com/blog",
  },
  openGraph: {
    title: "Las Vegas Real Estate Blog & Market Insights | Dr. Jan Duffy",
    description: "Expert Las Vegas real estate insights, market analysis, and community guides by Dr. Jan Duffy.",
    type: "website",
    url: "https://heritagestonebridge.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Real Estate Blog & Market Insights | Dr. Jan Duffy",
    description: "Expert Las Vegas real estate insights, market analysis, and community guides by Dr. Jan Duffy.",
  },
  other: {
    "content-type": "blog",
    audience: "real-estate-buyers, 55-plus-communities, luxury-home-buyers",
    location: "Las Vegas, Nevada, USA",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Las Vegas Real Estate Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert insights, market analysis, and community guides to help you make informed real estate decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-100 transition-colors shadow-lg inline-block text-center">
              Schedule Consultation
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest Las Vegas real estate trends, market insights, and community spotlights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏘️</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">MARKET ANALYSIS</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <a href="/blog/las-vegas-55-plus-communities-market-trends-2025" className="hover:text-blue-600">
                    Las Vegas 55+ Communities Market Trends 2025
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the latest trends in active adult communities, from Heritage at Stonebridge to Sun City Summerlin, and what buyers are looking for in 2025.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/blog/las-vegas-55-plus-communities-market-trends-2025" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏔️</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-green-600 font-semibold mb-2">COMMUNITY SPOTLIGHT</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <a href="/blog/red-rock-canyon-luxury-living-guide" className="hover:text-green-600">
                    Red Rock Canyon Luxury Living Guide
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the premier communities near Red Rock Canyon, featuring mountain views, outdoor recreation, and luxury amenities for active adults.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/blog/red-rock-canyon-luxury-living-guide" className="text-green-600 hover:text-green-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl">💰</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">INVESTMENT GUIDE</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <a href="/blog/summerlin-luxury-real-estate-investment-guide" className="hover:text-purple-600">
                    Summerlin Luxury Real Estate Investment Guide
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn why Summerlin continues to be one of Las Vegas's most desirable areas for luxury home investments and 55+ community living.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/blog/summerlin-luxury-real-estate-investment-guide" className="text-purple-600 hover:text-purple-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏊</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-red-600 font-semibold mb-2">LIFESTYLE</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <a href="/blog/active-adult-community-amenities-guide" className="hover:text-red-600">
                    Active Adult Community Amenities Guide
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the resort-style amenities that make 55+ communities like Heritage at Stonebridge so appealing to active adults.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/blog/active-adult-community-amenities-guide" className="text-red-600 hover:text-red-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏡</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-yellow-600 font-semibold mb-2">BUYER'S GUIDE</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <a href="/blog/first-time-55-plus-home-buyer-guide" className="hover:text-yellow-600">
                    First-Time 55+ Home Buyer Guide
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">
                  Everything you need to know about buying your first home in a 55+ community, from financing to amenities to lifestyle considerations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/blog/first-time-55-plus-home-buyer-guide" className="text-yellow-600 hover:text-yellow-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-4xl">📊</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-teal-600 font-semibold mb-2">MARKET DATA</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  <a href="/blog/henderson-real-estate-market-analysis" className="hover:text-teal-600">
                    Henderson Real Estate Market Analysis
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">
                  In-depth analysis of Henderson's real estate market, including price trends, inventory levels, and best neighborhoods for families and retirees.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dr. Jan Duffy</span>
                  <a href="/blog/henderson-real-estate-market-analysis" className="text-teal-600 hover:text-teal-800 font-semibold">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AI-Powered Content Generator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Real Estate Insights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get personalized real estate insights powered by advanced AI technology
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Personalized Recommendations</h3>
                <p className="text-gray-600 mb-6">
                  Our AI analyzes your preferences and provides tailored recommendations for Las Vegas communities, properties, and lifestyle options.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">Community matching based on lifestyle preferences</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">Market analysis and investment insights</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">Amenity recommendations for active adults</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">Price range optimization</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Try Our AI Assistant</h4>
                <p className="text-gray-700 mb-4">
                  Ask our AI assistant about Las Vegas real estate, 55+ communities, or specific neighborhoods.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    Ask About 55+ Communities
                  </button>
                  <button className="w-full bg-white text-purple-600 py-3 px-4 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors">
                    Get Market Analysis
                  </button>
                  <button className="w-full bg-white text-purple-600 py-3 px-4 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors">
                    Find Luxury Homes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Las Vegas Real Estate</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the latest market insights, community spotlights, and expert advice delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-white text-purple-800 px-6 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-purple-200 mt-2">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Las Vegas Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="3000000"
      />
    </>
  );
}
