import type { Metadata } from "next";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const metadata: Metadata = {
  title: "Community Guides Las Vegas | Neighborhood Information - Dr. Jan Duffy",
  description: "Explore comprehensive community guides for Las Vegas neighborhoods including Summerlin, Henderson, Red Rock Canyon, and Northwest Las Vegas. Expert insights on amenities, lifestyle, and local attractions.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Community Guides Las Vegas | Neighborhood Information",
    description: "Explore comprehensive community guides for Las Vegas neighborhoods with amenities and lifestyle insights.",
    type: "website",
    url: "https://heritagestonebridge.com/community-guides",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Guides Las Vegas | Neighborhood Information",
    description: "Explore comprehensive community guides for Las Vegas neighborhoods with amenities and lifestyle insights.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Community Guides Las Vegas | Neighborhood Information",
  "description": "Explore comprehensive community guides for Las Vegas neighborhoods with amenities and lifestyle insights.",
  "url": "https://heritagestonebridge.com/community-guides",
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

export default async function CommunityGuidesPage() {
  let communityContent: string;

  try {
    const systemPrompt = `You are a Las Vegas community expert specializing in neighborhood guides, local amenities, and community information. Generate comprehensive community guides with detailed information about neighborhoods, amenities, and lifestyle features.`;

    const userMessage = `Create detailed community guides for Las Vegas neighborhoods. Include:
1. Summerlin community guide with amenities and lifestyle
2. Henderson community guide with local attractions
3. Red Rock Canyon area communities and natural features
4. Northwest Las Vegas neighborhoods and development
5. Boulder City community guide and small-town charm
6. Community amenities and recreational facilities
7. Local shopping, dining, and entertainment options
8. Transportation and accessibility information
9. Schools and educational facilities
10. Healthcare and medical services

Format as JSON with sections: summerlin_guide, henderson_guide, red_rock_guide, northwest_guide, boulder_city_guide, community_amenities, local_attractions, transportation, education, and healthcare.`;

    const content = await generateAIContent(systemPrompt, userMessage);

    if (content) {
      try {
        const parsedContent = JSON.parse(content);
        communityContent = `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🌿 Summerlin Guide</h2>
              <p class="text-gray-700">${parsedContent.summerlin_guide || 'Summerlin community guide in progress...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏙️ Henderson Guide</h2>
              <p class="text-gray-700">${parsedContent.henderson_guide || 'Henderson community guide being compiled...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏔️ Red Rock Canyon Guide</h2>
              <p class="text-gray-700">${parsedContent.red_rock_guide || 'Red Rock Canyon guide being detailed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏘️ Northwest Las Vegas Guide</h2>
              <p class="text-gray-700">${parsedContent.northwest_guide || 'Northwest Las Vegas guide being analyzed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏛️ Boulder City Guide</h2>
              <p class="text-gray-700">${parsedContent.boulder_city_guide || 'Boulder City guide being researched...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏊 Community Amenities</h2>
              <p class="text-gray-700">${parsedContent.community_amenities || 'Community amenities being catalogued...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🎭 Local Attractions</h2>
              <p class="text-gray-700">${parsedContent.local_attractions || 'Local attractions being mapped...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🚗 Transportation</h2>
              <p class="text-gray-700">${parsedContent.transportation || 'Transportation information being compiled...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🎓 Education</h2>
              <p class="text-gray-700">${parsedContent.education || 'Educational facilities being detailed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏥 Healthcare</h2>
              <p class="text-gray-700">${parsedContent.healthcare || 'Healthcare services being researched...'}</p>
            </div>
          </div>
        `;
      } catch (e) {
        console.error("Failed to parse AI content:", e);
        communityContent = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Community Guides</h2>
            <p class="text-gray-600">AI-powered community guides temporarily unavailable. Please check back soon for comprehensive neighborhood information.</p>
          </div>
        `;
      }
    } else {
      communityContent = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Community Guides</h2>
          <p class="text-gray-600">AI-powered community guides temporarily unavailable. Please check back soon for comprehensive neighborhood information.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error("Error loading community guides:", error);
    communityContent = `
      <div class="text-center p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Community Guides</h2>
        <p class="text-gray-600">Unable to load community guides at this time. Please contact Dr. Jan Duffy directly for personalized neighborhood information.</p>
      </div>
    `;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Community Guides
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Discover Las Vegas neighborhoods with comprehensive community insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 702-789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Community Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div dangerouslySetInnerHTML={{ __html: communityContent }} />
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
        title="Community Guides"
        subtitle="Call 702-789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
}
