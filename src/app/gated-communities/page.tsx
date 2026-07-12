import type { Metadata } from "next";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { RealScoutOfficeListingsWidget } from "~/components/real-estate/RealScoutOfficeListingsWidget";

export const metadata: Metadata = {
  title: "Gated Communities Las Vegas | Secure Luxury Living - Dr. Jan Duffy",
  description: "Explore premier gated communities in Las Vegas offering security, privacy, and luxury amenities. Expert guidance for exclusive neighborhoods in Summerlin, Henderson, and Red Rock Canyon.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Gated Communities Las Vegas | Secure Luxury Living",
    description: "Explore premier gated communities in Las Vegas offering security, privacy, and luxury amenities.",
    type: "website",
    url: "https://heritagestonebridge.com/gated-communities",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gated Communities Las Vegas | Secure Luxury Living",
    description: "Explore premier gated communities in Las Vegas offering security, privacy, and luxury amenities.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Gated Communities Las Vegas | Secure Luxury Living",
  "description": "Explore premier gated communities in Las Vegas offering security, privacy, and luxury amenities.",
  "url": "https://heritagestonebridge.com/gated-communities",
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

export default async function GatedCommunitiesPage() {
  let gatedContent: string;

  try {
    const systemPrompt = `You are a Las Vegas real estate expert specializing in gated communities, security features, and exclusive neighborhoods. Generate comprehensive insights about gated community living, security benefits, and luxury amenities.`;

    const userMessage = `Create detailed content about gated communities in Las Vegas. Include:
1. What defines a gated community and security features
2. Types of gated communities (guard-gated, key-card, etc.)
3. Security benefits and privacy advantages
4. Luxury amenities and exclusive services
5. Community rules and HOA benefits
6. Location advantages in Summerlin, Henderson, Red Rock Canyon
7. Property values and investment potential
8. Lifestyle benefits of gated living
9. Maintenance and landscaping services
10. Social aspects and community events

Format as JSON with sections: community_definition, security_types, security_benefits, luxury_amenities, community_rules, location_advantages, property_values, lifestyle_benefits, maintenance_services, and social_aspects.`;

    const content = await generateAIContent(systemPrompt, userMessage);

    if (content) {
      try {
        const parsedContent = JSON.parse(content);
        gatedContent = `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🔒 Gated Community Definition</h2>
              <p class="text-gray-700">${parsedContent.community_definition || 'Gated community analysis in progress...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🛡️ Security Types</h2>
              <p class="text-gray-700">${parsedContent.security_types || 'Security types being catalogued...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🔐 Security Benefits</h2>
              <p class="text-gray-700">${parsedContent.security_benefits || 'Security benefits being detailed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">✨ Luxury Amenities</h2>
              <p class="text-gray-700">${parsedContent.luxury_amenities || 'Luxury amenities being mapped...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">📋 Community Rules</h2>
              <p class="text-gray-700">${parsedContent.community_rules || 'Community rules being outlined...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">📍 Location Advantages</h2>
              <p class="text-gray-700">${parsedContent.location_advantages || 'Location advantages being evaluated...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">💰 Property Values</h2>
              <p class="text-gray-700">${parsedContent.property_values || 'Property values being assessed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🌟 Lifestyle Benefits</h2>
              <p class="text-gray-700">${parsedContent.lifestyle_benefits || 'Lifestyle benefits being explored...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🌿 Maintenance Services</h2>
              <p class="text-gray-700">${parsedContent.maintenance_services || 'Maintenance services being detailed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🎭 Social Aspects</h2>
              <p class="text-gray-700">${parsedContent.social_aspects || 'Social aspects being analyzed...'}</p>
            </div>
          </div>
        `;
      } catch (e) {
        console.error("Failed to parse AI content:", e);
        gatedContent = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Gated Communities</h2>
            <p class="text-gray-600">AI-powered gated community insights temporarily unavailable. Please check back soon for comprehensive gated community analysis.</p>
          </div>
        `;
      }
    } else {
      gatedContent = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Gated Communities</h2>
          <p class="text-gray-600">AI-powered gated community insights temporarily unavailable. Please check back soon for comprehensive gated community analysis.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error("Error loading gated insights:", error);
    gatedContent = `
      <div class="text-center p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Gated Communities</h2>
        <p class="text-gray-600">Unable to load gated community insights at this time. Please contact Dr. Jan Duffy directly for personalized gated community information.</p>
      </div>
    `;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Gated Communities
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Experience secure luxury living with privacy and exclusive amenities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 702-789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Gated Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div dangerouslySetInnerHTML={{ __html: gatedContent }} />
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Gated Communities Listings Widget */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Gated Community Listings</h2>
            <p className="text-lg text-gray-600">Explore available properties in Las Vegas's most secure gated communities</p>
          </div>
          <RealScoutOfficeListingsWidget
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="STATUS_AND_SIGNIFICANT_CHANGE"
            listingStatus="For Sale"
            propertyTypes="SFR"
            priceMin={500000}
            priceMax={2000000}
          />
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Gated Communities"
        subtitle="Call 702-789-6561"
        priceMin="500000"
        priceMax="2000000"
      />
    </>
  );
}
