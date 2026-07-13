import type { Metadata } from "next";
import { RealScoutHeroWidget } from "~/components/real-estate/RealScoutHeroWidget";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";

export const metadata: Metadata = {
  title:
    "Heritage at Stonebridge - Luxury 55+ Communities in Summerlin, Las Vegas | Dr. Jan Duffy",
  description:
    "Discover luxury 55+ active adult communities near Red Rock Canyon in Summerlin, Las Vegas. Heritage at Stonebridge offers gated living, resort amenities & stunning mountain views. Dr. Jan Duffy, your 55+ specialist - Call (702) 789-6561",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://heritagestonebridge.com/",
  },
  authors: [{ name: "Dr. Jan Duffy" }],
  openGraph: {
    title: "Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge",
    description:
      "Discover luxury 55+ active adult communities near Red Rock Canyon. Heritage at Stonebridge offers gated living, resort amenities & mountain views in Summerlin.",
    type: "website",
    url: "https://heritagestonebridge.com",
    siteName: "Heritage at Stonebridge",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@heritage_stonebridge",
    title: "Las Vegas 55+ Communities Red Rock Canyon | Heritage at Stonebridge",
    description:
      "Discover luxury 55+ active adult communities near Red Rock Canyon. Heritage at Stonebridge offers gated living, resort amenities & mountain views in Summerlin.",
  },
  other: {
    "content-type": "real-estate-community",
    audience: "adults-55-plus",
    location: "Las Vegas, Nevada, USA",
    "community-type": "active-adult-gated-community",
    "geo.region": "US-NV",
    "geo.placename": "Las Vegas, Nevada",
    "geo.position": "36.1699;-115.1398",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://heritagestonebridge.com/#organization",
  name: "Heritage at Stonebridge | Homes by Dr. Jan Duffy",
  alternateName: [
    "Heritage at Stonebridge",
    "Dr. Jan Duffy Real Estate",
    "Homes by Dr. Jan Duffy",
    "Stonebridge Real Estate",
  ],
  description:
    "Heritage at Stonebridge specializes in luxury homes and new construction in Las Vegas, Summerlin, Henderson, and Red Rock Canyon. Expert guidance from Dr. Jan Duffy with 500+ successful transactions.",
  url: "https://heritagestonebridge.com",
  logo: {
    "@type": "ImageObject",
    url: "https://heritagestonebridge.com/images/heritage-stonebridge-logo.jpg",
    width: 600,
    height: 300,
  },
  image: {
    "@type": "ImageObject",
    url: "https://heritagestonebridge.com/images/dr-jan-duffy-headshot.jpg",
    width: 400,
    height: 400,
  },
  telephone: "+1-702-789-6561",
  email: "DrDuffySells@HeritageStonebridge.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Crossbridge Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89138",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1716",
    longitude: "-115.3384",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "By Appointment",
      closes: "By Appointment",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Las Vegas",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
    {
      "@type": "City",
      name: "Henderson",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
    {
      "@type": "City",
      name: "Summerlin",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
    {
      "@type": "Place",
      name: "Red Rock Canyon",
      containedInPlace: {
        "@type": "State",
        name: "Nevada",
      },
    },
  ],
  serviceType: [
    "Luxury Home Sales",
    "New Construction Homes",
    "Investment Properties",
    "Heritage Community Specialist",
    "Stonebridge Expert",
    "Red Rock Canyon Properties",
    "55+ Community Specialist",
    "Active Adult Living",
  ],
  knowsAbout: [
    "Stonebridge Community",
    "Heritage Homes",
    "Red Rock Canyon Real Estate",
    "Summerlin Properties",
    "Las Vegas Luxury Market",
    "Nevada Real Estate Law",
    "55+ Communities",
    "Active Adult Living",
    "Gated Communities",
    "Investment Analysis",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    recognizedBy: {
      "@type": "Organization",
      name: "Nevada Real Estate Division",
    },
    identifier: "S.0197614",
  },
  sameAs: [
    "https://www.facebook.com/DrJanDuffyRealEstate",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.instagram.com/drjanduffylasvegas",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Real Estate Services",
      description:
        "Comprehensive real estate services including buying, selling, and investment consultation",
    },
    areaServed: {
      "@type": "State",
      name: "Nevada",
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://heritagestonebridge.com/about#person",
  name: "Dr. Jan Duffy",
  honorificPrefix: "Dr.",
  givenName: "Jan",
  familyName: "Duffy",
  jobTitle: "Real Estate Agent",
  description:
    "Licensed Nevada real estate professional with doctorate degree and 500+ successful transactions. Expert in Las Vegas luxury market, investment properties, and first-time homebuyer programs.",
  image: {
    "@type": "ImageObject",
    url: "https://heritagestonebridge.com/images/dr-jan-duffy-professional.jpg",
    width: 400,
    height: 400,
  },
  telephone: "+1-702-789-6561",
  email: "DrDuffySells@HeritageStonebridge.com",
  url: "https://heritagestonebridge.com/about",
  worksFor: {
    "@type": "RealEstateAgent",
    "@id": "https://heritagestonebridge.com/#organization",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Real Estate Agent",
    occupationLocation: {
      "@type": "State",
      name: "Nevada",
    },
    skills: [
      "Real Estate Sales",
      "Market Analysis",
      "Investment Consulting",
      "Luxury Home Marketing",
      "Client Relations",
      "55+ Community Specialist",
      "Active Adult Living Expert",
    ],
  },
  knowsAbout: [
    "Las Vegas Real Estate",
    "Nevada Property Law",
    "Investment Analysis",
    "Market Trends",
    "Luxury Properties",
    "Stonebridge Community",
    "Red Rock Canyon Properties",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Doctorate Degree",
      educationalLevel: "Doctoral",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Real Estate License",
      recognizedBy: {
        "@type": "Organization",
        name: "Nevada Real Estate Division",
      },
      identifier: "S.0197614",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.facebook.com/DrJanDuffyRealEstate",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Heritage at Stonebridge special?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heritage at Stonebridge is a premier 55+ active adult community in Summerlin, Las Vegas, featuring luxury homes, resort-style amenities, and stunning mountain views of Red Rock Canyon. The gated community offers resort-style amenities including clubhouse, swimming pools, fitness center, pickleball courts, and walking trails.",
      },
    },
    {
      "@type": "Question",
      name: "What types of homes are available in Heritage at Stonebridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heritage at Stonebridge offers three distinct home collections: Cromwell (1,232-1,456 sq ft), Stirling (1,456-2,100 sq ft), and Evander (2,100-2,873 sq ft). All homes feature single-story living with luxury finishes and resort-style amenities.",
      },
    },
    {
      "@type": "Question",
      name: "How close is Heritage at Stonebridge to Red Rock Canyon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Heritage at Stonebridge is located just 12 miles from Red Rock Canyon National Conservation Area, making it easy to enjoy hiking, rock climbing, and scenic drives in this natural wonder.",
      },
    },
    {
      "@type": "Question",
      name: "What is the HOA fee for Heritage at Stonebridge homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HOA fee for Heritage at Stonebridge homes is approximately $410 per month, which includes maintenance of common areas, security, and access to all community amenities.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://heritagestonebridge.com",
    },
  ],
};

