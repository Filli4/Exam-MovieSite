// scripts/generateSiteMap.js
import fs from 'fs';        // Import the file system module
import { SitemapStream, streamToPromise } from 'sitemap'; // Import necessary parts from 'sitemap'
import { createWriteStream } from 'fs'; // For writing the sitemap to a file

// Create a stream to write to sitemap.xml
const sitemapStream = new SitemapStream({ hostname: 'http://localhost:5173' }); // Change to your production URL

// Define the URLs to include in the sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/TvShow', changefreq: 'monthly', priority: 0.7 },
  { url: '/Movies', changefreq: 'monthly', priority: 0.7 },
  { url: '/Search', changefreq: 'monthly', priority: 0.7 },
  { url: '/Favorite', changefreq: 'monthly', priority: 0.7 },
  { url: '/Detail/:imdbID', changefreq: 'monthly', priority: 0.7 },
  // Add more routes here
];

// Stream the URLs into the sitemap stream
urls.forEach((url) => sitemapStream.write(url));

// Close the stream after all URLs are written
sitemapStream.end();

// Create the sitemap file
streamToPromise(sitemapStream)
  .then((sitemapOutput) => {
    fs.writeFileSync('./public/sitemap.xml', sitemapOutput.toString()); // Save the sitemap to the public folder
    console.log('Sitemap generated: public/sitemap.xml');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });
