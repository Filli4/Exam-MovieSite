const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to serve sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

app.listen(5173, () => {
  console.log('Server is running on  http://localhost:5173/');
});
