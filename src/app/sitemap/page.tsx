import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap - Heritage at Stonebridge",
  description:
    "Complete sitemap for Heritage at Stonebridge website. Find all pages, property listings, and resources.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SitemapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">XML Sitemaps</h2>
        <p className="text-blue-800 mb-4">For search engines and SEO tools:</p>
        <ul className="space-y-2">
          <li>
            <a href="/sitemap.xml" className="text-blue-600 hover:text-blue-800 underline">
              Main Sitemap Index (/sitemap.xml)
            </a>
          </li>
          <li>
            <a href="/sitemap-pages.xml" className="text-blue-600 hover:text-blue-800 underline">
              Pages Sitemap (/sitemap-pages.xml)
            </a>
          </li>
          <li>
            <a href="/sitemap-images.xml" className="text-blue-600 hover:text-blue-800 underline">
              Images Sitemap (/sitemap-images.xml)
            </a>
          </li>
          <li>
            <a href="/sitemap-properties.xml" className="text-blue-600 hover:text-blue-800 underline">
              Properties Sitemap (/sitemap-properties.xml)
            </a>
          </li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Pages</h2>
          <ul className="space-y-2">
            <li><a href="/" className="text-blue-600 hover:text-blue-800">Homepage</a></li>
            <li><a href="/real-estate/" className="text-blue-600 hover:text-blue-800">Real Estate</a></li>
            <li><a href="/55-plus-communities/" className="text-blue-600 hover:text-blue-800">55+ Communities</a></li>
            <li><a href="/homes-for-sale-stonebridge-summerlin/" className="text-blue-600 hover:text-blue-800">Stonebridge Homes</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h2>
          <ul className="space-y-2">
            <li><a href="/las-vegas-real-estate/" className="text-blue-600 hover:text-blue-800">Las Vegas Real Estate</a></li>
            <li><a href="/summerlin-homes/" className="text-blue-600 hover:text-blue-800">Summerlin Homes</a></li>
            <li><a href="/henderson-real-estate/" className="text-blue-600 hover:text-blue-800">Henderson Real Estate</a></li>
            <li><a href="/northwest-las-vegas/" className="text-blue-600 hover:text-blue-800">Northwest Las Vegas</a></li>
            <li><a href="/boulder-city-homes/" className="text-blue-600 hover:text-blue-800">Boulder City Homes</a></li>
            <li><a href="/red-rock-canyon-communities/" className="text-blue-600 hover:text-blue-800">Red Rock Canyon Communities</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Types</h2>
          <ul className="space-y-2">
            <li><a href="/55-plus-communities-red-rock-canyon/" className="text-blue-600 hover:text-blue-800">55+ Communities Red Rock Canyon</a></li>
            <li><a href="/active-adult-communities/" className="text-blue-600 hover:text-blue-800">Active Adult Communities</a></li>
            <li><a href="/luxury-homes/" className="text-blue-600 hover:text-blue-800">Luxury Homes</a></li>
            <li><a href="/gated-communities/" className="text-blue-600 hover:text-blue-800">Gated Communities</a></li>
            <li><a href="/golf-course-homes/" className="text-blue-600 hover:text-blue-800">Golf Course Homes</a></li>
            <li><a href="/mountain-view-homes/" className="text-blue-600 hover:text-blue-800">Mountain View Homes</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><a href="/blog/" className="text-blue-600 hover:text-blue-800">AI-Powered Blog</a></li>
            <li><a href="/market-analysis/" className="text-blue-600 hover:text-blue-800">Market Analysis</a></li>
            <li><a href="/neighborhood-insights/" className="text-blue-600 hover:text-blue-800">Neighborhood Insights</a></li>
            <li><a href="/luxury-living-guide/" className="text-blue-600 hover:text-blue-800">Luxury Living Guide</a></li>
            <li><a href="/community-comparison/" className="text-blue-600 hover:text-blue-800">Community Comparison</a></li>
            <li><a href="/market-reports/" className="text-blue-600 hover:text-blue-800">Market Reports</a></li>
            <li><a href="/community-guides/" className="text-blue-600 hover:text-blue-800">Community Guides</a></li>
            <li><a href="/home-selling-guide/" className="text-blue-600 hover:text-blue-800">Home Selling Guide</a></li>
            <li><a href="/first-time-buyers/" className="text-blue-600 hover:text-blue-800">First Time Buyers</a></li>
            <li><a href="/testimonials/" className="text-blue-600 hover:text-blue-800">Testimonials</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