const residentialComplexSchema = {
  "@context": "https://schema.org",
  "@type": "ResidentialComplex",
  name: "Heritage at Stonebridge",
  description:
    "Luxury 55+ active adult community in Summerlin, Las Vegas featuring resort-style amenities and stunning mountain views.",
  url: "https://heritagestonebridge.com",
  image: "https://heritagestonebridge.com/images/heritage-stonebridge.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Crossbridge Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89138",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.1699",
    longitude: "-115.1398",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Resort-Style Pool",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Golf Course Access",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "24/7 Security",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Gated Community",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Mountain Views",
      value: true,
    },
  ],
  numberOfUnits: "500+",
  developer: {
    "@type": "Organization",
    name: "Heritage at Stonebridge Development",
  },
  propertyType: "55+ Active Adult Community",
  ageRestriction: "55+",
  hasMap: "https://www.google.com/maps/place/Heritage+at+Stonebridge",
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialComplexSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow-sm">
              Heritage at Stonebridge
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 font-medium">
              Luxury 55+ Active Adult Living in the Heart of Summerlin, Las Vegas
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Experience resort-style amenities, stunning Red Rock Canyon views, and gated security in Las Vegas&apos;s premier active adult community.
              Heritage at Stonebridge offers three distinct home collections from Lennar, featuring modern single-story designs with prices starting from $464,990. Currently 15 homes available for sale.
              Dr. Jan Duffy specializes in helping you find the perfect 55+ home in Heritage at Stonebridge and surrounding Summerlin areas.
            </p>
            <div className="text-center mb-8">
              <p className="text-base text-gray-500 max-w-3xl mx-auto">
                <strong>Popular Searches:</strong> Heritage at Stonebridge reviews • Homes for sale in Heritage at Stonebridge •
                New Construction 55+ communities in Summerlin, NV • Stonebridge Summerlin • Stonebridge Las Vegas •
                Heritage Las Vegas NV • Heritage 55+ community • Lennar Summerlin
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://drjanduffy.realscout.com/onboarding"
                target="_blank"
                rel="noopener"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center text-lg"
              >
                Schedule Private Tour
              </a>
              <button
                type="button"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 text-lg shadow-md hover:shadow-lg"
              >
                View Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Luxury Amenities & Lifestyle</h2>
            <p className="text-lg text-gray-600 mb-8">Experience the finest in 55+ active adult living with resort-style amenities</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="/55-plus-communities/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Explore 55+ Communities
              </a>
              <a href="/summerlin-homes/" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Summerlin Homes
              </a>
              <a href="/real-estate/" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Real Estate Tools
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">8,000 Sq Ft Clubhouse</h3>
              <p className="text-gray-600">State-of-the-art facility with fitness center, multi-purpose rooms, and social spaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">Resort-Style Pool & Spa</h3>
              <p className="text-gray-600">Outdoor pool, heated lap pool, and spa for relaxation and water aerobics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-2">Pickleball & Bocce Courts</h3>
              <p className="text-gray-600">Multiple courts for friendly games and organized tournaments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Heritage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Heritage at Stonebridge?</h2>
            <p className="text-lg text-gray-600 mb-8">Discover what makes our community the premier choice for 55+ living in Las Vegas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Three Home Collections</h3>
              <p className="text-gray-600">Cromwell (1,232-1,422 sq ft), Stirling (1,747-2,236 sq ft), and Evander (2,515-2,873 sq ft)</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lennar Everything&apos;s Included</h3>
              <p className="text-gray-600">Popular features and upgrades included at no extra cost</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon Views</h3>
              <p className="text-gray-600">Stunning mountain backdrop with easy access to outdoor recreation</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Current Pricing</h3>
              <p className="text-gray-600">Cromwell: $464,990-$512,990 | Stirling: $675,990-$736,990 | Evander: $861,990-$910,990</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Luxury Living?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a private tour of Heritage at Stonebridge and discover why this is the perfect
            place for your next chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition-colors shadow-lg inline-block text-center"
            >
              Schedule Private Tour
            </a>
            <button
              type="button"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors shadow-lg"
            >
              Call (702) 789-6561
            </button>
          </div>
        </div>
      </section>

      {/* RealScout Hero Widget */}
      <RealScoutHeroWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Exclusive Heritage at Stonebridge Listings"
        subtitle="Schedule Your Private Tour Today"
        priceMin="600000"
        priceMax="900000"
      />

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Featured Listings"
        subtitle="Call (702) 789-6561"
        priceMin="600000"
        priceMax="900000"
      />
    </>
  );
}
