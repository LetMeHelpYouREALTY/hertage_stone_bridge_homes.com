export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Jan Duffy</h3>
            <p className="text-gray-300 mb-4">
              Las Vegas Real Estate Expert specializing in 55+ communities and luxury homes near Red
              Rock Canyon.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:702-789-6561" className="hover:text-blue-400">
                  (702) 789-6561
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:DrDuffySells@HeritageStonebridge.com" className="hover:text-blue-400">
                  DrDuffySells@HeritageStonebridge.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Crossbridge Dr, Las Vegas, NV 89138
              </p>
              <p className="flex items-center">
                <span className="mr-2">🕒</span>
                Mon-Fri: 9AM-6PM | Sat: 10AM-4PM | Sun: By Appointment
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/las-vegas-real-estate"
                  className="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="las-vegas-real-estate"
                  rel="related"
                >
                  Las Vegas Real Estate
                </a>
              </li>
              <li>
                <a
                  href="/summerlin-homes"
                  className="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="summerlin-homes"
                  rel="related"
                >
                  Summerlin Homes
                </a>
              </li>
              <li>
                <a
                  href="/red-rock-canyon-communities"
                  className="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="red-rock-canyon"
                  rel="related"
                >
                  Red Rock Canyon Communities
                </a>
              </li>
              <li>
                <a
                  href="/henderson-real-estate"
                  className="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="henderson-real-estate"
                  rel="related"
                >
                  Henderson Real Estate
                </a>
              </li>
              <li>
                <a
                  href="/northwest-las-vegas"
                  className="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="northwest-las-vegas"
                  rel="related"
                >
                  Northwest Las Vegas
                </a>
              </li>
              <li>
                <a
                  href="/boulder-city-homes"
                  className="hover:text-blue-400"
                  data-content-type="service-area"
                  data-topic="boulder-city-homes"
                  rel="related"
                >
                  Boulder City Homes
                </a>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-xl font-bold mb-4">Property Types</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/55-plus-communities"
                  className="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="55-plus-communities"
                  rel="related"
                >
                  55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/active-adult-communities"
                  className="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="active-adult-communities"
                  rel="related"
                >
                  Active Adult Communities
                </a>
              </li>
              <li>
                <a
                  href="/luxury-homes"
                  className="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="luxury-homes"
                  rel="related"
                >
                  Luxury Homes
                </a>
              </li>
              <li>
                <a
                  href="/gated-communities"
                  className="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="gated-communities"
                  rel="related"
                >
                  Gated Communities
                </a>
              </li>
              <li>
                <a
                  href="/golf-course-homes"
                  className="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="golf-course-homes"
                  rel="related"
                >
                  Golf Course Homes
                </a>
              </li>
              <li>
                <a
                  href="/mountain-view-homes"
                  className="hover:text-blue-400"
                  data-content-type="property-type"
                  data-topic="mountain-view-homes"
                  rel="related"
                >
                  Mountain View Homes
                </a>
              </li>
            </ul>
          </div>

          {/* 55+ Community Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">55+ Community Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="/affordable-55-plus-communities-las-vegas"
                  className="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="affordable-55-plus"
                  rel="related"
                >
                  Affordable 55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/new-55-plus-communities-las-vegas"
                  className="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="new-55-plus"
                  rel="related"
                >
                  New 55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/best-55-plus-communities-las-vegas"
                  className="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="best-55-plus"
                  rel="related"
                >
                  Best 55+ Communities
                </a>
              </li>
              <li>
                <a
                  href="/luxury-retirement-communities-las-vegas"
                  className="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="luxury-retirement"
                  rel="related"
                >
                  Luxury Retirement Communities
                </a>
              </li>
              <li>
                <a
                  href="/55-plus-communities-las-vegas-for-sale"
                  className="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="55-plus-for-sale"
                  rel="related"
                >
                  55+ Communities for Sale
                </a>
              </li>
              <li>
                <a
                  href="/55-and-over-communities-las-vegas-for-rent"
                  className="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="55-plus-for-rent"
                  rel="related"
                >
                  55+ Communities for Rent
                </a>
              </li>
              <li>
                <a
                  href="/55-plus-communities-las-vegas"
                  className="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="55-plus-general"
                  rel="related"
                >
                  55+ Communities Las Vegas
                </a>
              </li>
              <li>
                <a
                  href="/55-and-over-communities-summerlin-las-vegas"
                  className="hover:text-blue-400"
                  data-content-type="service"
                  data-topic="55-plus-summerlin"
                  rel="related"
                >
                  55+ Communities Summerlin
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>
                <a href="/blog" className="hover:text-blue-400">
                  Real Estate Blog
                </a>
              </li>
              <li>
                <a href="/market-analysis" className="hover:text-blue-400">
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="/neighborhood-insights" className="hover:text-blue-400">
                  Neighborhood Insights
                </a>
              </li>
              <li>
                <a href="/luxury-living-guide" className="hover:text-blue-400">
                  Luxury Living Guide
                </a>
              </li>
              <li>
                <a href="/community-comparison" className="hover:text-blue-400">
                  Community Comparison
                </a>
              </li>
              <li>
                <a href="/market-reports" className="hover:text-blue-400">
                  Las Vegas Market Reports
                </a>
              </li>
              <li>
                <a href="/community-guides" className="hover:text-blue-400">
                  Community Guides
                </a>
              </li>
              <li>
                <a href="/home-selling-guide" className="hover:text-blue-400">
                  Home Selling Guide
                </a>
              </li>
              <li>
                <a href="/first-time-buyers" className="hover:text-blue-400">
                  First Time Buyers
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:text-blue-400">
                  Client Testimonials
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="space-y-2">
              <h4 className="font-semibold">Follow Dr. Jan Duffy</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/DrJanDuffyRealEstate"
                  className="text-gray-300 hover:text-blue-400"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://www.linkedin.com/in/drjanduffy"
                  className="text-gray-300 hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="https://www.instagram.com/drjanduffylasvegas"
                  className="text-gray-300 hover:text-blue-400"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Dr. Jan Duffy, Nevada Real Estate License #S.0197614</p>
              <p>Licensed Real Estate Professional serving Las Vegas & Summerlin</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-blue-400">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-blue-400">
                Sitemap
              </a>
            </div>
          </div>

          {/* SEO Keywords Footer */}
          <div className="mt-6 text-xs text-gray-500 leading-relaxed">
            <p>
              Dr. Jan Duffy is a Las Vegas real estate expert specializing in 55+ communities,
              active adult living, luxury homes, and gated communities in Summerlin, Red Rock
              Canyon, Henderson, and Northwest Las Vegas. Serving clients in Del Webb communities,
              Sun City, Siena, The Ridges, and all premier Nevada retirement communities.
              Features AI-powered market analysis, neighborhood insights, luxury living guides,
              and community comparisons for enhanced real estate intelligence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
