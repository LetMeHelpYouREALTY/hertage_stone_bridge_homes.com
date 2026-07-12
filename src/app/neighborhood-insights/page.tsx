import type { Metadata } from "next";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const metadata: Metadata = {
  title: "Las Vegas Neighborhood Insights | AI-Powered Market Analysis - Dr. Jan Duffy",
  description: "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis. Expert real estate intelligence for Summerlin, Henderson, and Northwest Las Vegas.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Las Vegas Neighborhood Insights | AI-Powered Market Analysis",
    description: "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis.",
    type: "website",
    url: "https://heritagestonebridge.com/neighborhood-insights",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Neighborhood Insights | AI-Powered Market Analysis",
    description: "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Las Vegas Neighborhood Insights | AI-Powered Market Analysis",
  "description": "Get AI-powered insights into Las Vegas neighborhoods, market trends, and community analysis.",
  "url": "https://heritagestonebridge.com/neighborhood-insights",
  "mainEntity": {
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "telephone": "702-789-6561",
    "email": "DrDuffySells@HeritageStonebridge.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "serviceArea": [
      "Summerlin",
      "Henderson", 
      "Northwest Las Vegas",
      "Red Rock Canyon",
      "Boulder City"
    ]
  }
};

export default async function NeighborhoodInsightsPage() {
  let insightsContent: string;

  try {
    const systemPrompt = `You are a Las Vegas real estate expert AI assistant. Generate comprehensive neighborhood insights and market analysis for Las Vegas areas including Summerlin, Henderson, Northwest Las Vegas, and Red Rock Canyon communities. Focus on 55+ communities, luxury homes, and active adult living.`;

    const userMessage = `Generate detailed neighborhood insights for Las Vegas real estate markets. Include:
1. Current market trends for Summerlin, Henderson, Northwest Las Vegas
2. 55+ community analysis and amenities
3. Price trends and investment opportunities
4. Lifestyle factors and community features
5. Future development plans and growth projections

Format as JSON with sections: market_overview, neighborhood_analysis, price_trends, lifestyle_factors, investment_outlook, and recommendations.`;

    const content = await generateAIContent(systemPrompt, userMessage);

    if (content) {
      try {
        const parsedContent = JSON.parse(content);
        insightsContent = `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Market Overview</h2>
              <p class="text-gray-700">${parsedContent.market_overview || 'Market analysis in progress...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Neighborhood Analysis</h2>
              <p class="text-gray-700">${parsedContent.neighborhood_analysis || 'Neighborhood insights being generated...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Price Trends</h2>
              <p class="text-gray-700">${parsedContent.price_trends || 'Price analysis in development...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Lifestyle Factors</h2>
              <p class="text-gray-700">${parsedContent.lifestyle_factors || 'Lifestyle analysis being prepared...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Investment Outlook</h2>
              <p class="text-gray-700">${parsedContent.investment_outlook || 'Investment analysis in progress...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Expert Recommendations</h2>
              <p class="text-gray-700">${parsedContent.recommendations || 'Recommendations being formulated...'}</p>
            </div>
          </div>
        `;
      } catch (e) {
        console.error("Failed to parse AI content:", e);
        insightsContent = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Neighborhood Insights</h2>
            <p class="text-gray-600">AI-powered analysis temporarily unavailable. Please check back soon for comprehensive Las Vegas neighborhood insights.</p>
          </div>
        `;
      }
    } else {
      insightsContent = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Neighborhood Insights</h2>
          <p class="text-gray-600">AI-powered analysis temporarily unavailable. Please check back soon for comprehensive Las Vegas neighborhood insights.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error("Error loading insights:", error);
    insightsContent = `
      <div class="text-center p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Neighborhood Insights</h2>
        <p class="text-gray-600">Unable to load AI insights at this time. Please contact Dr. Jan Duffy directly for personalized neighborhood analysis.</p>
      </div>
    `;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Neighborhood Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover Las Vegas communities through advanced market intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 702-789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Insights Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div dangerouslySetInnerHTML={{ __html: insightsContent }} />
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Neighborhood Insights"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
}
