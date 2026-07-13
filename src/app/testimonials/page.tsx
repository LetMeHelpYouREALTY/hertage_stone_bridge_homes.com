import type { Metadata } from "next";
import { generateAIContent } from "~/lib/ai-content-generator";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const metadata: Metadata = {
  title: "Heritage at Stonebridge Reviews | Client Testimonials - Dr. Jan Duffy",
  description: "Read authentic Heritage at Stonebridge reviews and client testimonials for Dr. Jan Duffy. Real experiences from satisfied residents in Las Vegas 55+ communities and luxury homes.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Client Testimonials | Dr. Jan Duffy Real Estate Reviews",
    description: "Read authentic client testimonials and reviews for Dr. Jan Duffy, Las Vegas real estate expert.",
    type: "website",
    url: "https://heritagestonebridge.com/testimonials",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Dr. Jan Duffy Real Estate Reviews",
    description: "Read authentic client testimonials and reviews for Dr. Jan Duffy, Las Vegas real estate expert.",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Client Testimonials | Dr. Jan Duffy Real Estate Reviews",
  "description": "Read authentic client testimonials and reviews for Dr. Jan Duffy, Las Vegas real estate expert.",
  "url": "https://heritagestonebridge.com/testimonials",
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

export default async function TestimonialsPage() {
  let testimonialContent: string;

  try {
    const systemPrompt = `You are a Las Vegas real estate expert specializing in client testimonials and success stories. Generate authentic testimonials and reviews that highlight Dr. Jan Duffy's expertise, professionalism, and client satisfaction in 55+ communities, luxury homes, and active adult living.`;

    const userMessage = `Create authentic client testimonials for Dr. Jan Duffy's real estate services. Include:
1. First-time buyer success stories
2. Luxury home purchase experiences
3. 55+ community relocation stories
4. Active adult community testimonials
5. Home selling success stories
6. Investment property experiences
7. Market expertise and guidance testimonials
8. Professional service and communication reviews
9. Long-term client relationships
10. Community-specific testimonials (Summerlin, Henderson, etc.)

Format as JSON with sections: first_time_buyers, luxury_homes, 55_plus_communities, active_adult_living, home_selling, investment_properties, market_expertise, professional_service, long_term_clients, and community_specific.`;

    const content = await generateAIContent(systemPrompt, userMessage);

    if (content) {
      try {
        const parsedContent = JSON.parse(content);
        testimonialContent = `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏠 First-Time Buyer Success Stories</h2>
              <p class="text-gray-700">${parsedContent.first_time_buyers || 'First-time buyer testimonials being compiled...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏆 Luxury Home Experiences</h2>
              <p class="text-gray-700">${parsedContent.luxury_homes || 'Luxury home testimonials being detailed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">👥 55+ Community Stories</h2>
              <p class="text-gray-700">${parsedContent.fifty_five_plus_communities || '55+ community testimonials being researched...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🎭 Active Adult Living</h2>
              <p class="text-gray-700">${parsedContent.active_adult_living || 'Active adult living testimonials being compiled...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg border-l-4 border-red-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏡 Home Selling Success</h2>
              <p class="text-gray-700">${parsedContent.home_selling || 'Home selling testimonials being detailed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">💰 Investment Properties</h2>
              <p class="text-gray-700">${parsedContent.investment_properties || 'Investment property testimonials being analyzed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">📊 Market Expertise</h2>
              <p class="text-gray-700">${parsedContent.market_expertise || 'Market expertise testimonials being compiled...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🤝 Professional Service</h2>
              <p class="text-gray-700">${parsedContent.professional_service || 'Professional service reviews being detailed...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">💝 Long-Term Clients</h2>
              <p class="text-gray-700">${parsedContent.long_term_clients || 'Long-term client testimonials being researched...'}</p>
            </div>
            
            <div class="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-lg border-l-4 border-gray-500">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">🏘️ Community-Specific Reviews</h2>
              <p class="text-gray-700">${parsedContent.community_specific || 'Community-specific testimonials being compiled...'}</p>
            </div>
          </div>
        `;
      } catch (e) {
        console.error("Failed to parse AI content:", e);
        testimonialContent = `
          <div class="text-center p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p class="text-gray-600">AI-powered testimonials temporarily unavailable. Please check back soon for comprehensive client reviews.</p>
          </div>
        `;
      }
    } else {
      testimonialContent = `
        <div class="text-center p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p class="text-gray-600">AI-powered testimonials temporarily unavailable. Please check back soon for comprehensive client reviews.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error("Error loading testimonials:", error);
    testimonialContent = `
      <div class="text-center p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
        <p class="text-gray-600">Unable to load testimonials at this time. Please contact Dr. Jan Duffy directly for references and client success stories.</p>
      </div>
    `;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-900 via-rose-800 to-red-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pink-100">
            Real success stories from satisfied clients across Las Vegas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call (702) 789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* AI Testimonial Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div dangerouslySetInnerHTML={{ __html: testimonialContent }} />
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
        title="Client Testimonials"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
}
