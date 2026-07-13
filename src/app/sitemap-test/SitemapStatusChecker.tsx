"use client";

import { useEffect, useState } from "react";

export function SitemapStatusChecker() {
  const [sitemapStatus, setSitemapStatus] = useState("Checking...");
  const [robotsStatus, setRobotsStatus] = useState("Checking...");
  const [pagesStatus, setPagesStatus] = useState("Checking...");
  const [imagesStatus, setImagesStatus] = useState("Checking...");

  useEffect(() => {
    // Auto-test sitemap accessibility
    const testSitemap = async (url: string, setStatus: (value: string) => void) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          setStatus(`✅ ${url} - Accessible (${response.status})`);
        } else {
          setStatus(`❌ ${url} - Error (${response.status})`);
        }
      } catch (err) {
        setStatus(`❌ ${url} - Network Error: ${err}`);
      }
    };

    // Test all sitemap files
    testSitemap("/sitemap.xml", setSitemapStatus);
    testSitemap("/robots.txt", setRobotsStatus);
    testSitemap("/sitemap-pages.xml", setPagesStatus);
    testSitemap("/sitemap-images.xml", setImagesStatus);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Sitemap Links Test</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <a
            href="/sitemap.xml"
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener"
          >
            Main Sitemap (sitemap.xml)
          </a>
          <span className="text-sm text-gray-600">{sitemapStatus}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <a
            href="/robots.txt"
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener"
          >
            Robots.txt
          </a>
          <span className="text-sm text-gray-600">{robotsStatus}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <a
            href="/sitemap-pages.xml"
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener"
          >
            Pages Sitemap (sitemap-pages.xml)
          </a>
          <span className="text-sm text-gray-600">{pagesStatus}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <a
            href="/sitemap-images.xml"
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            rel="noopener"
          >
            Images Sitemap (sitemap-images.xml)
          </a>
          <span className="text-sm text-gray-600">{imagesStatus}</span>
        </div>
      </div>
    </div>
  );
}
