"use client";

import { useEffect, useState } from "react";
import type { ListingProps } from "../../types/real-estate";
import { ContactAgent } from "./ContactAgent";
import { FavoriteButton } from "./FavoriteButton";
import { PropertyDetails } from "./PropertyDetails";
import { PropertyImage } from "./PropertyImage";

export interface PropertyCardProps {
  listing: ListingProps;
  showContactForm?: boolean;
}

export function PropertyCard({ listing, showContactForm = false }: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [contactFormVisible, setContactFormVisible] = useState(showContactForm);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Track property views for analytics
  useEffect(() => {
    // Analytics tracking
    if (window?.gtag) {
      window.gtag("event", "property_view", {
        property_id: listing.mls,
        property_price: listing.price,
        property_location: `${listing.address.city}, ${listing.address.state}`,
      });
    }
  }, []);

  return (
    <article
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200"
      data-mls={listing.mls}
    >
      <div className="relative overflow-hidden h-60">
        <PropertyImage
          src={listing.photos[0]}
          alt={`${listing.address.street} - ${listing.beds} bed, ${listing.baths} bath`}
          onLoad={() => {
            setImageLoaded(true);
          }}
        />
        <FavoriteButton
          isFavorited={isFavorited}
          mls={listing.mls}
          onToggle={() => {
            setIsFavorited(!isFavorited);
          }}
        />
        {listing.status === "pending" && (
          <div className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded bg-yellow-100 text-yellow-800">
            Pending
          </div>
        )}
        {listing.status === "sold" && (
          <div className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-800">
            Sold
          </div>
        )}
      </div>

      <PropertyDetails listing={listing} />

      <div className="p-4 flex gap-3">
        <ContactAgent
          agent={listing.agent}
          property={listing}
          isVisible={contactFormVisible}
          onToggle={() => {
            setContactFormVisible(!contactFormVisible);
          }}
        />
        <button
          type="button"
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => {
            // Navigate to property details page
            window.location.href = `/property/${listing.mls}`;
          }}
        >
          View Details
        </button>
      </div>
    </article>
  );
}
