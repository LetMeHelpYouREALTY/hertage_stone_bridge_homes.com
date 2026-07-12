import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Market Analysis 2025 | Dr. Jan Duffy",
  description:
    "Comprehensive Las Vegas real estate market analysis for 2025. Expert insights on 55+ communities, luxury homes, and investment opportunities by Dr. Jan Duffy.",
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
    canonical: "https://heritagestonebridge.com/market-analysis",
  },
  openGraph: {
    title: "Las Vegas Real Estate Market Analysis 2025 | Dr. Jan Duffy",
    description:
      "Comprehensive Las Vegas real estate market analysis for 2025 with expert insights on 55+ communities and luxury homes.",
    type: "website",
    url: "https://heritagestonebridge.com/market-analysis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Real Estate Market Analysis 2025 | Dr. Jan Duffy",
    description:
      "Comprehensive Las Vegas real estate market analysis for 2025 with expert insights on 55+ communities and luxury homes.",
  },
  other: {
    "content-type": "market-analysis",
    audience: "real-estate-investors, luxury-home-buyers, 55-plus-communities",
    location: "Las Vegas, Nevada, USA",
  },
};

export default function MarketAnalysisPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Las Vegas Real Estate Market Analysis 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive market insights, trends, and investment opportunities across Las Vegas Valley's premier communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Get Personal Market Report
            </a>
            <a href="tel:702-789-6561" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg inline-block text-center">
              Call (702) 789-6561
            </a>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2025 Market Overview</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las Vegas real estate continues to show strong fundamentals with particular strength in 55+ communities and luxury segments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">+8.5%</div>
              <div className="text-sm text-gray-600 mb-2">Average Price Growth</div>
              <div className="text-xs text-gray-500">55+ Communities</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">22 Days</div>
              <div className="text-sm text-gray-600 mb-2">Average Days on Market</div>
              <div className="text-xs text-gray-500">Luxury Homes</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">$650K</div>
              <div className="text-sm text-gray-600 mb-2">Median Home Price</div>
              <div className="text-xs text-gray-500">Summerlin Area</div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">94%</div>
              <div className="text-sm text-gray-600 mb-2">List-to-Sale Ratio</div>
              <div className="text-xs text-gray-500">Active Adult Communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Market Analysis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed analysis of Las Vegas's most sought-after communities and their market performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">🏘️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Summerlin</h3>
                  <div className="text-sm text-gray-500">Master-Planned Community</div>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Price:</span>
                  <span className="font-semibold">$650,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Growth:</span>
                  <span className="font-semibold text-green-600">+12.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inventory:</span>
                  <span className="font-semibold">Low (2.1 months)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Status:</span>
                  <span className="font-semibold text-green-600">Seller's Market</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Key Insight:</strong> Summerlin continues to lead in luxury home appreciation, with Heritage at Stonebridge showing exceptional demand for 55+ living.
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 text-xl">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Henderson</h3>
                  <div className="text-sm text-gray-500">Family-Friendly City</div>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Price:</span>
                  <span className="font-semibold">$485,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Growth:</span>
                  <span className="font-semibold text-green-600">+9.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inventory:</span>
                  <span className="font-semibold">Moderate (3.2 months)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Status:</span>
                  <span className="font-semibold text-blue-600">Balanced</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Key Insight:</strong> Henderson's excellent schools and family amenities continue to attract buyers, with Sun City Anthem leading 55+ community growth.
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 text-xl">🏔️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Red Rock Canyon</h3>
                  <div className="text-sm text-gray-500">Mountain View Luxury</div>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Median Price:</span>
                  <span className="font-semibold">$850,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Growth:</span>
                  <span className="font-semibold text-green-600">+15.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inventory:</span>
                  <span className="font-semibold">Very Low (1.8 months)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Status:</span>
                  <span className="font-semibold text-green-600">Strong Seller's Market</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Key Insight:</strong> Mountain view properties continue to command premium prices, with luxury buyers prioritizing outdoor recreation access.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 55+ Communities Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">55+ Communities Market Analysis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized analysis of active adult communities and their unique market dynamics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Drivers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Baby Boomer retirement wave continues
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Low maintenance lifestyle demand
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Resort-style amenities expectations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Healthcare access considerations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Social activity requirements
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Performing Communities</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Heritage at Stonebridge</span>
                  <span className="text-green-600 font-bold">+18.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Sun City Summerlin</span>
                  <span className="text-green-600 font-bold">+14.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Sun City Anthem</span>
                  <span className="text-green-600 font-bold">+12.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Siena</span>
                  <span className="text-green-600 font-bold">+11.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">The Ridges</span>
                  <span className="text-green-600 font-bold">+16.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic investment insights for Las Vegas real estate in 2025
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Markets</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Northwest Las Vegas new construction</li>
                <li>• Henderson family communities</li>
                <li>• Red Rock Canyon luxury properties</li>
                <li>• 55+ community developments</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Value Opportunities</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Boulder City historic properties</li>
                <li>• Established Summerlin neighborhoods</li>
                <li>• Golf course communities</li>
                <li>• Mountain view properties</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rental Potential</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Short-term rental markets</li>
                <li>• Corporate housing demand</li>
                <li>• Retirement community rentals</li>
                <li>• Luxury vacation rentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Market Predictions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Market Predictions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced AI analysis of market trends and future opportunities
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2025 Predictions</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">55+ Community Demand</div>
                    <div className="text-sm text-gray-600">Expected to increase 15-20% as more Baby Boomers reach retirement age</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">Luxury Market Growth</div>
                    <div className="text-sm text-gray-600">Summerlin and Red Rock Canyon areas projected to see 10-12% appreciation</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">New Construction</div>
                    <div className="text-sm text-gray-600">Northwest Las Vegas expected to lead in new development activity</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Personal Analysis</h3>
                <p className="text-gray-700 mb-6">
                  Our AI analyzes your specific criteria and provides personalized market insights and recommendations.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    Get AI Market Analysis
                  </button>
                  <button className="w-full bg-white text-purple-600 py-3 px-4 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors">
                    Investment Opportunity Report
                  </button>
                  <button className="w-full bg-white text-purple-600 py-3 px-4 rounded-lg border border-purple-600 hover:bg-purple-50 transition-colors">
                    Community Comparison Tool
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Informed Real Estate Decisions?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let Dr. Jan Duffy provide you with personalized market analysis and expert guidance for your Las Vegas real estate investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center">
              Get Personal Market Report
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
        title="Market Analysis Listings"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="3000000"
      />
    </>
  );
}
