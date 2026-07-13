import type { Metadata } from "next";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert | Heritage at Stonebridge",
  description: "Contact Dr. Jan Duffy for expert Las Vegas real estate services. Call (702) 789-6561 or email DrDuffySells@HeritageStonebridge.com. Located at Crossbridge Dr, Las Vegas, NV 89138.",
  openGraph: {
    title: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
    description: "Contact Dr. Jan Duffy for expert Las Vegas real estate services. Call (702) 789-6561 or email DrDuffySells@HeritageStonebridge.com.",
    type: "website",
    url: "https://heritagestonebridge.com/contact",
    images: [{ url: "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
    description: "Contact Dr. Jan Duffy for expert Las Vegas real estate services. Call (702) 789-6561.",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Dr. Jan Duffy" }],
  alternates: {
    canonical: "https://heritagestonebridge.com/contact",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://heritagestonebridge.com/#localbusiness",
  "name": "Heritage at Stonebridge | Homes by Dr. Jan Duffy",
  "description": "Premier Heritage at Stonebridge real estate services in Las Vegas. Expert knowledge of Las Vegas market trends, pricing, and neighborhood insights with 500+ successful transactions.",
  "image": {
    "@type": "ImageObject",
    "url": "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
    "width": 400,
    "height": 400
  },
  "telephone": "+1-702-789-6561",
  "email": "DrDuffySells@HeritageStonebridge.com",
  "url": "https://heritagestonebridge.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Crossbridge Dr",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89138",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates", 
    "latitude": "36.1716",
    "longitude": "-115.3384"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday", 
      "opens": "By Appointment",
      "closes": "By Appointment"
    }
  ],
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "36.1716",
      "longitude": "-115.3384"
    },
    "geoRadius": "50000"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City",
      "name": "Henderson",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    },
    {
      "@type": "City",
      "name": "Summerlin",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Real Estate Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Buying Services",
          "description": "Expert guidance through the home buying process"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Selling Services",
          "description": "Professional home selling and marketing services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heritage at Stonebridge Specialist",
          "description": "Specialized expertise in Heritage at Stonebridge community"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "55+ Community Expert",
          "description": "Expert knowledge of active adult communities"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/DrJanDuffyRealEstate",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.instagram.com/drjanduffylasvegas"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Nevada Real Estate Division"
    },
    "identifier": "S.0197614"
  }
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "LocalBusiness",
    "@id": "https://heritagestonebridge.com/#localbusiness"
  },
  "name": "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
  "description": "Contact information for Dr. Jan Duffy, Las Vegas real estate expert specializing in Heritage at Stonebridge and 55+ communities.",
  "url": "https://heritagestonebridge.com/contact"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Dr. Jan Duffy's phone number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dr. Jan Duffy's phone number is (702) 789-6561. You can call this number to speak directly with her about your real estate needs."
      }
    },
    {
      "@type": "Question",
      "name": "What is Dr. Jan Duffy's email address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dr. Jan Duffy's email address is DrDuffySells@HeritageStonebridge.com. You can email her for inquiries about real estate services."
      }
    },
    {
      "@type": "Question",
      "name": "What are Dr. Jan Duffy's business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dr. Jan Duffy's business hours are Monday-Friday 9:00 AM - 6:00 PM, Saturday 10:00 AM - 4:00 PM, and Sunday by appointment."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Dr. Jan Duffy's office located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dr. Jan Duffy's office is located at Crossbridge Dr, Las Vegas, NV 89138, in the Heritage at Stonebridge area."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://heritagestonebridge.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://heritagestonebridge.com/contact"
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact Dr. Jan Duffy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Your Las Vegas Real Estate Expert
          </p>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto mb-8">
            Ready to start your real estate journey? Contact Dr. Jan Duffy for expert guidance 
            in Heritage at Stonebridge, 55+ communities, and luxury properties throughout Las Vegas.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with Dr. Jan Duffy for your real estate needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Now</h3>
              <p className="text-gray-600 mb-4">Speak directly with Dr. Jan Duffy</p>
              <a
                href="tel:702-789-6561"
                className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                (702) 789-6561
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send a detailed message</p>
              <a
                href="mailto:DrDuffySells@HeritageStonebridge.com"
                className="text-green-600 hover:text-green-800 font-semibold text-sm break-all"
              >
                DrDuffySells@HeritageStonebridge.com
              </a>
            </div>

            {/* Office */}
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600 mb-4">Visit our location</p>
              <p className="text-purple-600 font-semibold text-sm">
                Crossbridge Dr<br />
                Las Vegas, NV 89138
              </p>
            </div>

            {/* Hours */}
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 mb-4">Business hours</p>
              <div className="text-orange-600 font-semibold text-sm">
                <p>Mon-Fri: 9AM-6PM</p>
                <p>Sat: 10AM-4PM</p>
                <p>Sun: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy serves clients throughout the Las Vegas metropolitan area 
              with specialized expertise in premier communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Las Vegas</h3>
              <p className="text-gray-600">Complete metropolitan area coverage</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Summerlin</h3>
              <p className="text-gray-600">Premier master-planned community</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Henderson</h3>
              <p className="text-gray-600">Established neighborhoods and new construction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Red Rock Canyon</h3>
              <p className="text-gray-600">Properties with stunning mountain views</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Northwest Las Vegas</h3>
              <p className="text-gray-600">Growing communities and luxury homes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Boulder City</h3>
              <p className="text-gray-600">Historic charm and scenic beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy specializes in multiple areas of Las Vegas real estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏘️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Heritage at Stonebridge</h3>
              <p className="text-gray-600 text-sm">Community specialist</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">55+ Communities</h3>
              <p className="text-gray-600 text-sm">Active adult living</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Luxury Properties</h3>
              <p className="text-gray-600 text-sm">High-end homes</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">First-Time Buyers</h3>
              <p className="text-gray-600 text-sm">Expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait to begin your real estate journey. Contact Dr. Jan Duffy today 
            for expert guidance and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Call (702) 789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-block text-center"
            >
              Send Email
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-200 text-sm">
              <strong>Nevada Real Estate License:</strong> S.0197614
              <br />
              <strong>Office:</strong> Crossbridge Dr, Las Vegas, NV 89138
              <br />
              <strong>Hours:</strong> Mon-Fri 9AM-6PM | Sat 10AM-4PM | Sun By Appointment
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Contact Dr. Jan Duffy"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
}
