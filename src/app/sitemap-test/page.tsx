import type { Metadata } from "next";
import { SitemapStatusChecker } from "./SitemapStatusChecker";

export const metadata: Metadata = {
  title: "Sitemap Validation & Testing - Heritage at Stonebridge",
  description:
    "Test and validate sitemap files for Heritage at Stonebridge website. Check sitemap accessibility and SEO implementation status.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SitemapTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sitemap Validation & Testing</h1>

          <div className="space-y-6">
            {/* Sitemap Links */}
            <SitemapStatusChecker />

            {/* SEO Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">SEO Implementation Status</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">✅ Completed</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Enhanced robots.txt with AI crawler support</li>
                    <li>• Multi-sitemap structure (index, pages, images)</li>
                    <li>• AI-friendly meta tags on homepage</li>
                    <li>• Enhanced JSON-LD structured data</li>
                    <li>• AI crawler detection system</li>
                    <li>• Breadcrumb navigation component</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📋 Next Steps</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Submit sitemap to Google Search Console</li>
                    <li>• Submit sitemap to Bing Webmaster Tools</li>
                    <li>• Monitor crawl errors in search console</li>
                    <li>• Validate sitemap XML syntax monthly</li>
                    <li>• Update lastmod dates when content changes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Technical Implementation Details
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Sitemap Structure:</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>
                    • <strong>sitemap.xml:</strong> Main sitemap index referencing all sub-sitemaps
                  </li>
                  <li>
                    • <strong>sitemap-pages.xml:</strong> All website pages with priorities and
                    change frequencies
                  </li>
                  <li>
                    • <strong>sitemap-images.xml:</strong> Image optimization with titles and
                    captions
                  </li>
                  <li>
                    • <strong>sitemap-properties.xml:</strong> Placeholder for dynamic property
                    listings
                  </li>
                </ul>

                <h3 className="font-semibold text-gray-800 mb-2 mt-4">AI Crawler Support:</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• ChatGPT-User, OpenAI-SearchBot, ClaudeBot, PerplexityBot</li>
                  <li>• Enhanced meta tags for AI understanding</li>
                  <li>• Structured content summary for AI crawlers</li>
                  <li>• AI-friendly JSON-LD schema markup</li>
                </ul>
              </div>
            </div>

            {/* Validation Tools */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">External Validation Tools</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Google Tools</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      •{" "}
                      <a
                        href="https://search.google.com/search-console"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        Google Search Console
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        Sitemap Guidelines
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://search.google.com/test/rich-results"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        Rich Results Test
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Validation Tools</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      •{" "}
                      <a
                        href="https://www.xml-sitemaps.com/validate-xml-sitemap.html"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        XML Sitemap Validator
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://validator.w3.org/"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        W3C Markup Validator
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://www.bing.com/webmasters"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener"
                      >
                        Bing Webmaster Tools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
