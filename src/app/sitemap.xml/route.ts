export async function GET() {
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Main pages sitemap - All website pages -->
    <sitemap>
        <loc>https://heritagestonebridge.com/sitemap-pages.xml</loc>
        <lastmod>${currentDate}</lastmod>
    </sitemap>
    
    <!-- Property listings sitemap - Real estate focused pages -->
    <sitemap>
        <loc>https://heritagestonebridge.com/sitemap-properties.xml</loc>
        <lastmod>${currentDate}</lastmod>
    </sitemap>
    
    <!-- Images sitemap - All images for better SEO -->
    <sitemap>
        <loc>https://heritagestonebridge.com/sitemap-images.xml</loc>
        <lastmod>${currentDate}</lastmod>
    </sitemap>
    
</sitemapindex>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=1800",
    },
  });
}
