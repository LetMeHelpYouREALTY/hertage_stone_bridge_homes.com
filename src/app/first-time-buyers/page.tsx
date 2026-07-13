import type { Metadata } from "next";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const metadata: Metadata = {
  title: "First Time Buyers Guide Las Vegas | Home Buying Tips - Dr. Jan Duffy",
  description: "Complete first-time home buyer guide for Las Vegas real estate. Expert advice on financing, down payments, inspections, and finding your perfect home with Dr. Jan Duffy.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "First Time Buyers Guide Las Vegas | Home Buying Tips",
    description: "Complete first-time home buyer guide for Las Vegas real estate with expert advice on financing and home buying process.",
    type: "website",
    url: "https://heritagestonebridge.com/first-time-buyers",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Time Buyers Guide Las Vegas | Home Buying Tips",
    description: "Complete first-time home buyer guide for Las Vegas real estate with expert advice on financing and home buying process.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "First Time Buyers Guide Las Vegas | Home Buying Tips",
  "description": "Complete first-time home buyer guide for Las Vegas real estate with expert advice on financing and home buying process.",
  "url": "https://heritagestonebridge.com/first-time-buyers",
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

export default async function FirstTimeBuyersPage() {
  let buyerContent: string;

  try {
    const systemPrompt = `You are a Las Vegas real estate expert specializing in first-time home buyers, financing options, and the home buying process. Generate comprehensive guides for first-time buyers with practical advice and step-by-step guidance.`;

    const userMessage = `Create detailed first-time home buyer guide for Las Vegas real estate. Include:
1. Getting pre-approved and financing options
2. Down payment assistance programs and grants
3. First-time buyer benefits and tax credits
4. Home buying process step-by-step
5. Choosing the right neighborhood and property type
6. Home inspections and due diligence
7. Closing costs and additional expenses
8. Working with real estate agents and lenders
9. Common first-time buyer mistakes to avoid
10. Long-term homeownership planning

Format as JSON with sections: pre_approval_process, down_payment_assistance, buyer_benefits, buying_process, neighborhood_selection, home_inspections, closing_costs, working_with_professionals, common_mistakes, and long_term_planning.`;

    const content = await generateAIContent(systemPrompt, userMessage);

    if (content) {
      try {
        const parsedContent = JSON.parse(content);
        buyerContent = `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">✅ Pre-Approval Process</h2>
              <p class="text-gray-700">${parsedContent.pre_approval_process || 'Pre-approval process guide in progress...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">💰 Down Payment Assistance</h2>
              <p class="text-gray-700">${parsedContent.down_payment_assistance || 'Down payment assistance being researched...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🎁 First-Time Buyer Benefits</h2>
              <p class="text-gray-700">${parsedContent.buyer_benefits || 'Buyer benefits being detailed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">📋 Home Buying Process</h2>
              <p class="text-gray-700">${parsedContent.buying_process || 'Home buying process being outlined...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏘️ Neighborhood Selection</h2>
              <p class="text-gray-700">${parsedContent.neighborhood_selection || 'Neighborhood selection being analyzed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🔍 Home Inspections</h2>
              <p class="text-gray-700">${parsedContent.home_inspections || 'Home inspections being detailed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">💸 Closing Costs</h2>
              <p class="text-gray-700">${parsedContent.closing_costs || 'Closing costs being calculated...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🤝 Working with Professionals</h2>
              <p class="text-gray-700">${parsedContent.working_with_professionals || 'Professional guidance being compiled...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">⚠️ Common Mistakes</h2>
              <p class="text-gray-700">${parsedContent.common_mistakes || 'Common mistakes being identified...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">📈 Long-Term Planning</h2>
              <p class="text-gray-700">${parsedContent.long_term_planning || 'Long-term planning being outlined...'}</p>
            </div>
          </div>
        `;
      } catch (e) {
        console.error("Failed to parse AI content:", e);
        buyerContent = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">First-Time Buyers Guide</h2>
            <p class="text-gray-600">AI-powered first-time buyer guide temporarily unavailable. Please check back soon for comprehensive buying guidance.</p>
          </div>
        `;
      }
    } else {
      buyerContent = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">First-Time Buyers Guide</h2>
          <p class="text-gray-600">AI-powered first-time buyer guide temporarily unavailable. Please check back soon for comprehensive buying guidance.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error("Error loading buyer guide:", error);
    buyerContent = `
      <div class="text-center p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">First-Time Buyers Guide</h2>
        <p class="text-gray-600">Unable to load first-time buyer guide at this time. Please contact Dr. Jan Duffy directly for personalized buying guidance.</p>
      </div>
    `;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-red-800 to-pink-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            First-Time Buyers Guide
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Your complete guide to buying your first home in Las Vegas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 702-789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Buyer Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div dangerouslySetInnerHTML={{ __html: buyerContent }} />
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
        title="First Time Buyers"
        subtitle="Call 702-789-6561"
        priceMin="200000"
        priceMax="800000"
      />
    </>
  );
}
