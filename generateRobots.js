import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // To define __dirname

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV === 'development';

const robotsContent = isDev
  ? 'User-agent: *\nDisallow: /' // Disallow all in development
  : 'User-agent: *\nAllow: /\nSitemap: http://localhost:5173/sitemap.xml'; // Allow all in production

fs.writeFileSync(path.join(__dirname, 'public', 'robots.txt'), robotsContent);
console.log('Robots.txt generated: public/robots.txt');
