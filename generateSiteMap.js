const fs = require('fs');

// Function to generate the current date in YYYY-MM-DD format
function getCurrentDate() {
  const date = new Date();
  return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
}

// Generate the sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://localhost:5173/</loc>
    <lastmod>${getCurrentDate()}</lastmod>
  </url>
  <url>
    <loc>http://localhost:5173/Movies</loc>
    <lastmod>${getCurrentDate()}</lastmod>
  </url>
  <url>
    <loc>http://localhost:5173/TvShow</loc>
    <lastmod>${getCurrentDate()}</lastmod>
  </url>
  <url>
    <loc>http://localhost:5173/Favorite</loc>
    <lastmod>${getCurrentDate()}</lastmod>
  </url>
</urlset>`;

// Write the sitemap to a file
fs.writeFileSync('public/sitemap.xml', sitemap); // Adjust the path as needed
