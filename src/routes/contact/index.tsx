import { component$, useTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { GbpActions } from "~/components/gbp/GbpActions";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { GBP } from "~/config/gbp";
import {
  getOpeningHoursSpecification,
  getSpecialOpeningHoursSpecification,
} from "~/lib/local-business-schema";

export const head: DocumentHead = {
  title: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert | Heritage at Stonebridge",
  meta: [
    {
      name: "description",
      content:
        "Contact Heritage Stonebridge | Homes By Dr. Jan Duffy. Call or text (702) 789-6561. Crossbridge Dr, Las Vegas, NV 89138. Mon–Fri 9:00 AM–6:00 PM, Sat 10:00 AM–4:30 PM, Sun Closed.",
    },
    {
      property: "og:title",
      content: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Contact Dr. Jan Duffy for expert Las Vegas real estate services. Call (702) 789-6561 or email DrDuffySells@HeritageStonebridge.com.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/contact",
    },
    {
      property: "og:image",
      content: "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Contact Dr. Jan Duffy for expert Las Vegas real estate services. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Dr. Jan Duffy",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/contact",
    },
  ],
};

export default component$(() => {
  // Inject comprehensive LocalBusiness schema - September 2025 Google "Perspective" Compliant
  useTask$(() => {
    if (typeof document !== "undefined") {
      // Primary LocalBusiness Schema
      const localBusinessSchema = document.createElement('script');
      localBusinessSchema.type = 'application/ld+json';
      localBusinessSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${GBP.url}#localbusiness`,
        "name": GBP.name,
        "description": GBP.description,
        "image": {
          "@type": "ImageObject",
          "url": "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
          "width": 400,
          "height": 400
        },
        "telephone": GBP.telephoneSchema,
        "email": GBP.email,
        "url": GBP.url,
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
          "latitude": GBP.latitude,
          "longitude": GBP.longitude
        },
        "hasMap": GBP.mapsUri,
        "openingHoursSpecification": getOpeningHoursSpecification(),
        "specialOpeningHoursSpecification": getSpecialOpeningHoursSpecification(),
        "priceRange": "$$",
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": GBP.latitude,
            "longitude": GBP.longitude
          },
          "geoRadius": "12000"
        },
        "areaServed": GBP.areaServed.map((area) => ({
          "@type": "Place",
          "name": area.name,
        })),
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
          "identifier": GBP.license
        }
      });

      // ContactPage Schema
      const contactPageSchema = document.createElement('script');
      contactPageSchema.type = 'application/ld+json';
      contactPageSchema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "LocalBusiness",
          "@id": `${GBP.url}#localbusiness`
        },
        "name": "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
        "description": "Contact information for Dr. Jan Duffy, Las Vegas real estate expert specializing in Heritage at Stonebridge and 55+ communities.",
        "url": "https://heritagestonebridge.com/contact"
      });

      // FAQ Schema for Contact Page
      const faqSchema = document.createElement('script');
      faqSchema.type = 'application/ld+json';
      faqSchema.textContent = JSON.stringify({
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
              "text": "Business hours are Monday–Friday 9:00 AM–6:00 PM, Saturday 10:00 AM–4:30 PM, and Sunday closed. Closed July 3–4, 2026 for Independence Day."
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
      });

      // Breadcrumb Schema
      const breadcrumbSchema = document.createElement('script');
      breadcrumbSchema.type = 'application/ld+json';
      breadcrumbSchema.textContent = JSON.stringify({
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
      });

      // Inject all schemas
      document.head.appendChild(localBusinessSchema);
      document.head.appendChild(contactPageSchema);
      document.head.appendChild(faqSchema);
      document.head.appendChild(breadcrumbSchema);
    }
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Contact {GBP.name}
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Real estate agent for Heritage at Stonebridge, Summerlin West (89138)
          </p>
          <p class="text-lg text-blue-200 max-w-4xl mx-auto mb-8">
            Downsizing, relocating to Las Vegas, or selling inside Heritage? Call or text{" "}
            {GBP.telephoneDisplay} for MLS-backed pricing, private tours, and straightforward advice.
          </p>
          <GbpActions variant="dark" />
        </div>
      </section>

      {/* Contact Information */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with Dr. Jan Duffy for your real estate needs
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div class="text-center p-6 bg-blue-50 rounded-lg">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📞</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Call</h3>
              <p class="text-gray-600 mb-4">Speak with Dr. Jan Duffy</p>
              <a
                href={`tel:${GBP.telephoneTel}`}
                class="text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                {GBP.telephoneDisplay}
              </a>
            </div>

            <div class="text-center p-6 bg-teal-50 rounded-lg">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">💬</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Text</h3>
              <p class="text-gray-600 mb-4">SMS the same number</p>
              <a
                href={GBP.smsHref}
                class="text-teal-700 hover:text-teal-900 font-semibold text-lg"
              >
                {GBP.telephoneDisplay}
              </a>
            </div>

            <div class="text-center p-6 bg-green-50 rounded-lg">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">✉️</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p class="text-gray-600 mb-4">Send a detailed message</p>
              <a
                href={`mailto:${GBP.email}`}
                class="text-green-600 hover:text-green-800 font-semibold text-sm break-all"
              >
                {GBP.email}
              </a>
            </div>

            <div class="text-center p-6 bg-purple-50 rounded-lg">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📍</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Office</h3>
              <p class="text-gray-600 mb-4">Business location</p>
              <a
                href={GBP.mapsUri}
                target="_blank"
                rel="noopener noreferrer"
                class="text-purple-600 hover:text-purple-800 font-semibold text-sm"
              >
                {GBP.streetAddress}
                <br />
                {GBP.addressLocality}, {GBP.addressRegion} {GBP.postalCode}
              </a>
            </div>

            <div class="text-center p-6 bg-orange-50 rounded-lg">
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">🕒</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
              <div class="text-orange-700 font-semibold text-sm space-y-1">
                {GBP.hoursLines.map((line) => (
                  <p key={line.days}>
                    {line.days}: {line.hours}
                  </p>
                ))}
                <p class="text-orange-600 font-normal pt-2">
                  Closed Jul 3–4, 2026 (Independence Day)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit {GBP.name}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {GBP.addressDisplay}. Wheelchair accessible parking and entrance.
            </p>
            <GbpActions />
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title={`Map of ${GBP.name} at ${GBP.addressDisplay}`}
              src={GBP.mapsEmbedUri}
              class="w-full h-80 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p class="text-center text-sm text-gray-500 mt-4">
            {GBP.accessibility.join(" · ")}
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Listed Google Business Profile service areas: Las Vegas 89138 and Summerlin West.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {GBP.areaServed.map((area) => (
              <div key={area.placeId} class="bg-blue-50 p-6 rounded-lg shadow-sm text-center border border-blue-100">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                <p class="text-gray-600">Primary service area</p>
              </div>
            ))}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Sun City Summerlin</h3>
              <p class="text-gray-600 text-sm">Fair 55+ community comparisons</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Red Rock Canyon</h3>
              <p class="text-gray-600 text-sm">Nearby recreation and views</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Downtown Summerlin</h3>
              <p class="text-gray-600 text-sm">Shopping and dining nearby</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg text-center">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Summerlin West 89138</h3>
              <p class="text-gray-600 text-sm">Heritage at Stonebridge zip code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specializations
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy specializes in multiple areas of Las Vegas real estate
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center p-6 bg-blue-50 rounded-lg">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-xl">🏘️</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Heritage at Stonebridge</h3>
              <p class="text-gray-600 text-sm">Community specialist</p>
            </div>
            <div class="text-center p-6 bg-green-50 rounded-lg">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-xl">👥</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">55+ Communities</h3>
              <p class="text-gray-600 text-sm">Active adult living</p>
            </div>
            <div class="text-center p-6 bg-purple-50 rounded-lg">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-xl">💎</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Luxury Properties</h3>
              <p class="text-gray-600 text-sm">High-end homes</p>
            </div>
            <div class="text-center p-6 bg-orange-50 rounded-lg">
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-xl">🏠</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">First-Time Buyers</h3>
              <p class="text-gray-600 text-sm">Expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Don't wait to begin your real estate journey. Contact Dr. Jan Duffy today 
            for expert guidance and personalized service.
          </p>
          <GbpActions variant="dark" />
          <div class="mt-8 text-center">
            <p class="text-blue-200 text-sm">
              <strong>Nevada Real Estate License:</strong> {GBP.license}
              <br />
              <strong>Office:</strong> {GBP.addressDisplay}
              <br />
              <strong>Hours:</strong> {GBP.hoursCompact}
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Contact Dr. Jan Duffy"
        subtitle={`Call ${GBP.telephoneDisplay}`}
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
