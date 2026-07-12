"use client";

import { useEffect, useRef, useState } from "react";

export interface PropertyImageProps {
  src: string;
  alt: string;
  onLoad?: () => void;
  priority?: boolean;
}

export function PropertyImage({ src, alt, onLoad, priority = false }: PropertyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    // Intersection Observer for lazy loading
    if (!priority) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              img.src = src;
              observer.unobserve(img);
            }
          });
        },
        {
          rootMargin: "50px",
        }
      );

      observer.observe(img);

      return () => observer.disconnect();
    } else {
      // Load immediately for priority images
      img.src = src;
    }

    return () => {
      // Cleanup function for all code paths
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {!hasError ? (
        <img
          ref={imageRef}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
          <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">Image unavailable</span>
        </div>
      )}

      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]"></div>
        </div>
      )}
    </div>
  );
}
